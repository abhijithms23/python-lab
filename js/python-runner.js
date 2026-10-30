/**
 * python-runner.js — Pyodide-based Python execution engine for Python Lab.
 *
 * Responsibilities:
 *  - Load and initialize Pyodide once
 *  - Execute student Python code safely
 *  - Capture stdout / stderr
 *  - Handle input() via a queue-based prompt system
 *  - Implement a basic execution timeout guard
 *  - Expose a clean API: PythonRunner.run(code, inputs?)
 */

const PythonRunner = (() => {
  let pyodide = null;
  let loading = false;
  let loadCallbacks = [];

  const PYODIDE_CDN =
    "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";

  // ── Public: initialise Pyodide (called once on page load) ─────────────────
  async function init(onProgress) {
    if (pyodide) return pyodide;
    if (loading) {
      return new Promise((resolve) => loadCallbacks.push(resolve));
    }
    loading = true;

    try {
      onProgress?.("Loading Python engine…");
      // Dynamically load the Pyodide script
      await loadScript(PYODIDE_CDN);
      onProgress?.("Starting Python runtime…");
      pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
      });
      onProgress?.("Python ready ✅");
      loadCallbacks.forEach((cb) => cb(pyodide));
      loadCallbacks = [];
      loading = false;
      return pyodide;
    } catch (err) {
      loading = false;
      throw new Error("Failed to load Python engine: " + err.message);
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(s);
    });
  }

  // ── Public: run Python code ───────────────────────────────────────────────
  /**
   * @param {string} code        - Python source code to run
   * @param {string[]} inputs    - Pre-supplied values for input() calls
   * @param {number} timeoutMs   - Max execution time in ms (default 8000)
   * @returns {{ output: string, error: string|null }}
   */
  async function run(code, inputs = [], timeoutMs = 8000) {
    if (!pyodide) {
      return { output: "", error: "Python engine is not ready yet. Please wait." };
    }

    // Replace input() calls with a queue-based version
    const safeCode = wrapInputCalls(code, inputs);

    let output = "";
    let errorMsg = null;

    // Redirect stdout / stderr
    pyodide.setStdout({ batched: (s) => { output += s + "\n"; } });
    pyodide.setStderr({ batched: (s) => { output += s + "\n"; } });

    const runPromise = pyodide.runPythonAsync(safeCode).catch((err) => {
      // Extract only the relevant part of tracebacks
      errorMsg = formatError(err.message || String(err));
    });

    // Simple timeout race
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("⏱️ Execution timed out (8 s). Check for infinite loops.")), timeoutMs)
    );

    try {
      await Promise.race([runPromise, timeoutPromise]);
    } catch (timeoutErr) {
      errorMsg = timeoutErr.message;
      // Interrupt Pyodide if possible
      try { pyodide.runPython("raise KeyboardInterrupt"); } catch {}
    }

    return { output: output.trimEnd(), error: errorMsg };
  }

  // ── Wrap input() calls with a queued version ──────────────────────────────
  function wrapInputCalls(code, inputs) {
    const inputListJSON = JSON.stringify(inputs.map(String));
    const inputShim = `
import sys as _sys

class _InputQueue:
    def __init__(self, values):
        self._queue = list(values)
        self._index = 0
    def __call__(self, prompt=""):
        import js
        if self._index < len(self._queue):
            val = self._queue[self._index]
            self._index += 1
            print(prompt + str(val))
            return str(val)
        else:
            raise EOFError("No more input values provided. Add inputs in the Input box.")

import builtins as _builtins
_builtins.input = _InputQueue(${inputListJSON})
`;
    return inputShim + "\n" + code;
  }

  // ── Format error messages for students ───────────────────────────────────
  function formatError(raw) {
    // Remove Pyodide internal stack frames, keep the student-relevant part
    const lines = raw.split("\n");
    const relevant = lines.filter(
      (l) =>
        !l.includes("pyodide") &&
        !l.includes("_InputQueue") &&
        !l.includes("_builtins") &&
        !l.includes("runPython")
    );
    let msg = relevant.join("\n").trim();

    // Friendly rewrites for common errors
    msg = msg
      .replace(/NameError: name '(.+)' is not defined/, "NameError: '$1' is not defined. Did you create this variable?")
      .replace(/IndentationError/, "IndentationError: Check your indentation (spaces at the start of lines).")
      .replace(/SyntaxError/, "SyntaxError: Check for missing colons (:), quotes, or brackets.")
      .replace(/ZeroDivisionError/, "ZeroDivisionError: You tried to divide by zero.")
      .replace(/EOFError: No more input/, "EOFError: Your program needs more inputs. Add them in the Input box.");

    return msg || "An unknown error occurred.";
  }

  // ── Run test cases for challenge evaluation ───────────────────────────────
  /**
   * Runs an array of test case objects and returns results.
   * Each testCase: { score, mustContain, description }
   */
  async function runTests(testCases, codeTemplate) {
    const results = [];
    for (const tc of testCases) {
      // Build code by replacing the score variable at the top
      const code = codeTemplate.replace(/score\s*=\s*\d+/, `score = ${tc.score}`);
      const { output, error } = await run(code);
      const combined = (output + " " + (error || "")).toLowerCase();
      const passed = tc.mustContain.some((kw) => combined.includes(kw.toLowerCase()));
      results.push({
        description: tc.description,
        score: tc.score,
        expected: tc.mustContain,
        actual: output || error,
        passed,
      });
    }
    return results;
  }

  return { init, run, runTests };
})();
