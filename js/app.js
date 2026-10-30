/**
 * app.js — Main application controller for Python Lab.
 * Handles navigation, Pyodide initialization, stage switching, and UI setup.
 */

(async function App() {
  // ── Constants ─────────────────────────────────────────────────────────────
  const ACTIVE_LESSON_ID = "conditional-statements";
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
    buildNav();
    switchStage("learn");
    setupProgressReset();
    initLoadingOverlay();
    initCompletionModal();

    // Load lesson content immediately (no Pyodide needed for rendering)
    LessonEngine.init(ACTIVE_LESSON_ID);
    ChallengeEngine.init(ACTIVE_LESSON_ID);
    Progress.updateUI();
    updateTopicHeader();

    // Load Pyodide in background
    try {
      await PythonRunner.init((msg) => setLoaderMessage(msg));
      hideLoadingOverlay();
    } catch (err) {
      setLoaderMessage("⚠️ Python engine failed to load. Check your internet connection and refresh.");
      console.error(err);
    }
  });

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
      btn.classList.toggle("active", btn.id === "nav-" + stageId);
    });
    document.getElementById("main-content")?.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Topic header ──────────────────────────────────────────────────────────
  function updateTopicHeader() {
    const lesson = LESSONS[ACTIVE_LESSON_ID];
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
    document.documentElement.style.setProperty("--accent", lesson.color);
    document.documentElement.style.setProperty("--accent-secondary", lesson.colorSecondary);
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

  // Expose switchStage globally for inline onclick handlers
  window.App = { switchStage };
})();
