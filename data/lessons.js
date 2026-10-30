/**
 * lessons.js — Data-driven lesson definitions for Python Lab.
 * Each lesson object contains all educational content for one topic.
 * To add a new topic, add a new entry to the LESSONS object below.
 */

const LESSONS = {
  "conditional-statements": {
    id: "conditional-statements",
    title: "Conditional Statements",
    subtitle: "Make your code think and decide!",
    icon: "🔀",
    color: "#6c63ff",
    colorSecondary: "#48cfad",
    xpReward: 200,
    badge: "🏅",
    badgeName: "Decision Maker",
    level: "Beginner",
    duration: "45 minutes",

    objectives: [
      "Understand what conditional statements are and why they're useful",
      "Write if, elif, and else statements correctly",
      "Use comparison operators (==, !=, <, >, <=, >=)",
      "Use logical operators (and, or, not) to combine conditions",
      "Apply conditionals to solve real-world problems",
    ],

    // ── STAGE 1: LEARN ──────────────────────────────────────────────────────
    lessons: [
      {
        id: "what-are-conditionals",
        title: "What Are Conditional Statements?",
        icon: "🤔",
        content: `
          <p>Every day you make decisions based on conditions:</p>
          <ul>
            <li><em>"If it's raining, I'll take an umbrella."</em></li>
            <li><em>"If I'm hungry, I'll eat. Otherwise, I'll keep working."</em></li>
            <li><em>"If the score is A, print 'Excellent'. If it's B, print 'Good'. Otherwise, print 'Keep trying'."</em></li>
          </ul>
          <p>Python lets your programs make the same kinds of decisions using <strong>conditional statements</strong>.</p>
          <p>The keyword <code>if</code> tells Python: <em>"Only run this block of code if the condition is true."</em></p>
        `,
        example: {
          code: `# Basic if statement
age = 18

if age >= 18:
    print("You are an adult.")
    print("You can vote!")

print("Program continues here...")`,
          explanation:
            "Python checks whether `age >= 18` is True. Since 18 >= 18 is True, it runs the indented block. The last line always runs because it is outside the if block.",
        },
      },
      {
        id: "if-else",
        title: "if … else — Two Paths",
        icon: "🔁",
        content: `
          <p>Sometimes you want to do one thing when a condition is <strong>True</strong>, and something different when it is <strong>False</strong>.</p>
          <p>Use <code>else</code> to handle the second path.</p>
          <p><strong>Key rule:</strong> The <code>else</code> block runs <em>only</em> when the <code>if</code> condition is False.</p>
        `,
        example: {
          code: `temperature = 35

if temperature > 30:
    print("It's hot outside! 🌞")
    print("Remember to drink water.")
else:
    print("The weather feels nice. 🌤️")
    print("Good day for a walk!")`,
          explanation:
            "Because 35 > 30 is True, Python runs the if block and skips the else block. Change temperature to 20 and see what happens.",
        },
      },
      {
        id: "elif",
        title: "elif — Multiple Conditions",
        icon: "🌿",
        content: `
          <p>What if there are more than two possibilities? Use <code>elif</code> (short for <em>else if</em>) to check additional conditions.</p>
          <p>Python checks conditions from top to bottom and runs the <strong>first</strong> block whose condition is True. After that, it skips all remaining elif/else blocks.</p>
        `,
        example: {
          code: `score = 75

if score >= 90:
    print("Grade: A — Excellent! 🌟")
elif score >= 80:
    print("Grade: B — Great job! 👍")
elif score >= 70:
    print("Grade: C — Good effort! 🙂")
elif score >= 60:
    print("Grade: D — You passed.")
else:
    print("Grade: F — Please review the material.")`,
          explanation:
            "Python checks each condition in order. 75 >= 90 is False, 75 >= 80 is False, but 75 >= 70 is True — so it prints Grade: C and stops checking.",
        },
      },
      {
        id: "comparison-operators",
        title: "Comparison Operators",
        icon: "⚖️",
        content: `
          <p>Conditions are built using <strong>comparison operators</strong>. Each one compares two values and returns <code>True</code> or <code>False</code>.</p>
          <table>
            <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
            <tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td>True</td></tr>
            <tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code></td><td>True</td></tr>
            <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>7 &gt; 4</code></td><td>True</td></tr>
            <tr><td><code>&lt;</code></td><td>Less than</td><td><code>2 &lt; 9</code></td><td>True</td></tr>
            <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>5 &gt;= 5</code></td><td>True</td></tr>
            <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>3 &lt;= 4</code></td><td>True</td></tr>
          </table>
          <p>⚠️ Don't confuse <code>=</code> (assignment) with <code>==</code> (comparison)!</p>
        `,
        example: {
          code: `x = 10

print(x == 10)   # True  — x equals 10
print(x != 5)    # True  — x is not 5
print(x > 15)    # False — 10 is not > 15
print(x <= 10)   # True  — 10 is <= 10`,
          explanation:
            "Each comparison returns True or False. These boolean results are what if statements check.",
        },
      },
      {
        id: "logical-operators",
        title: "Logical Operators — and, or, not",
        icon: "🔗",
        content: `
          <p>You can combine multiple conditions using <strong>logical operators</strong>.</p>
          <ul>
            <li><code>and</code> — Both conditions must be True</li>
            <li><code>or</code> — At least one condition must be True</li>
            <li><code>not</code> — Flips True to False and False to True</li>
          </ul>
        `,
        example: {
          code: `age = 20
has_id = True

# and — both must be True
if age >= 18 and has_id:
    print("Entry allowed ✅")
else:
    print("Entry denied ❌")

# or — at least one must be True
is_weekend = False
is_holiday = True

if is_weekend or is_holiday:
    print("School is closed 🎉")

# not — reverses the condition
is_raining = False
if not is_raining:
    print("Great day for outdoor sports! ⚽")`,
          explanation:
            "Logical operators let you build complex decision-making logic from simple conditions.",
        },
      },
    ],

    // ── STAGE 2: EXPLORE — interactive demo config ───────────────────────────
    explore: {
      title: "Decision Tree Explorer",
      description:
        "Adjust the values below and watch Python's conditional logic in action. See exactly which branch is taken and why.",
    },

    // ── STAGE 3: PRACTICE ────────────────────────────────────────────────────
    exercises: [
      {
        id: "ex-easy",
        difficulty: "Easy",
        difficultyColor: "#48cfad",
        title: "Positive or Negative?",
        description:
          "Write a program that checks if a number is positive, negative, or zero and prints the appropriate message.",
        starterCode: `number = -7

# Write your if/elif/else statement below
# Expected output for -7: "The number is negative."
# Expected output for 0:  "The number is zero."
# Expected output for 5:  "The number is positive."
`,
        solution: `number = -7

if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")`,
        hints: [
          "Use if to check if the number is greater than 0.",
          "Use elif to check if the number is less than 0.",
          "Use else for the remaining case — when neither condition is true.",
        ],
        testCases: [
          {
            input: { number: 5 },
            expected: "The number is positive.",
            wrap: `number = {number}\nif number > 0:\n    print("The number is positive.")\nelif number < 0:\n    print("The number is negative.")\nelse:\n    print("The number is zero.")`,
          },
          {
            input: { number: -3 },
            expected: "The number is negative.",
          },
          { input: { number: 0 }, expected: "The number is zero." },
        ],
      },
      {
        id: "ex-medium",
        difficulty: "Medium",
        difficultyColor: "#f7b731",
        title: "Password Strength Checker",
        description:
          "Complete the program so it checks whether a password is Weak, Medium, or Strong based on its length.",
        starterCode: `password = "hello123"

# Rules:
# Less than 6 characters → "Weak password ❌"
# 6 to 11 characters     → "Medium password ⚠️"
# 12 or more characters  → "Strong password ✅"

length = len(password)

# Complete the if/elif/else below:
if ___:
    print("Weak password ❌")
elif ___:
    print("Medium password ⚠️")
else:
    print("Strong password ✅")`,
        solution: `password = "hello123"
length = len(password)

if length < 6:
    print("Weak password ❌")
elif length < 12:
    print("Medium password ⚠️")
else:
    print("Strong password ✅")`,
        hints: [
          "Use len(password) to get the number of characters.",
          "The first condition should check if length < 6.",
          "The elif should check if length < 12 (which means 6–11).",
          "The else handles 12 or more — no condition needed for else.",
        ],
        testCases: [
          { password: "hi", expected: "Weak password ❌" },
          { password: "hello123", expected: "Medium password ⚠️" },
          { password: "superSecure99!", expected: "Strong password ✅" },
        ],
      },
      {
        id: "ex-hard",
        difficulty: "Hard",
        difficultyColor: "#fc5c65",
        title: "Season and Activity Recommender",
        description:
          "Write a program using nested conditionals and logical operators. Given a month (1–12) and a temperature (°C), recommend an outdoor activity.",
        starterCode: `month = 7       # July
temperature = 28  # degrees Celsius

# Determine the season from the month:
#   Dec, Jan, Feb  (12, 1, 2)  → Winter
#   Mar, Apr, May  (3, 4, 5)   → Spring
#   Jun, Jul, Aug  (6, 7, 8)   → Summer
#   Sep, Oct, Nov  (9, 10, 11) → Autumn

# Then recommend an activity:
#   Summer + temperature > 25  → "Go swimming! 🏊"
#   Summer + temperature <= 25 → "Go hiking! 🥾"
#   Winter + temperature < 5   → "Stay indoors! 🏠"
#   Winter + temperature >= 5  → "Go skiing! ⛷️"
#   Spring or Autumn           → "Go cycling! 🚴"

# Write your solution here:
`,
        solution: `month = 7
temperature = 28

if month in [12, 1, 2]:
    season = "Winter"
elif month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
else:
    season = "Autumn"

if season == "Summer" and temperature > 25:
    print("Go swimming! 🏊")
elif season == "Summer":
    print("Go hiking! 🥾")
elif season == "Winter" and temperature < 5:
    print("Stay indoors! 🏠")
elif season == "Winter":
    print("Go skiing! ⛷️")
else:
    print("Go cycling! 🚴")`,
        hints: [
          "First, determine the season using an if/elif/else based on the month number.",
          "Store the season in a variable, then write a second if/elif/else based on that variable and the temperature.",
          'Use the `in` operator: `if month in [12, 1, 2]:` to check multiple months at once.',
          "Combine season and temperature conditions using `and`.",
        ],
      },
    ],

    // ── STAGE 4: BUILD — mini-project ────────────────────────────────────────
    project: {
      title: "🚦 Traffic Light Simulator",
      description:
        "Build an interactive traffic light system! Given a color, your program decides what drivers should do. Extend it to handle pedestrian signals too.",
      starterCode: `# 🚦 Traffic Light Simulator
# Use conditional statements to tell drivers what to do!

light_color = "red"   # Try: "red", "yellow", "green", "flashing_red"

# Step 1: Handle the main traffic light colors
if light_color == "green":
    print("🟢 GO — Proceed through the intersection.")
elif light_color == "yellow":
    # YOUR CODE: What should drivers do on yellow?
    pass
elif light_color == "red":
    # YOUR CODE: What should drivers do on red?
    pass
elif light_color == "flashing_red":
    # YOUR CODE: flashing red means treat it like a stop sign
    pass
else:
    print("⚠️ Unknown signal — proceed with caution.")

# Step 2: Pedestrian signal (bonus!)
walk_signal = "walk"   # Try: "walk" or "don't walk"

# YOUR CODE: Print a message for the pedestrian based on walk_signal
`,
      fullSolution: `light_color = "red"

if light_color == "green":
    print("🟢 GO — Proceed through the intersection.")
elif light_color == "yellow":
    print("🟡 SLOW DOWN — Prepare to stop.")
elif light_color == "red":
    print("🔴 STOP — Wait for the green light.")
elif light_color == "flashing_red":
    print("🔴 STOP — Treat as a stop sign, then proceed when safe.")
else:
    print("⚠️ Unknown signal — proceed with caution.")

walk_signal = "walk"
if walk_signal == "walk":
    print("🚶 Pedestrians: Safe to cross!")
elif walk_signal == "don't walk":
    print("🛑 Pedestrians: Wait — do not cross!")
else:
    print("⚠️ Pedestrian signal unclear.")`,
      features: [
        "Handle all standard traffic light colors",
        'Add "flashing_red" as a special case',
        "Include a pedestrian walk/don't walk signal",
        "Test with at least 3 different color values",
        "Add a message for emergency vehicles (bonus)",
      ],
    },

    // ── STAGE 5/6: CODE CHALLENGE ─────────────────────────────────────────────
    challenge: {
      title: "🎯 Smart Grade Calculator",
      description:
        "Build a grade calculator that converts a numeric score (0–100) into a letter grade and a personalised feedback message. Your program must also handle invalid inputs gracefully.",
      instructions: [
        "Accept a score between 0 and 100.",
        "90–100 → A (Excellent)",
        "80–89  → B (Great)",
        "70–79  → C (Good)",
        "60–69  → D (Passing)",
        "0–59   → F (Needs Improvement)",
        "Below 0 or above 100 → Print an error message",
        "Also check: is the score a perfect 100? Add a special congratulations message.",
      ],
      starterCode: `# 🎯 Smart Grade Calculator
# Your task: convert a score into a grade + feedback

score = 85   # Change this to test different values

# CHALLENGE: Write an if/elif/else chain that:
# 1. Checks for invalid scores (< 0 or > 100)
# 2. Assigns a letter grade (A, B, C, D, F)
# 3. Prints the grade and a personalised feedback message
# 4. Prints a special message if score == 100

# YOUR CODE BELOW:
`,
      hints: [
        "Start by checking for invalid scores first — use `or` to combine two conditions.",
        'Use `elif score == 100:` as a special case before or after the A-grade check. Handle it with extra congratulations.',
        "Work from highest score to lowest: A → B → C → D → F.",
        "Remember: Python stops at the FIRST True condition, so order matters!",
        'Add a variable like `grade = "A"` and `feedback = "Excellent!"` then print them both at the end.',
      ],
      testCases: [
        {
          score: 100,
          mustContain: ["A", "100"],
          description: "Perfect score should give grade A",
        },
        {
          score: 85,
          mustContain: ["B"],
          description: "85 should give grade B",
        },
        {
          score: 73,
          mustContain: ["C"],
          description: "73 should give grade C",
        },
        {
          score: 65,
          mustContain: ["D"],
          description: "65 should give grade D",
        },
        {
          score: 45,
          mustContain: ["F"],
          description: "45 should give grade F",
        },
        {
          score: -5,
          mustContain: ["invalid", "error", "Invalid", "Error"],
          description: "Negative score should show an error",
        },
        {
          score: 105,
          mustContain: ["invalid", "error", "Invalid", "Error"],
          description: "Score > 100 should show an error",
        },
      ],
      xpReward: 200,
    },

    // ── STAGE 7: COMPLETE ─────────────────────────────────────────────────────
    completion: {
      message: "🎉 You've mastered Conditional Statements!",
      subMessage:
        "You can now make your Python programs think and decide — just like a real computer scientist!",
      skills: [
        "Writing if, elif, and else statements",
        "Using comparison operators (==, !=, <, >, <=, >=)",
        "Combining conditions with and, or, not",
        "Handling invalid input gracefully",
        "Building decision trees in code",
      ],
      nextTopic: {
        title: "Python Loops",
        description:
          "Learn how to repeat actions automatically with for and while loops.",
        icon: "🔄",
      },
    },

    // ── FREE EDITOR STARTER CODE ──────────────────────────────────────────────
    editorStarterCode: `# 🐍 Python Lab — Free Editor
# Topic: Conditional Statements
# Experiment freely! Run any Python code here.

name = "Alex"
points = 420

if points >= 500:
    rank = "Gold"
elif points >= 250:
    rank = "Silver"
else:
    rank = "Bronze"

print(f"Hello, {name}! Your rank is: {rank} 🏆")
print(f"You need {500 - points} more points to reach Gold!")
`,
  },
};

// Export for use in other modules
if (typeof module !== "undefined") module.exports = { LESSONS };
