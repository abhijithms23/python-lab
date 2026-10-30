/**
 * app.js — Main application controller for Python Lab.
 * Handles curriculum topic selection, navigation, Pyodide initialization, and UI setup.
 */

(async function App() {
  // ── Curriculum sequence ──────────────────────────────────────────────────
  const TOPIC_ORDER = [
    "python-basics",
    "variables",
    "data-types",
    "type-casting",
    "operators",
    "control-flow",
    "conditional-statements",
    "for-loop",
    "while-loop",
    "functions",
    "lambda",
    "data-structures"
  ];

  let currentTopicId = localStorage.getItem("python_lab_active_topic") || "python-basics";
  // Fallback if topic not in lessons
  if (!LESSONS[currentTopicId]) {
    currentTopicId = "python-basics";
  }

  const STAGES = [
    { id: "learn",     label: "📖 Learn",     icon: "📖" },
    { id: "explore",   label: "🔬 Explore",   icon: "🔬" },
    { id: "practice",  label: "✏️ Practice",  icon: "✏️" },
    { id: "build",     label: "🏗️ Build",     icon: "🏗️" },
    { id: "editor",    label: "🐍 Editor",    icon: "🐍" },
    { id: "challenge", label: "🎯 Challenge", icon: "🎯" },
  ];

  let currentStage = "learn";

  // ── Boot sequence ─────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", async () => {
    buildTopicSelector();
    buildNav();
    switchStage("learn");
    setupProgressReset();
    initLoadingOverlay();
    initCompletionModal();

    // Load active topic content
    loadTopic(currentTopicId);

    // Load Pyodide in background
    try {
      await PythonRunner.init((msg) => setLoaderMessage(msg));
      hideLoadingOverlay();
    } catch (err) {
      setLoaderMessage("⚠️ Python engine failed to load. Check your internet connection and refresh.");
      console.error(err);
    }
  });

  // ── Topic Loading ─────────────────────────────────────────────────────────
  function loadTopic(topicId) {
    if (!LESSONS[topicId]) return;
    currentTopicId = topicId;
    localStorage.setItem("python_lab_active_topic", topicId);

    updateTopicHeader();
    updateTopicSelectorUI();

    LessonEngine.init(currentTopicId);
    ChallengeEngine.init(currentTopicId);
    Progress.updateUI();

    document.getElementById("main-content")?.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildTopicSelector() {
    const aside = document.querySelector(".app-sidebar");
    if (!aside) return;

    // Check if topic list container already exists
    let topicSection = document.getElementById("topic-selector-section");
    if (!topicSection) {
      topicSection = document.createElement("div");
      topicSection.id = "topic-selector-section";
      topicSection.style.marginBottom = "18px";
      topicSection.innerHTML = `
        <div class="sidebar-label">Curriculum Topics</div>
        <div id="topic-list" style="display:flex; flex-direction:column; gap:4px; max-height:260px; overflow-y:auto; padding-right:4px;"></div>
      `;
      // Insert at the top of the sidebar before stages
      aside.insertBefore(topicSection, aside.firstChild);
    }

    const listEl = document.getElementById("topic-list");
    if (!listEl) return;

    listEl.innerHTML = TOPIC_ORDER.map((id, index) => {
      const topic = LESSONS[id];
      if (!topic) return "";
      const isSelected = id === currentTopicId;
      return `
        <button class="nav-btn ${isSelected ? "active" : ""}" 
                id="topic-btn-${id}" 
                onclick="App.switchTopic('${id}')" 
                style="padding:6px 10px; font-size:0.82rem;"
                title="${topic.title}">
          <span style="font-size:0.95rem;">${topic.icon || "📄"}</span>
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">${index + 1}. ${topic.title.split("&")[0].split(":")[0]}</span>
        </button>
      `;
    }).join("");
  }

  function updateTopicSelectorUI() {
    TOPIC_ORDER.forEach((id) => {
      const btn = document.getElementById(`topic-btn-${id}`);
      if (btn) btn.classList.toggle("active", id === currentTopicId);
    });
  }

  // ── Navigation ────────────────────────────────────────────────────────────
  function buildNav() {
    const nav = document.getElementById("stage-nav");
    if (!nav) return;
    nav.innerHTML = STAGES.map(
      (s) => `
      <button class="nav-btn ${s.id === currentStage ? "active" : ""}"
              id="nav-${s.id}"
              onclick="App.switchStage('${s.id}')"
              title="${s.label}">
        <span class="nav-icon">${s.icon}</span>
        <span class="nav-label">${s.label.split(" ").slice(1).join(" ")}</span>
      </button>`
    ).join("");
  }

  function switchStage(stageId) {
    currentStage = stageId;
    document.querySelectorAll(".stage-section").forEach((el) => {
      el.classList.toggle("active", el.id === stageId + "-section");
    });
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      if (btn.id.startsWith("nav-")) {
        btn.classList.toggle("active", btn.id === "nav-" + stageId);
      }
    });
    document.getElementById("main-content")?.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Topic header ──────────────────────────────────────────────────────────
  function updateTopicHeader() {
    const lesson = LESSONS[currentTopicId];
    if (!lesson) return;
    const el = document.getElementById("topic-header");
    if (el) {
      el.innerHTML = `
        <span class="topic-icon">${lesson.icon}</span>
        <div class="topic-info">
          <span class="topic-title">${lesson.title}</span>
          <span class="topic-meta">${lesson.level} · ${lesson.duration}</span>
        </div>`;
    }
    if (lesson.color) document.documentElement.style.setProperty("--accent", lesson.color);
    if (lesson.colorSecondary) document.documentElement.style.setProperty("--accent-secondary", lesson.colorSecondary);
  }

  // ── Loading overlay ───────────────────────────────────────────────────────
  function initLoadingOverlay() {
    const overlay = document.getElementById("loading-overlay");
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="loader-inner">
        <div class="loader-spinner"></div>
        <p id="loader-msg">Loading Python engine…</p>
        <p class="loader-sub">This may take 10–20 seconds on first load.</p>
        <p class="loader-note">⚡ You can read the lesson while Python loads.</p>
      </div>`;
    overlay.style.display = "flex";
  }

  function setLoaderMessage(msg) {
    const el = document.getElementById("loader-msg");
    if (el) el.textContent = msg;
  }

  function hideLoadingOverlay() {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.add("fade-out");
      setTimeout(() => { overlay.style.display = "none"; }, 600);
    }
  }

  // ── Completion modal ──────────────────────────────────────────────────────
  function initCompletionModal() {
    const modal = document.getElementById("completion-modal");
    if (!modal) return;
    modal.innerHTML = `<div class="modal-content"></div>`;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) ChallengeEngine.closeModal();
    });
  }

  // ── Progress reset button ─────────────────────────────────────────────────
  function setupProgressReset() {
    const btn = document.getElementById("reset-progress-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (confirm("Reset all progress? This cannot be undone.")) {
        Progress.reset();
        location.reload();
      }
    });
  }

  // Expose switchStage and switchTopic globally
  window.App = {
    switchStage,
    switchTopic: (topicId) => loadTopic(topicId)
  };
})();
