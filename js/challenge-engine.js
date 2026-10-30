/**
 * challenge-engine.js — Handles Stage 5 (Code Editor) and Stage 6 (Test/Challenge).
 * Manages the main challenge editor, test runner, and completion flow.
 */

const ChallengeEngine = (() => {
  let challengeEditor = null;
  let freeEditor = null;
  let currentLesson = null;

  function init(lessonId) {
    currentLesson = LESSONS[lessonId];
    if (!currentLesson) return;
    renderChallengeStage();
    renderFreeEditor();
  }

  // ── STAGE 5/6: CHALLENGE EDITOR ──────────────────────────────────────────
  function renderChallengeStage() {
    const container = document.getElementById("challenge-container");
    if (!container || !currentLesson) return;

    const ch = currentLesson.challenge;
    const instructionsHtml = ch.instructions
      .map((inst, i) => `<li><span class="inst-num">${i + 1}</span> ${inst}</li>`)
      .join("");

    const isDone = Progress.isChallengeComplete();

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">${ch.title}</h2>
        <p class="stage-subtitle">${ch.description}</p>
      </div>
      <div class="challenge-grid">
        <div class="challenge-left">
          <div class="instructions-box">
            <h3>📋 Instructions</h3>
            <ol class="instructions-list">${instructionsHtml}</ol>
          </div>
          <div class="hints-section">
            <h3>💡 Hints</h3>
            <div id="hints-list" class="hints-list"></div>
            <button class="btn btn-secondary btn-sm" id="hint-btn" onclick="ChallengeEngine.showNextHint()">
              Show Hint (0/${ch.hints.length})
            </button>
          </div>
          <div class="test-results-box" id="test-results-box" style="display:none;">
            <h3>🧪 Test Results</h3>
            <div id="test-results-list"></div>
          </div>
        </div>
        <div class="challenge-right">
          <div class="editor-wrapper" id="challenge-editor-wrapper"></div>
          <div class="challenge-controls">
            <div class="input-group">
              <label for="challenge-input">📥 Input (one per line):</label>
              <textarea id="challenge-input" class="input-textarea" placeholder="Enter input values here..." rows="3"></textarea>
            </div>
            <div class="btn-row">
              <button class="btn btn-primary" id="run-challenge-btn" onclick="ChallengeEngine.runChallenge()">▶ Run Code</button>
              <button class="btn btn-success" id="test-challenge-btn" onclick="ChallengeEngine.runTests()">🧪 Run Tests</button>
              <button class="btn btn-ghost" onclick="ChallengeEngine.resetChallenge()">↺ Reset</button>
            </div>
          </div>
          <div class="challenge-output" id="challenge-output">
            <div class="output-placeholder">▶ Output will appear here after you run your code.</div>
          </div>
          ${isDone ? renderCompletionCard() : ""}
        </div>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById("challenge-editor-wrapper");
      if (el && typeof CodeMirror !== "undefined") {
        challengeEditor = CodeMirror(el, {
          value: ch.starterCode,
          mode: "python",
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 4,
          tabSize: 4,
          indentWithTabs: false,
          lineWrapping: true,
          extraKeys: { Tab: (cm) => cm.execCommand("indentMore") },
        });
      }
    }, 100);
  }

  let hintShown = 0;
  function showNextHint() {
    const ch = currentLesson?.challenge;
    if (!ch) return;
    if (hintShown >= ch.hints.length) return;
    const hintEl = document.createElement("div");
    hintEl.className = "hint-item";
    hintEl.innerHTML = `<span class="hint-num">Hint ${hintShown + 1}</span> ${ch.hints[hintShown]}`;
    document.getElementById("hints-list")?.appendChild(hintEl);
    hintShown++;
    const btn = document.getElementById("hint-btn");
    if (btn) btn.textContent = `Show Hint (${hintShown}/${ch.hints.length})`;
    if (hintShown >= ch.hints.length && btn) btn.disabled = true;
  }

  async function runChallenge() {
    if (!challengeEditor) return;
    const code = challengeEditor.getValue();
    const inputRaw = document.getElementById("challenge-input")?.value || "";
    const inputs = inputRaw.split("\n").map((s) => s.trim()).filter(Boolean);

    const outputEl = document.getElementById("challenge-output");
    outputEl.className = "challenge-output loading";
    outputEl.innerHTML = "⏳ Running your code…";

    const { output, error } = await PythonRunner.run(code, inputs);
    if (error) {
      outputEl.className = "challenge-output error";
      outputEl.innerHTML = `<strong>❌ Error:</strong><pre>${escapeHtml(error)}</pre>
        <p class="error-tip">💡 Check your indentation, colons after if/elif/else, and variable names.</p>`;
    } else {
      outputEl.className = "challenge-output success";
      outputEl.innerHTML = `<pre>${escapeHtml(output || "(no output)")}</pre>`;
    }
  }

  async function runTests() {
    if (!challengeEditor) return;
    const code = challengeEditor.getValue();
    const ch = currentLesson.challenge;

    const resultsBox = document.getElementById("test-results-box");
    const resultsList = document.getElementById("test-results-list");
    const outputEl = document.getElementById("challenge-output");

    resultsBox.style.display = "block";
    resultsList.innerHTML = "<p>⏳ Running test cases…</p>";

    const results = [];
    for (const tc of ch.testCases) {
      // Inject the test score at the very top, overriding any score assignment in student code.
      // This handles both "score = X" already present and the case where it isn't yet.
      let testCode;
      if (/score\s*=\s*[-\d]+/.test(code)) {
        testCode = code.replace(/score\s*=\s*[-\d]+/, `score = ${tc.score}`);
      } else {
        testCode = `score = ${tc.score}\n` + code;
      }
      const { output, error } = await PythonRunner.run(testCode);
      const combined = ((output || "") + " " + (error || "")).toLowerCase();
      const passed = tc.mustContain.some((kw) => combined.includes(kw.toLowerCase()));
      results.push({ ...tc, passed, actual: output || error });
    }

    const passed = results.filter((r) => r.passed).length;
    const total = results.length;
    const allPassed = passed === total;

    resultsList.innerHTML = results
      .map(
        (r) => `
      <div class="test-case ${r.passed ? "pass" : "fail"}">
        <span class="test-icon">${r.passed ? "✅" : "❌"}</span>
        <div class="test-info">
          <strong>${r.description}</strong>
          <code>score = ${r.score}</code>
          ${!r.passed ? `<span class="test-got">Got: ${escapeHtml(r.actual || "(no output)")}</span>` : ""}
        </div>
      </div>`
      )
      .join("");

    resultsList.innerHTML += `
      <div class="test-summary ${allPassed ? "all-pass" : "some-fail"}">
        ${allPassed ? "🎉" : "🔧"} ${passed}/${total} tests passed
      </div>`;

    if (allPassed && !Progress.isChallengeComplete()) {
      Progress.markChallengeComplete();
      Progress.addXP(currentLesson.challenge.xpReward);
      Progress.unlockBadge(
        currentLesson.id,
        currentLesson.badgeName,
        currentLesson.badge
      );
      showCompletionModal();
    }

    outputEl.className = "challenge-output " + (allPassed ? "success" : "wrong");
    outputEl.innerHTML = `<strong>${allPassed ? "✅ All tests passed!" : `⚠️ ${total - passed} test(s) failed`}</strong>
      <p>${allPassed ? "Excellent work! Click below to collect your reward." : "Review the failed tests above and try again."}</p>`;
  }

  function resetChallenge() {
    if (challengeEditor && currentLesson) {
      challengeEditor.setValue(currentLesson.challenge.starterCode);
    }
    const outputEl = document.getElementById("challenge-output");
    if (outputEl) {
      outputEl.className = "challenge-output";
      outputEl.innerHTML = '<div class="output-placeholder">▶ Output will appear here after you run your code.</div>';
    }
    const resultsBox = document.getElementById("test-results-box");
    if (resultsBox) resultsBox.style.display = "none";
  }

  function showCompletionModal() {
    const modal = document.getElementById("completion-modal");
    if (!modal) return;

    const comp = currentLesson.completion;
    const skillsHtml = comp.skills.map((s) => `<li>✓ ${s}</li>`).join("");

    modal.querySelector(".modal-content").innerHTML = `
      <div class="completion-inner">
        <div class="completion-burst">🎉</div>
        <h2>${comp.message}</h2>
        <p>${comp.subMessage}</p>
        <div class="badge-award">
          <span class="badge-big">${currentLesson.badge}</span>
          <span class="badge-name">${currentLesson.badgeName} Badge Unlocked!</span>
        </div>
        <div class="xp-award">+${currentLesson.challenge.xpReward} XP Earned!</div>
        <div class="skills-learned">
          <h3>🛠️ Skills Mastered</h3>
          <ul>${skillsHtml}</ul>
        </div>
        <div class="next-topic">
          <strong>Next Topic: ${comp.nextTopic.icon} ${comp.nextTopic.title}</strong>
          <p>${comp.nextTopic.description}</p>
        </div>
        <button class="btn btn-primary btn-lg" onclick="ChallengeEngine.closeModal()">🚀 Continue Learning</button>
      </div>`;

    modal.classList.add("show");
  }

  function closeModal() {
    const modal = document.getElementById("completion-modal");
    if (modal) modal.classList.remove("show");
  }

  function renderCompletionCard() {
    return `<div class="completion-card">
      ✅ Challenge Complete! You earned the ${currentLesson.badgeName} badge.
    </div>`;
  }

  // ── STAGE 5: FREE EDITOR ─────────────────────────────────────────────────
  function renderFreeEditor() {
    const container = document.getElementById("editor-container");
    if (!container || !currentLesson) return;

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">🐍 Free Python Editor</h2>
        <p class="stage-subtitle">Experiment with any Python code. Your workspace, your rules.</p>
      </div>
      <div class="free-editor-layout">
        <div class="free-editor-left">
          <div class="editor-toolbar">
            <span class="editor-label">📝 Code</span>
            <button class="btn btn-primary btn-sm" id="free-run-btn" onclick="ChallengeEngine.runFreeCode()">▶ Run</button>
            <button class="btn btn-ghost btn-sm" onclick="ChallengeEngine.resetFreeEditor()">↺ Reset</button>
            <button class="btn btn-ghost btn-sm" onclick="ChallengeEngine.clearFreeOutput()">🗑️ Clear Output</button>
          </div>
          <div class="editor-wrapper" id="free-editor-wrapper"></div>
          <div class="input-group" style="margin-top:8px">
            <label for="free-input">📥 Input values (one per line):</label>
            <textarea id="free-input" class="input-textarea" placeholder="e.g.&#10;Alex&#10;25&#10;London" rows="4"></textarea>
          </div>
        </div>
        <div class="free-editor-right">
          <div class="terminal-header">
            <span>🖥️ Output</span>
            <span class="terminal-dot"></span>
          </div>
          <div class="terminal-output" id="free-output">
            <span class="terminal-placeholder">▶ Run your code to see output here.</span>
          </div>
        </div>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById("free-editor-wrapper");
      if (el && typeof CodeMirror !== "undefined") {
        freeEditor = CodeMirror(el, {
          value: currentLesson.editorStarterCode,
          mode: "python",
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 4,
          tabSize: 4,
          indentWithTabs: false,
          lineWrapping: true,
          extraKeys: { Tab: (cm) => cm.execCommand("indentMore") },
        });
      }
    }, 200);
  }

  async function runFreeCode() {
    if (!freeEditor) return;
    const code = freeEditor.getValue();
    const inputRaw = document.getElementById("free-input")?.value || "";
    const inputs = inputRaw.split("\n").map((s) => s.trim()).filter(Boolean);

    const outputEl = document.getElementById("free-output");
    outputEl.className = "terminal-output loading";
    outputEl.textContent = "⏳ Running…";

    const { output, error } = await PythonRunner.run(code, inputs);

    if (error) {
      outputEl.className = "terminal-output error";
      outputEl.innerHTML = `<span class="error-line">❌ ${escapeHtml(error)}</span>`;
    } else {
      outputEl.className = "terminal-output";
      outputEl.textContent = output || "(no output)";
    }
  }

  function resetFreeEditor() {
    if (freeEditor && currentLesson) {
      freeEditor.setValue(currentLesson.editorStarterCode);
    }
  }

  function clearFreeOutput() {
    const el = document.getElementById("free-output");
    if (el) {
      el.className = "terminal-output";
      el.innerHTML = '<span class="terminal-placeholder">▶ Run your code to see output here.</span>';
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  return {
    init,
    showNextHint,
    runChallenge,
    runTests,
    resetChallenge,
    closeModal,
    runFreeCode,
    resetFreeEditor,
    clearFreeOutput,
  };
})();
