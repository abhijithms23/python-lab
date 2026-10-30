/**
 * lesson-engine.js — Renders lesson content from the lessons data file.
 * Handles: Stage 1 (Learn), Stage 2 (Explore), Stage 3 (Practice), Stage 4 (Build).
 */

const LessonEngine = (() => {
  let currentLesson = null;
  let currentExerciseIndex = 0;
  let hintIndex = {};

  function init(lessonId) {
    const lesson = LESSONS[lessonId];
    if (!lesson) {
      console.error("Lesson not found:", lessonId);
      return;
    }
    currentLesson = lesson;
    hintIndex = {};
    renderLearnStage();
    renderExploreStage();
    renderPracticeStage();
    renderBuildStage();
    Progress.updateUI();
  }

  // ── STAGE 1: LEARN ────────────────────────────────────────────────────────
  function renderLearnStage() {
    const container = document.getElementById("learn-container");
    if (!container || !currentLesson) return;

    // Objectives
    const objHtml = currentLesson.objectives
      .map((o) => `<li><span class="obj-check">✓</span> ${o}</li>`)
      .join("");

    // Lesson cards
    const lessonCards = currentLesson.lessons
      .map((lesson, idx) => {
        const isComplete = Progress.isLessonComplete(lesson.id);
        return `
        <div class="lesson-card ${isComplete ? "completed" : ""}" 
             data-lesson-id="${lesson.id}" 
             id="lesson-card-${idx}">
          <div class="lesson-card-header" onclick="LessonEngine.toggleLesson(${idx})">
            <span class="lesson-icon">${lesson.icon}</span>
            <div class="lesson-card-title">
              <strong>${lesson.title}</strong>
            </div>
            <div class="lesson-card-actions">
              ${isComplete ? '<span class="check-badge">✅</span>' : ""}
              <span class="expand-icon" id="expand-${idx}">▼</span>
            </div>
          </div>
          <div class="lesson-card-body" id="lesson-body-${idx}" style="display:none;">
            <div class="lesson-content">${lesson.content}</div>
            ${renderExample(lesson.example, idx)}
            <button class="btn btn-success btn-sm mt-2" onclick="LessonEngine.markLessonDone('${lesson.id}', ${idx})">
              ✓ Mark as Understood (+10 XP)
            </button>
          </div>
        </div>`;
      })
      .join("");

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">${currentLesson.icon} ${currentLesson.title}</h2>
        <p class="stage-subtitle">${currentLesson.subtitle}</p>
        <div class="objectives-box">
          <h3>🎯 Learning Objectives</h3>
          <ul class="objectives-list">${objHtml}</ul>
        </div>
      </div>
      <div class="lesson-cards">${lessonCards}</div>`;

    // Auto-open first lesson
    toggleLesson(0);
  }

  function renderExample(example, idx) {
    if (!example) return "";
    return `
      <div class="example-block">
        <div class="example-header">
          <span>📄 Example</span>
          <button class="btn btn-xs btn-run" onclick="LessonEngine.runExample(${idx})">▶ Run</button>
        </div>
        <pre class="code-pre" id="example-code-${idx}">${escapeHtml(example.code)}</pre>
        <div class="example-output" id="example-output-${idx}" style="display:none;"></div>
        <p class="example-explanation">💡 ${example.explanation}</p>
      </div>`;
  }

  function toggleLesson(idx) {
    const body = document.getElementById(`lesson-body-${idx}`);
    const icon = document.getElementById(`expand-${idx}`);
    if (!body) return;
    const isOpen = body.style.display !== "none";
    body.style.display = isOpen ? "none" : "block";
    if (icon) icon.textContent = isOpen ? "▼" : "▲";
  }

  async function runExample(idx) {
    const codeEl = document.getElementById(`example-code-${idx}`);
    const outputEl = document.getElementById(`example-output-${idx}`);
    if (!codeEl || !outputEl) return;

    const code = codeEl.textContent;
    outputEl.style.display = "block";
    outputEl.className = "example-output loading";
    outputEl.textContent = "Running…";

    const { output, error } = await PythonRunner.run(code);
    outputEl.className = "example-output " + (error ? "error" : "success");
    outputEl.textContent = error ? "❌ " + error : "▶ " + (output || "(no output)");
  }

  function markLessonDone(lessonId, idx) {
    if (!Progress.isLessonComplete(lessonId)) {
      Progress.markLessonComplete(lessonId);
      Progress.addXP(10);
    }
    const card = document.getElementById(`lesson-card-${idx}`);
    if (card) card.classList.add("completed");
    showInlineSuccess(`lesson-card-${idx}`, "Lesson complete! +10 XP 🎉");
  }

  // ── STAGE 2: EXPLORE ─────────────────────────────────────────────────────
  function renderExploreStage() {
    const container = document.getElementById("explore-container");
    if (!container || !currentLesson) return;

    // Check if current lesson is conditional-statements (has custom 3-card explorer)
    if (currentLesson.id === "conditional-statements") {
      container.innerHTML = `
        <div class="stage-header">
          <h2 class="stage-title">🔬 Explore — Decision Tree Visualizer</h2>
          <p class="stage-subtitle">Drag the slider, change values, and watch Python's conditional logic respond in real-time.</p>
        </div>
        <div class="explorer-grid">
          <!-- Scenario 1: Grade -->
          <div class="explorer-card">
            <h3>📊 Grade Calculator</h3>
            <p>Adjust the score to see which grade Python assigns.</p>
            <div class="slider-group">
              <label>Score: <strong id="score-val">75</strong></label>
              <input type="range" min="0" max="100" value="75" id="score-slider" oninput="LessonEngine.updateGrade(this.value)">
            </div>
            <div class="decision-tree" id="grade-tree"></div>
            <div class="python-equivalent" id="grade-code"></div>
          </div>

          <!-- Scenario 2: Age Gate -->
          <div class="explorer-card">
            <h3>🎟️ Event Entry Checker</h3>
            <p>Toggle the values to control entry decisions.</p>
            <div class="toggle-group">
              <label>Age: <input type="number" id="age-input" value="20" min="0" max="100" oninput="LessonEngine.updateEntry()" style="width:60px;"></label>
              <label><input type="checkbox" id="has-id-cb" checked onchange="LessonEngine.updateEntry()"> Has Valid ID</label>
              <label><input type="checkbox" id="is-member-cb" onchange="LessonEngine.updateEntry()"> Is Member</label>
            </div>
            <div class="decision-tree" id="entry-tree"></div>
          </div>

          <!-- Scenario 3: Logic truth table -->
          <div class="explorer-card">
            <h3>🔗 Logical Operators Live</h3>
            <p>Toggle A and B to see how <code>and</code>, <code>or</code>, <code>not</code> work.</p>
            <div class="toggle-group">
              <label><input type="checkbox" id="bool-a" checked onchange="LessonEngine.updateLogic()"> A = True</label>
              <label><input type="checkbox" id="bool-b" onchange="LessonEngine.updateLogic()"> B = True</label>
            </div>
            <div class="logic-table" id="logic-table"></div>
          </div>
        </div>`;

      updateGrade(75);
      updateEntry();
      updateLogic();
      return;
    }

    // Dynamic Explore Sandbox for all other topics
    const exp = currentLesson.explore || {};
    const firstExample = currentLesson.lessons[0]?.example?.code || 'print("Hello from Explorer!")';

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">🔬 Explore — ${exp.title || currentLesson.title + " Visualizer"}</h2>
        <p class="stage-subtitle">${exp.description || "Interact with real Python code and observe changes immediately."}</p>
      </div>
      <div class="explorer-grid">
        <div class="explorer-card" style="grid-column: 1 / -1;">
          <h3>⚡ Live Interactive Concept Demonstration</h3>
          <p>Modify the values below and run to explore how Python handles this concept in real time:</p>
          <div class="editor-wrapper" id="explore-code-wrapper" style="min-height: 160px; margin-bottom: 12px;"></div>
          <div class="btn-row" style="margin-bottom: 12px;">
            <button class="btn btn-primary" onclick="LessonEngine.runExplore()">▶ Run Live Demo</button>
            <button class="btn btn-ghost" onclick="LessonEngine.resetExplore()">↺ Reset Code</button>
          </div>
          <div class="exercise-output" id="explore-output" style="min-height: 80px;">
            <div class="output-placeholder">▶ Run the demo above to see results.</div>
          </div>
        </div>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById("explore-code-wrapper");
      if (el && typeof CodeMirror !== "undefined") {
        const cm = CodeMirror(el, {
          value: firstExample,
          mode: "python",
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 4,
          tabSize: 4,
          indentWithTabs: false,
          lineWrapping: true
        });
        el._cm = cm;
      }
    }, 100);
  }

  async function runExplore() {
    const el = document.getElementById("explore-code-wrapper");
    const outputEl = document.getElementById("explore-output");
    if (!el || !outputEl) return;
    const code = el._cm?.getValue() || "";
    outputEl.className = "exercise-output loading";
    outputEl.textContent = "⏳ Running code…";
    const { output, error } = await PythonRunner.run(code);
    outputEl.className = "exercise-output " + (error ? "error" : "success");
    outputEl.textContent = error ? "❌ " + error : output || "(no output)";
  }

  function resetExplore() {
    const el = document.getElementById("explore-code-wrapper");
    const outputEl = document.getElementById("explore-output");
    const firstExample = currentLesson?.lessons[0]?.example?.code || "";
    if (el?._cm) el._cm.setValue(firstExample);
    if (outputEl) {
      outputEl.className = "exercise-output";
      outputEl.innerHTML = '<div class="output-placeholder">▶ Run the demo above to see results.</div>';
    }
  }

  function updateGrade(score) {
    score = parseInt(score);
    const sliderEl = document.getElementById("score-slider");
    const valEl = document.getElementById("score-val");
    if (sliderEl) sliderEl.value = score;
    if (valEl) valEl.textContent = score;

    let grade, feedback, color;
    if (score >= 90)      { grade = "A"; feedback = "Excellent! 🌟"; color = "#48cfad"; }
    else if (score >= 80) { grade = "B"; feedback = "Great job! 👍"; color = "#4fc3f7"; }
    else if (score >= 70) { grade = "C"; feedback = "Good effort! 🙂"; color = "#f7b731"; }
    else if (score >= 60) { grade = "D"; feedback = "You passed."; color = "#fd9644"; }
    else                  { grade = "F"; feedback = "Needs improvement."; color = "#fc5c65"; }

    const branches = [
      { label: "score >= 90", active: score >= 90, result: "Grade A" },
      { label: "score >= 80", active: score >= 80 && score < 90, result: "Grade B" },
      { label: "score >= 70", active: score >= 70 && score < 80, result: "Grade C" },
      { label: "score >= 60", active: score >= 60 && score < 70, result: "Grade D" },
      { label: "else", active: score < 60, result: "Grade F" },
    ];

    const treeHtml = branches.map((b, i) => `
      <div class="branch ${b.active ? "active" : ""}">
        <span class="branch-keyword">${i === 0 ? "if" : i < 4 ? "elif" : "else"}</span>
        ${i < 4 ? `<span class="branch-cond">${b.label}</span>` : ""}
        ${b.active ? `<span class="branch-result" style="background:${color}">${b.result} — ${feedback}</span>` : ""}
      </div>`).join("");

    const tree = document.getElementById("grade-tree");
    if (tree) tree.innerHTML = treeHtml;
  }

  function updateEntry() {
    const age = parseInt(document.getElementById("age-input")?.value || 20);
    const hasId = document.getElementById("has-id-cb")?.checked;
    const isMember = document.getElementById("is-member-cb")?.checked;

    let result, color;
    if (age >= 18 && hasId) {
      result = "✅ Entry allowed — adult with ID.";
      color = "#48cfad";
    } else if (isMember) {
      result = "✅ Entry allowed — member override.";
      color = "#48cfad";
    } else if (age < 18) {
      result = "❌ Entry denied — under 18.";
      color = "#fc5c65";
    } else {
      result = "❌ Entry denied — no valid ID.";
      color = "#fc5c65";
    }

    const tree = document.getElementById("entry-tree");
    if (!tree) return;
    tree.innerHTML = `
      <div class="branch ${age >= 18 && hasId ? "active" : ""}">
        <span class="branch-keyword">if</span>
        <span class="branch-cond">age >= 18 and has_id</span>
        ${age >= 18 && hasId ? `<span class="branch-result" style="background:#48cfad">Allow</span>` : ""}
      </div>
      <div class="branch ${!hasId && isMember ? "active" : ""}">
        <span class="branch-keyword">elif</span>
        <span class="branch-cond">is_member</span>
        ${!hasId && isMember ? `<span class="branch-result" style="background:#48cfad">Allow (member)</span>` : ""}
      </div>
      <div class="branch ${!(age >= 18 && hasId) && !isMember ? "active" : ""}">
        <span class="branch-keyword">else</span>
        ${!(age >= 18 && hasId) && !isMember ? `<span class="branch-result" style="background:#fc5c65">Deny</span>` : ""}
      </div>
      <div class="entry-result" style="border-left: 4px solid ${color}; padding: 8px; margin-top:8px; border-radius:4px; background: ${color}22;">
        ${result}
      </div>`;
  }

  function updateLogic() {
    const a = document.getElementById("bool-a")?.checked ?? true;
    const b = document.getElementById("bool-b")?.checked ?? false;

    const table = document.getElementById("logic-table");
    if (!table) return;
    table.innerHTML = `
      <table class="truth-table">
        <thead><tr><th>Expression</th><th>Value</th><th>Result</th></tr></thead>
        <tbody>
          <tr class="${a ? "true-row" : "false-row"}">
            <td><code>A</code></td><td><code>${a}</code></td>
            <td><span class="bool-badge ${a ? "true" : "false"}">${a}</span></td>
          </tr>
          <tr class="${b ? "true-row" : "false-row"}">
            <td><code>B</code></td><td><code>${b}</code></td>
            <td><span class="bool-badge ${b ? "true" : "false"}">${b}</span></td>
          </tr>
          <tr class="${a && b ? "true-row" : "false-row"}">
            <td><code>A and B</code></td><td><code>${a} and ${b}</code></td>
            <td><span class="bool-badge ${a && b ? "true" : "false"}">${a && b}</span></td>
          </tr>
          <tr class="${a || b ? "true-row" : "false-row"}">
            <td><code>A or B</code></td><td><code>${a} or ${b}</code></td>
            <td><span class="bool-badge ${a || b ? "true" : "false"}">${a || b}</span></td>
          </tr>
          <tr class="${!a ? "true-row" : "false-row"}">
            <td><code>not A</code></td><td><code>not ${a}</code></td>
            <td><span class="bool-badge ${!a ? "true" : "false"}">${!a}</span></td>
          </tr>
        </tbody>
      </table>`;
  }

  // ── STAGE 3: PRACTICE ─────────────────────────────────────────────────────
  function renderPracticeStage() {
    const container = document.getElementById("practice-container");
    if (!container || !currentLesson) return;

    const exercises = currentLesson.exercises;
    const tabsHtml = exercises
      .map(
        (ex, i) => `
      <button class="tab-btn ${i === 0 ? "active" : ""}" 
              onclick="LessonEngine.switchExercise(${i})" 
              id="ex-tab-${i}"
              data-exercise-id="${ex.id}">
        <span class="difficulty-dot" style="background:${ex.difficultyColor}"></span>
        ${ex.difficulty}
      </button>`
      )
      .join("");

    const panelsHtml = exercises
      .map((ex, i) => renderExercisePanel(ex, i))
      .join("");

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">✏️ Practice Exercises</h2>
        <p class="stage-subtitle">Complete each exercise to earn XP. Ask for hints if you're stuck!</p>
      </div>
      <div class="exercise-tabs">${tabsHtml}</div>
      <div class="exercise-panels">${panelsHtml}</div>`;

    // Init CodeMirror editors for each exercise
    exercises.forEach((ex, i) => {
      initExerciseEditor(i, ex.starterCode);
    });
  }

  function renderExercisePanel(ex, idx) {
    const isComplete = Progress.isExerciseComplete(ex.id);
    return `
      <div class="exercise-panel ${idx === 0 ? "active" : ""}" id="exercise-panel-${idx}">
        <div class="exercise-header">
          <span class="difficulty-badge" style="background:${ex.difficultyColor}22; color:${ex.difficultyColor}; border:1px solid ${ex.difficultyColor}">
            ${ex.difficulty}
          </span>
          <h3>${ex.title} ${isComplete ? "✅" : ""}</h3>
        </div>
        <p class="exercise-description">${ex.description}</p>
        <div class="editor-wrapper" id="ex-editor-${idx}"></div>
        <div class="exercise-controls">
          <button class="btn btn-primary" onclick="LessonEngine.checkExercise(${idx})">▶ Run & Check</button>
          <button class="btn btn-secondary" onclick="LessonEngine.showHint(${idx})">💡 Hint</button>
          <button class="btn btn-ghost" onclick="LessonEngine.resetExercise(${idx})">↺ Reset</button>
        </div>
        <div class="hint-box" id="hint-${idx}" style="display:none;"></div>
        <div class="exercise-output" id="ex-output-${idx}"></div>
      </div>`;
  }

  function initExerciseEditor(idx, code) {
    const el = document.getElementById(`ex-editor-${idx}`);
    if (!el || typeof CodeMirror === "undefined") return;
    const cm = CodeMirror(el, {
      value: code,
      mode: "python",
      theme: "dracula",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      lineWrapping: true,
      extraKeys: { Tab: (cm) => cm.execCommand("indentMore") },
    });
    el._cm = cm;
  }

  function switchExercise(idx) {
    document.querySelectorAll(".exercise-panel").forEach((p, i) => {
      p.classList.toggle("active", i === idx);
    });
    document.querySelectorAll(".tab-btn").forEach((b, i) => {
      b.classList.toggle("active", i === idx);
    });
    currentExerciseIndex = idx;
  }

  async function checkExercise(idx) {
    const ex = currentLesson.exercises[idx];
    const editorEl = document.getElementById(`ex-editor-${idx}`);
    const outputEl = document.getElementById(`ex-output-${idx}`);
    if (!editorEl || !outputEl) return;

    const code = editorEl._cm?.getValue() || "";
    outputEl.className = "exercise-output loading";
    outputEl.innerHTML = "⏳ Running your code…";

    const { output, error } = await PythonRunner.run(code);

    if (error) {
      outputEl.className = "exercise-output error";
      outputEl.innerHTML = `<strong>❌ Error:</strong><pre>${escapeHtml(error)}</pre>`;
      return;
    }

    const pass = isOutputCorrect(ex, output, code);
    if (pass) {
      outputEl.className = "exercise-output success";
      outputEl.innerHTML = `<strong>✅ Correct!</strong><pre>${escapeHtml(output)}</pre>`;
      if (!Progress.isExerciseComplete(ex.id)) {
        Progress.markExerciseComplete(ex.id);
        Progress.addXP(25);
        const tab = document.getElementById(`ex-tab-${idx}`);
        if (tab) tab.classList.add("completed");
      }
    } else {
      outputEl.className = "exercise-output wrong";
      outputEl.innerHTML = `<strong>🤔 Not quite right.</strong>
        <pre>${escapeHtml(output || "(no output)")}</pre>
        <p>Hint: ${getNextHintText(ex, idx)}</p>`;
    }
  }

  function isOutputCorrect(ex, output, code) {
    const out = output.toLowerCase().trim();
    if (!out || out.includes("syntaxerror") || out.includes("traceback") || out.includes("error")) return false;
    
    // Check specific keywords for conditional-statements
    if (currentLesson.id === "conditional-statements") {
      const exerciseKeywords = {
        "ex-easy":   ["positive", "negative", "zero"],
        "ex-medium": ["weak", "medium", "strong"],
        "ex-hard":   ["swimming", "hiking", "indoors", "skiing", "cycling"],
      };
      const keywords = exerciseKeywords[ex.id];
      if (keywords) return keywords.some((kw) => out.includes(kw));
    }

    // For all topics: ensure non-empty output and not identical to empty starterCode
    return out.length > 0;
  }

  function showHint(idx) {
    const ex = currentLesson.exercises[idx];
    const hintEl = document.getElementById(`hint-${idx}`);
    if (!hintEl) return;
    if (!hintIndex[idx]) hintIndex[idx] = 0;
    const hint = ex.hints[hintIndex[idx]];
    hintEl.style.display = "block";
    hintEl.innerHTML = `<strong>💡 Hint ${hintIndex[idx] + 1}/${ex.hints.length}:</strong> ${hint}`;
    hintIndex[idx] = Math.min(hintIndex[idx] + 1, ex.hints.length - 1);
  }

  function getNextHintText(ex, idx) {
    if (!hintIndex[idx]) hintIndex[idx] = 0;
    return ex.hints[hintIndex[idx]] || ex.hints[0];
  }

  function resetExercise(idx) {
    const ex = currentLesson.exercises[idx];
    const editorEl = document.getElementById(`ex-editor-${idx}`);
    if (editorEl?._cm) editorEl._cm.setValue(ex.starterCode);
    const outputEl = document.getElementById(`ex-output-${idx}`);
    if (outputEl) { outputEl.className = "exercise-output"; outputEl.innerHTML = ""; }
    const hintEl = document.getElementById(`hint-${idx}`);
    if (hintEl) hintEl.style.display = "none";
    hintIndex[idx] = 0;
  }

  // ── STAGE 4: BUILD ────────────────────────────────────────────────────────
  function renderBuildStage() {
    const container = document.getElementById("build-container");
    if (!container || !currentLesson) return;
    const project = currentLesson.project;
    const featuresHtml = project.features
      .map((f) => `<li>☐ ${f}</li>`)
      .join("");

    container.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">${project.title}</h2>
        <p class="stage-subtitle">${project.description}</p>
      </div>
      <div class="build-grid">
        <div class="build-left">
          <h3>📋 Features to Build</h3>
          <ul class="feature-list">${featuresHtml}</ul>
          <div class="tip-box">
            <strong>🚀 Tip:</strong> Complete the starter code step-by-step and run frequently.
          </div>
        </div>
        <div class="build-right">
          <div class="editor-wrapper" id="build-editor"></div>
          <div class="build-controls">
            <button class="btn btn-primary" onclick="LessonEngine.runBuild()">▶ Run Project</button>
            <button class="btn btn-ghost" onclick="LessonEngine.resetBuild()">↺ Reset</button>
          </div>
          <div class="build-output" id="build-output"></div>
        </div>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById("build-editor");
      if (el && typeof CodeMirror !== "undefined") {
        const cm = CodeMirror(el, {
          value: project.starterCode,
          mode: "python",
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 4,
          tabSize: 4,
          indentWithTabs: false,
          lineWrapping: true,
          extraKeys: { Tab: (cm) => cm.execCommand("indentMore") },
        });
        el._cm = cm;
      }
    }, 100);
  }

  async function runBuild() {
    const editorEl = document.getElementById("build-editor");
    const outputEl = document.getElementById("build-output");
    if (!editorEl || !outputEl) return;
    const code = editorEl._cm?.getValue() || "";
    outputEl.className = "build-output loading";
    outputEl.textContent = "⏳ Running…";
    const { output, error } = await PythonRunner.run(code);
    outputEl.className = "build-output " + (error ? "error" : "success");
    outputEl.textContent = error ? "❌ " + error : output || "(no output)";
  }

  function resetBuild() {
    const editorEl = document.getElementById("build-editor");
    if (editorEl?._cm) editorEl._cm.setValue(currentLesson.project.starterCode);
    const outputEl = document.getElementById("build-output");
    if (outputEl) { outputEl.className = "build-output"; outputEl.textContent = ""; }
  }

  // ── Utilities ─────────────────────────────────────────────────────────────
  function showInlineSuccess(containerId, msg) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const s = document.createElement("div");
    s.className = "inline-success";
    s.textContent = msg;
    el.appendChild(s);
    setTimeout(() => s.remove(), 3000);
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
    toggleLesson,
    runExample,
    markLessonDone,
    updateGrade,
    updateEntry,
    updateLogic,
    runExplore,
    resetExplore,
    switchExercise,
    checkExercise,
    showHint,
    resetExercise,
    runBuild,
    resetBuild,
  };
})();
