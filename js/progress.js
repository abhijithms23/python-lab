/**
 * progress.js — LocalStorage-based progress tracking for Python Lab.
 * Tracks XP, completed lessons, unlocked badges, and exercise attempts.
 */

const Progress = (() => {
  const STORAGE_KEY = "python_lab_progress_v2";

  const defaults = () => ({
    xp: 0,
    badges: [],
    completedLessons: [],
    completedExercises: [],
    challengeCompleted: false,
    currentTopic: null,
    lastUpdated: new Date().toISOString(),
  });

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaults();
      return Object.assign(defaults(), JSON.parse(raw));
    } catch {
      return defaults();
    }
  }

  function save(data) {
    data.lastUpdated = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Progress could not be saved:", e);
    }
  }

  function get() {
    return load();
  }

  function addXP(amount) {
    const data = load();
    data.xp += amount;
    save(data);
    animateXP(amount);
    updateUI();
    return data.xp;
  }

  function unlockBadge(badgeId, badgeName, badgeIcon) {
    const data = load();
    if (!data.badges.find((b) => b.id === badgeId)) {
      data.badges.push({
        id: badgeId,
        name: badgeName,
        icon: badgeIcon,
        earnedAt: new Date().toISOString(),
      });
      save(data);
      showBadgeToast(badgeName, badgeIcon);
      updateUI();
    }
  }

  function markLessonComplete(lessonId) {
    const data = load();
    if (!data.completedLessons.includes(lessonId)) {
      data.completedLessons.push(lessonId);
      save(data);
      updateUI();
    }
  }

  function markExerciseComplete(exerciseId) {
    const data = load();
    if (!data.completedExercises.includes(exerciseId)) {
      data.completedExercises.push(exerciseId);
      save(data);
      updateUI();
    }
  }

  function markChallengeComplete() {
    const data = load();
    data.challengeCompleted = true;
    save(data);
    updateUI();
  }

  function isLessonComplete(lessonId) {
    return load().completedLessons.includes(lessonId);
  }

  function isExerciseComplete(exerciseId) {
    return load().completedExercises.includes(exerciseId);
  }

  function isChallengeComplete() {
    return load().challengeCompleted;
  }

  function reset() {
    save(defaults());
    updateUI();
  }

  function updateUI() {
    const data = load();
    const xpEl = document.getElementById("xp-display");
    const badgeCountEl = document.getElementById("badge-count");
    const xpBarEl = document.getElementById("xp-bar-fill");
    const xpLevelEl = document.getElementById("xp-level");

    if (xpEl) xpEl.textContent = data.xp.toLocaleString();

    // XP level thresholds
    const levels = [0, 50, 150, 300, 500];
    let level = 1;
    for (let i = 0; i < levels.length; i++) {
      if (data.xp >= levels[i]) level = i + 1;
    }
    const nextLevelXP = levels[Math.min(level, levels.length - 1)] || 500;
    const prevLevelXP = levels[level - 1] || 0;
    const pct = Math.min(
      100,
      ((data.xp - prevLevelXP) / (nextLevelXP - prevLevelXP || 1)) * 100
    );

    if (xpBarEl) xpBarEl.style.width = pct + "%";
    if (xpLevelEl) xpLevelEl.textContent = "Level " + level;
    if (badgeCountEl) badgeCountEl.textContent = data.badges.length;

    // Mark completed items in lesson nav
    data.completedLessons.forEach((id) => {
      const el = document.querySelector(`[data-lesson-id="${id}"]`);
      if (el) el.classList.add("completed");
    });
    data.completedExercises.forEach((id) => {
      const el = document.querySelector(`[data-exercise-id="${id}"]`);
      if (el) el.classList.add("completed");
    });
  }

  function animateXP(amount) {
    const el = document.getElementById("xp-display");
    if (!el) return;
    const popup = document.createElement("div");
    popup.className = "xp-popup";
    popup.textContent = "+" + amount + " XP";
    el.parentElement.appendChild(popup);
    setTimeout(() => popup.remove(), 1800);
  }

  function showBadgeToast(badgeName, badgeIcon) {
    const toast = document.createElement("div");
    toast.className = "badge-toast";
    toast.innerHTML = `<span class="badge-toast-icon">${badgeIcon}</span>
      <div><strong>Badge Unlocked!</strong><br>${badgeName}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 50);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  return {
    get,
    addXP,
    unlockBadge,
    markLessonComplete,
    markExerciseComplete,
    markChallengeComplete,
    isLessonComplete,
    isExerciseComplete,
    isChallengeComplete,
    reset,
    updateUI,
  };
})();
