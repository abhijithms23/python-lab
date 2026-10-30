# Python Lab — Learn, Code, Build 🐍

A comprehensive, data-driven, browser-based Python learning platform built with HTML, CSS, JavaScript, and Pyodide (Python in the browser). Designed for students, educators, and cybersecurity enthusiasts to learn programming interactively.

---

## 🚀 Complete Interactive Curriculum (12 Topics)

Python Lab includes full 7-stage learning tracks for:

1. **Python Basics & Syntax** (`python-basics`) — print, comments, math expressions
2. **Variables & Assignment** (`variables`) — storage, incrementing, Pythonic swapping
3. **Data Types** (`data-types`) — int, float, str, bool, and type checking
4. **Type Casting** (`type-casting`) — conversions with int(), float(), str(), bool()
5. **Python Operators** (`operators`) — arithmetic, modulo, floor division, powers, logical
6. **Control Flow** (`control-flow`) — execution pathways, pass, break, continue
7. **Conditional Statements** (`conditional-statements`) — if, elif, else, decision tree explorer
8. **For Loops & Iteration** (`for-loop`) — sequence iteration, range(start, stop, step)
9. **While Loops** (`while-loop`) — condition-driven loops, sentinel control, break conditions
10. **Functions & Reusable Code** (`functions`) — def, parameters, default arguments, return
11. **Lambda & Anonymous Functions** (`lambda`) — map, filter, custom sort keys
12. **Data Structures** (`data-structures`) — Lists, Tuples, Sets, and Dictionaries

---

## 🎮 The 7 Educational Stages in Each Topic

Every single topic is organized into:

| Stage | Name | Educational Design |
|---|---|---|
| 📖 1 | **Learn** | Short, jargon-free lessons with live runnable examples (+10 XP) |
| 🔬 2 | **Explore** | Visual & interactive concept sandbox to observe state changes |
| ✏️ 3 | **Practice** | 3 progressive exercises (Easy, Medium, Hard) with step-by-step hints (+25 XP) |
| 🏗️ 4 | **Build** | Meaningful mini-project connecting code to real-world applications |
| 🐍 5 | **Editor** | Free-form Python workspace with terminal input and standard output |
| 🧪 6 | **Test & Challenge** | Topic-specific coding challenge with automated behavioral test cases |
| 🏆 7 | **Complete** | XP rewards, topic badges, and skill mastery milestones |

---

## 📁 Repository Structure

```
python-lab/
├── index.html              # Responsive app shell & topic viewer
├── css/
│   └── style.css           # Modern dark-theme game-inspired UI
├── data/
│   └── lessons.js          # 12 complete curriculum topics (data-driven)
├── js/
│   ├── app.js              # Topic router, stage switcher & boot sequence
│   ├── python-runner.js    # In-browser Pyodide engine & timeout guard
│   ├── lesson-engine.js    # Dynamic renderer for Stages 1–4
│   ├── challenge-engine.js # Automated test runner for Stages 5–6
│   └── progress.js         # XP, level tracker, badges & LocalStorage
└── README.md
```

---

## 💻 Running Locally

Simply serve with Python's built-in HTTP server:

```bash
cd python-lab
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

Or open `index.html` directly in any web browser.

---

## 🌐 Live GitHub Pages

The website is hosted on GitHub Pages:
**[https://abhijithms23.github.io/python-lab/](https://abhijithms23.github.io/python-lab/)**
