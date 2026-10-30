# Python Lab — Learn, Code, Build

A data-driven, browser-based Python learning platform built with HTML, CSS, JavaScript, and Pyodide (Python in the browser). Designed for beginner students learning programming concepts interactively.

## 🚀 Current Topic: Conditional Statements

Students learn `if`, `elif`, `else`, comparison operators, and logical operators through:

| Stage | Name | Description |
|-------|------|-------------|
| 📖 1 | **Learn** | 5 accordion lessons with runnable examples |
| 🔬 2 | **Explore** | Live Decision Tree Visualizer (sliders + toggles) |
| ✏️ 3 | **Practice** | 3 progressive exercises (Easy / Medium / Hard) |
| 🏗️ 4 | **Build** | Traffic Light Simulator mini-project |
| 🐍 5 | **Editor** | Free Python editor with input support |
| 🎯 6 | **Challenge** | Smart Grade Calculator with 7 automated tests |

## 📁 File Structure

```
python-lab/
├── index.html              # App shell & stage sections
├── css/
│   └── style.css           # Full responsive UI (dark theme)
├── js/
│   ├── app.js              # Navigation, boot sequence, modals
│   ├── python-runner.js    # Pyodide wrapper (run, test, input)
│   ├── lesson-engine.js    # Stages 1–4 renderer
│   ├── challenge-engine.js # Stages 5–6 renderer + test runner
│   └── progress.js         # XP, badges, localStorage
├── data/
│   └── lessons.js          # All lesson content (data-driven)
└── README.md
```

## 🖥️ Running Locally

Simply open `index.html` in any modern browser.

> **Note:** Pyodide (Python engine) requires an internet connection to download (~10 MB). The lesson text and explorer load instantly; only the code execution areas wait for Pyodide.

Or serve with Python's built-in server:
```bash
cd python-lab
python -m http.server 8080
# Open http://localhost:8080
```

## 🌐 Deploying to GitHub Pages

```bash
# 1. Create a new GitHub repository
git init
git add .
git commit -m "Initial commit — Python Lab: Conditional Statements"

# 2. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/python-lab.git
git push -u origin main

# 3. Enable GitHub Pages
# → Repository Settings → Pages → Source: main branch / root
# → Site will be live at https://YOUR_USERNAME.github.io/python-lab/
```

## ➕ Adding a New Topic

1. Add a new entry to `data/lessons.js` with the key being a kebab-case topic ID (e.g. `"python-loops"`).
2. Fill in all required fields: `lessons`, `exercises`, `project`, `challenge`, `completion`, `editorStarterCode`.
3. Change `ACTIVE_LESSON_ID` in `js/app.js` to the new key.
4. No changes to the engine files are needed for standard topics.

## ✅ Features

- ✅ Real Python execution via Pyodide (no backend)
- ✅ CodeMirror 5 editor with Python syntax highlighting
- ✅ input() support via pre-supplied input queue
- ✅ 8-second timeout guard against infinite loops
- ✅ XP system + badge unlocks via localStorage
- ✅ Mobile-responsive layout
- ✅ Data-driven lesson content (easy to extend)
- ✅ Progressive hints system
- ✅ Automated test runner for challenge evaluation
- ✅ Works on GitHub Pages (100% static)

## ⚠️ Limitations

- Progress is stored in the browser's localStorage — it does not sync across devices or browsers.
- Pyodide requires an internet connection on first load.
- Very complex Python programs (heavy computation, threading, filesystem) are not supported in the browser environment.
- The infinite-loop timeout is approximate; very tight loops may still block briefly before being interrupted.
