/**
 * lessons.js — Data-driven lesson definitions for Python Lab.
 * Comprehensive Curriculum:
 *  1. Python Basics
 *  2. Variables
 *  3. Data Types
 *  4. Type Casting
 *  5. Operators
 *  6. Control Flow
 *  7. Conditional Statements
 *  8. For Loop
 *  9. While Loop
 * 10. Functions
 * 11. Lambda
 * 12. Data Structures
 */

const LESSONS = {
  "python-basics": {
  "id": "python-basics",
  "title": "Python Basics & Syntax",
  "subtitle": "Discover Python syntax, print statements, and comments!",
  "icon": "\ud83d\udc0d",
  "color": "#306998",
  "colorSecondary": "#FFD43B",
  "xpReward": 150,
  "badge": "\ud83c\udf31",
  "badgeName": "Python Pioneer",
  "level": "Beginner",
  "duration": "30 minutes",
  "objectives": [
    "Learn Python's core syntax and design philosophy",
    "Use print() to display text, numbers, and expressions",
    "Write single-line (#) and multi-line comments",
    "Understand indentation and avoid basic syntax errors"
  ],
  "lessons": [
    {
      "id": "intro-python",
      "title": "Welcome to Python",
      "icon": "\ud83d\ude80",
      "content": "\n                <p>Python is a clear, human-readable language used in cybersecurity, AI, web development, and data science.</p>\n                <p>Unlike other languages, Python prioritizes clean readable code and uses <strong>indentation</strong> instead of curly braces.</p>\n            ",
      "example": {
        "code": "# Your first Python statement\nprint(\"Hello, Cyber Explorer! \ud83d\udee1\ufe0f\")\nprint(2026)",
        "explanation": "The print() function outputs whatever is inside its parentheses to the screen."
      }
    },
    {
      "id": "python-comments",
      "title": "Comments in Code",
      "icon": "\ud83d\udcac",
      "content": "\n                <p>Comments are notes written for humans that Python ignores during execution.</p>\n                <ul>\n                    <li>Use <code>#</code> for single-line comments.</li>\n                    <li>Triple quotes <code>\"\"\"</code> can span multiple lines.</li>\n                </ul>\n            ",
      "example": {
        "code": "# This is a comment - Python ignores it\nprint(\"Code executed!\")  # Inline comment",
        "explanation": "Comments explain what tricky or critical logic does without modifying output."
      }
    },
    {
      "id": "basic-calculations",
      "title": "Printing Math & Expressions",
      "icon": "\ud83e\uddee",
      "content": "\n                <p>Python can act as a high-powered calculator right inside <code>print()</code>.</p>\n            ",
      "example": {
        "code": "print(10 + 5)\nprint(100 * 3)\nprint(\"Level: \", 1 + 1)",
        "explanation": "Python calculates mathematical expressions before printing."
      }
    }
  ],
  "explore": {
    "title": "Python Interactive Console Preview",
    "description": "See how code statements immediately produce output."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Your First Print Statement",
      "description": "Print the exact greeting 'Hello, Python!' to the screen.",
      "starterCode": "# Print 'Hello, Python!' below\n",
      "hints": [
        "Use the print() function.",
        "Place \"Hello, Python!\" inside parentheses."
      ],
      "solution": "print(\"Hello, Python!\")"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Math in Print",
      "description": "Print the sum of 45 and 55 with the message 'Total: 100'.",
      "starterCode": "# Print 'Total: 100'\n",
      "hints": [
        "You can do print(f'Total: {45 + 55}') or print('Total: 100')"
      ],
      "solution": "print(\"Total:\", 45 + 55)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Multi-line Output with Formatting",
      "description": "Print a 3-line security badge displaying Name, Role, and Status (Active).",
      "starterCode": "# Print 3 lines: Name, Role, and Status\n",
      "hints": [
        "Call print() 3 times or use \\n in a string."
      ],
      "solution": "print(\"Name: Agent Alex\")\nprint(\"Role: Cybersecurity\")\nprint(\"Status: Active\")"
    }
  ],
  "project": {
    "title": "\ud83d\udee1\ufe0f Cyber Terminal Banner",
    "description": "Create an ASCII security system welcome banner that prints system diagnostics and clear status information.",
    "features": [
      "Print an ASCII security banner",
      "Display system name & version",
      "Print system diagnostic status"
    ],
    "starterCode": "# Build your Cyber System Banner\nprint(\"==============================\")\nprint(\"   CYBER DEFENSE SYSTEM v1.0   \")\nprint(\"==============================\")\n# Add your system diagnostics below:\n",
    "fullSolution": "print(\"==============================\")\nprint(\"   CYBER DEFENSE SYSTEM v1.0   \")\nprint(\"==============================\")\nprint(\"Status: FIREWALL ACTIVE \u2705\")\nprint(\"Threat Level: ZERO \ud83d\udee1\ufe0f\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf The System Identity Generator",
    "description": "Create a program that announces system identity with 'System Name: CyShield' and 'Security Level: 5'.",
    "instructions": [
      "Print 'System Name: CyShield'",
      "Print 'Security Level: 5'",
      "Ensure the output contains CyShield and 5"
    ],
    "starterCode": "# Write your system identity announcer\n",
    "hints": [
      "Use two print() statements."
    ],
    "testCases": [
      {
        "description": "Must output CyShield system name",
        "mustContain": [
          "CyShield"
        ],
        "score": 1
      },
      {
        "description": "Must output Security Level 5",
        "mustContain": [
          "5"
        ],
        "score": 2
      }
    ],
    "xpReward": 150
  },
  "completion": {
    "message": "\ud83c\udf89 You've Mastered Python Basics!",
    "subMessage": "You can now print output, calculate values, and write clean readable code.",
    "skills": [
      "Using print()",
      "Writing comments",
      "Formatting console output"
    ],
    "nextTopic": {
      "title": "Variables in Python",
      "description": "Learn how to store and manage data dynamically with variables.",
      "icon": "\ud83d\udce6"
    }
  },
  "editorStarterCode": "# Python Basics Sandbox\nprint(\"Welcome to Python Lab!\")\nprint(\"2026 is an amazing year to code.\")\n"
},

  "variables": {
  "id": "variables",
  "title": "Variables & Assignment",
  "subtitle": "Store, update, and manipulate data like a pro!",
  "icon": "\ud83d\udce6",
  "color": "#9b59b6",
  "colorSecondary": "#8e44ad",
  "xpReward": 175,
  "badge": "\ud83c\udff7\ufe0f",
  "badgeName": "Memory Master",
  "level": "Beginner",
  "duration": "35 minutes",
  "objectives": [
    "Understand what variables are and how Python stores references in memory",
    "Follow Python naming conventions (snake_case)",
    "Perform multiple assignment and dynamic reassignment",
    "Swap variables effortlessly"
  ],
  "lessons": [
    {
      "id": "what-is-variable",
      "title": "What is a Variable?",
      "icon": "\ud83d\udce5",
      "content": "\n                <p>A variable is a labeled storage container for data. You assign a value using the assignment operator <code>=</code>.</p>\n                <p>In Python, you do not declare variable types; Python infers them automatically!</p>\n            ",
      "example": {
        "code": "username = \"neo_matrix\"\nsecurity_clearance = 4\nprint(username)\nprint(security_clearance)",
        "explanation": "username stores the text 'neo_matrix', clearance stores the number 4."
      }
    },
    {
      "id": "reassignment",
      "title": "Updating & Reassigning Variables",
      "icon": "\ud83d\udd04",
      "content": "\n                <p>Variables can change values anytime. You can increment numbers using <code>+=</code>.</p>\n            ",
      "example": {
        "code": "score = 100\nscore = score + 50\nscore += 25\nprint(\"Final Score:\", score)",
        "explanation": "score starts at 100, becomes 150, then becomes 175."
      }
    },
    {
      "id": "naming-rules",
      "title": "Python Naming Conventions",
      "icon": "\ud83d\udcdd",
      "content": "\n                <p>Good variable names make code self-documenting:</p>\n                <ul>\n                    <li>Use <strong>snake_case</strong> (e.g., <code>user_age</code>, <code>max_attempts</code>).</li>\n                    <li>Must start with a letter or underscore, never a number.</li>\n                    <li>Case-sensitive (<code>age</code> and <code>Age</code> are different).</li>\n                </ul>\n            ",
      "example": {
        "code": "user_id = 9021\nfirst_name = \"Sarah\"\nprint(f\"{first_name} (ID: {user_id})\")",
        "explanation": "f-strings (formatted strings) let you embed variable values smoothly."
      }
    }
  ],
  "explore": {
    "title": "Variable Inspector",
    "description": "Watch how variables hold and update values over time."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Declare and Print",
      "description": "Create a variable named 'player_name' with your name and print it.",
      "starterCode": "# Create player_name and print it\n",
      "hints": [
        "player_name = 'Alex'",
        "print(player_name)"
      ],
      "solution": "player_name = \"Alex\"\nprint(player_name)"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Level Up Score",
      "description": "Create 'score = 50', increase it by 25 using +=, then print the result.",
      "starterCode": "score = 50\n# Increase score by 25 and print it\n",
      "hints": [
        "score += 25",
        "print(score)"
      ],
      "solution": "score = 50\nscore += 25\nprint(score)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Swap Two Variables",
      "description": "Swap the values of 'a = 10' and 'b = 20' using Python's tuple unpacking (a, b = b, a), then print both.",
      "starterCode": "a = 10\nb = 20\n# Swap a and b in one line, then print them\n",
      "hints": [
        "In Python you can write: a, b = b, a"
      ],
      "solution": "a = 10\nb = 20\na, b = b, a\nprint(a, b)"
    }
  ],
  "project": {
    "title": "\ud83c\udfae Character Stat Tracker",
    "description": "Track an RPG character's health, gold, and inventory count across various game events.",
    "features": [
      "Store character stats in variables",
      "Simulate receiving damage and looting gold",
      "Print clean stat summaries"
    ],
    "starterCode": "# RPG Character Stat Tracker\nhero_name = \"Aria\"\nhealth = 100\ngold = 50\n\n# Aria takes 20 damage and finds 35 gold:\n# Update the variables and print the final stats\n",
    "fullSolution": "hero_name = \"Aria\"\nhealth = 100\ngold = 50\nhealth -= 20\ngold += 35\nprint(f\"{hero_name} -> Health: {health}, Gold: {gold}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Wallet Balance Calculator",
    "description": "Declare a variable 'balance = 100'. Add 50 deposit, subtract 30 withdrawal, and print 'Final Balance: 120'.",
    "instructions": [
      "Start with balance = 100",
      "Deposit 50 and withdraw 30",
      "Print the final balance containing '120'"
    ],
    "starterCode": "# Calculate wallet balance\nbalance = 100\n",
    "hints": [
      "balance += 50",
      "balance -= 30",
      "print('Final Balance:', balance)"
    ],
    "testCases": [
      {
        "description": "Should calculate 120 balance",
        "mustContain": [
          "120"
        ],
        "score": 1
      }
    ],
    "xpReward": 175
  },
  "completion": {
    "message": "\ud83c\udf89 Variables Mastered!",
    "subMessage": "You now know how to assign, reassign, and unpack variables in Python.",
    "skills": [
      "Variable assignment",
      "Reassignment & incrementing",
      "Pythonic swapping"
    ],
    "nextTopic": {
      "title": "Data Types in Python",
      "description": "Explore integers, floats, strings, and booleans.",
      "icon": "\ud83d\udcca"
    }
  },
  "editorStarterCode": "# Variables Sandbox\nhero = \"Kael\"\nlevel = 15\nxp = 1420\nprint(f\"Hero: {hero} | Level {level} | {xp} XP\")\n"
},

  "data-types": {
  "id": "data-types",
  "title": "Data Types",
  "subtitle": "Numbers, text, and truths: understand Python's fundamental data types!",
  "icon": "\ud83d\udcca",
  "color": "#1abc9c",
  "colorSecondary": "#16a085",
  "xpReward": 175,
  "badge": "\ud83d\udd2c",
  "badgeName": "Type Detective",
  "level": "Beginner",
  "duration": "35 minutes",
  "objectives": [
    "Identify int, float, str, and bool types",
    "Inspect types using the type() function",
    "Work with string quotes and escaping",
    "Understand truthiness and booleans"
  ],
  "lessons": [
    {
      "id": "core-types",
      "title": "The Four Primitive Types",
      "icon": "\ud83e\uddf1",
      "content": "\n                <p>Python has four fundamental primitive data types:</p>\n                <ul>\n                    <li><strong>int</strong>: Whole integers (e.g., <code>42</code>, <code>-5</code>)</li>\n                    <li><strong>float</strong>: Decimals (e.g., <code>3.14</code>, <code>0.001</code>)</li>\n                    <li><strong>str</strong>: Text in quotes (e.g., <code>\"Cyber\"</code>)</li>\n                    <li><strong>bool</strong>: Logical <code>True</code> or <code>False</code></li>\n                </ul>\n            ",
      "example": {
        "code": "age = 25          # int\nprice = 19.99     # float\nuser = \"Root\"     # str\nis_admin = True   # bool\nprint(type(age))\nprint(type(price))\nprint(type(user))\nprint(type(is_admin))",
        "explanation": "type() returns the class type of any object or variable."
      }
    },
    {
      "id": "strings-depth",
      "title": "Strings (str)",
      "icon": "\ud83d\udd24",
      "content": "\n                <p>Strings can use single or double quotes. Use <code>len()</code> to count characters.</p>\n            ",
      "example": {
        "code": "msg = \"Python Lab 2026\"\nprint(\"Length:\", len(msg))\nprint(msg.upper())",
        "explanation": "Strings come with rich built-in methods like .upper(), .lower(), etc."
      }
    }
  ],
  "explore": {
    "title": "Data Type Classifier",
    "description": "Inspect how Python categorizes different values."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Check Data Type",
      "description": "Print the type of 99.5 using type().",
      "starterCode": "# Print the type of 99.5\n",
      "hints": [
        "print(type(99.5))"
      ],
      "solution": "print(type(99.5))"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Boolean Verification",
      "description": "Create a boolean variable 'is_online = True' and print 'User online: True'.",
      "starterCode": "# Define is_online and print\n",
      "hints": [
        "is_online = True",
        "print('User online:', is_online)"
      ],
      "solution": "is_online = True\nprint(\"User online:\", is_online)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Type Diagnostic",
      "description": "Given items x = 10, y = 3.5, z = '7', print their types on separate lines.",
      "starterCode": "x = 10\ny = 3.5\nz = '7'\n# Print type of each\n",
      "hints": [
        "print(type(x))",
        "print(type(y))",
        "print(type(z))"
      ],
      "solution": "x = 10\ny = 3.5\nz = '7'\nprint(type(x))\nprint(type(y))\nprint(type(z))"
    }
  ],
  "project": {
    "title": "\ud83d\udccb Security Log Entry Parser",
    "description": "Build a parser that inspects raw values and assigns appropriate data types.",
    "features": [
      "Store IP address (str), port (int), ping (float), alert (bool)",
      "Validate and print each type"
    ],
    "starterCode": "# Security Log Entry Parser\nip = \"192.168.1.100\"\nport = 443\nlatency_ms = 12.4\nis_blocked = False\n\n# Print diagnostic types for each item\n",
    "fullSolution": "ip = \"192.168.1.100\"\nport = 443\nlatency_ms = 12.4\nis_blocked = False\nprint(f\"{ip} is {type(ip)}\")\nprint(f\"{port} is {type(port)}\")\nprint(f\"{latency_ms} is {type(latency_ms)}\")\nprint(f\"{is_blocked} is {type(is_blocked)}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Primitive Type Identifier",
    "description": "Create four variables of types int, float, str, and bool, and print their types.",
    "instructions": [
      "Create a (int), b (float), c (str), d (bool)",
      "Print the type of each variable"
    ],
    "starterCode": "# Define a, b, c, d with 4 different types and print their types\n",
    "hints": [
      "a = 1; b = 1.0; c = 'hi'; d = True"
    ],
    "testCases": [
      {
        "description": "Contains int type",
        "mustContain": [
          "int"
        ],
        "score": 1
      },
      {
        "description": "Contains float type",
        "mustContain": [
          "float"
        ],
        "score": 2
      },
      {
        "description": "Contains bool type",
        "mustContain": [
          "bool"
        ],
        "score": 3
      }
    ],
    "xpReward": 175
  },
  "completion": {
    "message": "\ud83c\udf89 Data Types Decoded!",
    "subMessage": "You can now identify and utilize Python's foundational data types effortlessly.",
    "skills": [
      "Recognizing int, float, str, bool",
      "Using type() function",
      "Type safety fundamentals"
    ],
    "nextTopic": {
      "title": "Type Casting",
      "description": "Convert between data types safely and reliably.",
      "icon": "\ud83d\udd00"
    }
  },
  "editorStarterCode": "# Data Types Sandbox\nval = 3.14159\nprint(\"Value:\", val)\nprint(\"Type:\", type(val))\n"
},

  "type-casting": {
  "id": "type-casting",
  "title": "Type Casting & Conversion",
  "subtitle": "Convert strings to numbers, numbers to text, and handle conversions safely!",
  "icon": "\ud83d\udd04",
  "color": "#e67e22",
  "colorSecondary": "#d35400",
  "xpReward": 175,
  "badge": "\ud83e\uddd9\u200d\u2642\ufe0f",
  "badgeName": "Type Alchemist",
  "level": "Beginner",
  "duration": "35 minutes",
  "objectives": [
    "Convert string inputs to int and float using int() and float()",
    "Convert numbers to strings using str() for concatenation",
    "Understand boolean conversion (bool() truthiness rules)",
    "Prevent ValueError when converting invalid input"
  ],
  "lessons": [
    {
      "id": "why-casting",
      "title": "Why Type Casting Matters",
      "icon": "\u2753",
      "content": "\n                <p>When you read user input via <code>input()</code>, Python always treats it as a <strong>string</strong> (<code>str</code>).</p>\n                <p>If a user types <code>\"5\"</code> and you add <code>\"5\" + \"5\"</code>, Python concatenates it into <code>\"55\"</code> instead of <code>10</code>!</p>\n                <p>To perform math, you must <em>cast</em> it to an integer or float.</p>\n            ",
      "example": {
        "code": "age_str = \"20\"\nage_num = int(age_str)\nprint(\"Next year:\", age_num + 1)",
        "explanation": "int(\"20\") transforms the text \"20\" into the numeric integer 20."
      }
    },
    {
      "id": "cast-functions",
      "title": "Key Casting Functions",
      "icon": "\ud83d\udee0\ufe0f",
      "content": "\n                <ul>\n                    <li><code>int(x)</code>: Converts x to an integer</li>\n                    <li><code>float(x)</code>: Converts x to a floating-point number</li>\n                    <li><code>str(x)</code>: Converts x to string</li>\n                    <li><code>bool(x)</code>: Converts x to boolean (0, empty strings are False; everything else True)</li>\n                </ul>\n            ",
      "example": {
        "code": "print(float(\"3.5\") * 2)\nprint(\"Score: \" + str(100))\nprint(bool(0))\nprint(bool(\"Admin\"))",
        "explanation": "Casting ensures data works seamlessly across operations."
      }
    }
  ],
  "explore": {
    "title": "Type Conversion Simulator",
    "description": "See how values transform from one type to another."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Convert String to Int",
      "description": "Convert string '42' to an int and print double its value (84).",
      "starterCode": "num_str = '42'\n# Convert to int, multiply by 2 and print\n",
      "hints": [
        "int(num_str) * 2"
      ],
      "solution": "num_str = '42'\nprint(int(num_str) * 2)"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Calculate Average with Floats",
      "description": "Given two score strings s1 = '85.5' and s2 = '90.5', cast them to float, calculate their average (88.0), and print it.",
      "starterCode": "s1 = '85.5'\ns2 = '90.5'\n# Cast to float, calculate average, print\n",
      "hints": [
        "avg = (float(s1) + float(s2)) / 2"
      ],
      "solution": "s1 = '85.5'\ns2 = '90.5'\nprint((float(s1) + float(s2)) / 2)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Safe Input Formatter",
      "description": "Convert the integer 2026 into a string, prefix it with 'Year: ', and print it.",
      "starterCode": "year = 2026\n# Convert to str and print 'Year: 2026'\n",
      "hints": [
        "'Year: ' + str(year)"
      ],
      "solution": "year = 2026\nprint(\"Year: \" + str(year))"
    }
  ],
  "project": {
    "title": "\ud83e\uddfe Receipt Total Calculator",
    "description": "Read price strings from an itemized list, cast them to numbers, calculate subtotal and tax, and format the output.",
    "features": [
      "Cast item prices from strings to floats",
      "Apply a 10% tax rate",
      "Print receipt total"
    ],
    "starterCode": "# Receipt Calculator\nitem1_price = \"29.99\"\nitem2_price = \"14.50\"\n\n# Cast to float, calculate total with 10% tax\n",
    "fullSolution": "item1 = float(\"29.99\")\nitem2 = float(\"14.50\")\nsubtotal = item1 + item2\ntotal = subtotal * 1.10\nprint(f\"Total: ${total:.2f}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf String-to-Math Processor",
    "description": "Given two string variables a = '15' and b = '25', cast them to integers and print 'Sum: 40'.",
    "instructions": [
      "Use a = '15' and b = '25'",
      "Cast both to int",
      "Print output containing '40'"
    ],
    "starterCode": "a = '15'\nb = '25'\n# Cast and print sum\n",
    "hints": [
      "print('Sum:', int(a) + int(b))"
    ],
    "testCases": [
      {
        "description": "Output should contain 40",
        "mustContain": [
          "40"
        ],
        "score": 1
      }
    ],
    "xpReward": 175
  },
  "completion": {
    "message": "\ud83c\udf89 Type Casting Champion!",
    "subMessage": "You can transform data types without breaking code.",
    "skills": [
      "int(), float(), str(), bool()",
      "Safe input conversion",
      "Formatting numbers for output"
    ],
    "nextTopic": {
      "title": "Python Operators",
      "description": "Arithmetic, assignment, comparison, and logical operators.",
      "icon": "\u26a1"
    }
  },
  "editorStarterCode": "# Type Casting Sandbox\nval = \"123.45\"\nnum = float(val)\nprint(\"Float:\", num)\nprint(\"Int:\", int(num))\n"
},

  "operators": {
  "id": "operators",
  "title": "Python Operators",
  "subtitle": "Arithmetic, assignment, comparison, and logical operators in depth!",
  "icon": "\u26a1",
  "color": "#f1c40f",
  "colorSecondary": "#f39c12",
  "xpReward": 175,
  "badge": "\u26a1",
  "badgeName": "Operator Maestro",
  "level": "Beginner",
  "duration": "40 minutes",
  "objectives": [
    "Master arithmetic operators (+, -, *, /, //, %, **)",
    "Use assignment operators (+=, -=, *=)",
    "Evaluate comparison operators (==, !=, >, <, >=, <=)",
    "Combine complex expressions with and, or, not"
  ],
  "lessons": [
    {
      "id": "arithmetic-operators",
      "title": "Arithmetic Operators",
      "icon": "\u2795",
      "content": "\n                <p>Python provides standard math operators plus powerful extras:</p>\n                <ul>\n                    <li><code>/</code>: True float division (e.g. <code>7 / 2 = 3.5</code>)</li>\n                    <li><code>//</code>: Floor/Integer division (e.g. <code>7 // 2 = 3</code>)</li>\n                    <li><code>%</code>: Modulo / Remainder (e.g. <code>7 % 2 = 1</code>)</li>\n                    <li><code>**</code>: Exponent / Power (e.g. <code>2 ** 3 = 8</code>)</li>\n                </ul>\n            ",
      "example": {
        "code": "print(10 // 3)  # 3\nprint(10 % 3)   # 1\nprint(2 ** 4)   # 16",
        "explanation": "Floor division rounds down, modulo gives remainder, ** calculates powers."
      }
    },
    {
      "id": "comparison-logical",
      "title": "Comparison & Logical Operators",
      "icon": "\u2696\ufe0f",
      "content": "\n                <p>Operators like <code>==</code> and <code>!=</code> evaluate to <code>True</code> or <code>False</code>.</p>\n                <p>Combine them using <code>and</code>, <code>or</code>, and <code>not</code>.</p>\n            ",
      "example": {
        "code": "x = 15\nprint(x > 10 and x < 20)  # True\nprint(x % 2 == 0 or x == 15)  # True",
        "explanation": "Logical operators let you build robust multi-check expressions."
      }
    }
  ],
  "explore": {
    "title": "Operator Sandbox & Precedence",
    "description": "Experiment with arithmetic, modulo, and exponentiation."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Modulo Check",
      "description": "Calculate 17 % 5 and print the remainder.",
      "starterCode": "# Print 17 % 5\n",
      "hints": [
        "print(17 % 5)"
      ],
      "solution": "print(17 % 5)"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Powers & Exponents",
      "description": "Calculate 2 to the power of 8 (256) using ** and print it.",
      "starterCode": "# Print 2 to the power of 8\n",
      "hints": [
        "print(2 ** 8)"
      ],
      "solution": "print(2 ** 8)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Even or Odd Expression",
      "description": "Given n = 42, print True if n is even (n % 2 == 0) and greater than 40.",
      "starterCode": "n = 42\n# Print boolean condition check\n",
      "hints": [
        "print(n % 2 == 0 and n > 40)"
      ],
      "solution": "n = 42\nprint(n % 2 == 0 and n > 40)"
    }
  ],
  "project": {
    "title": "\ud83e\uddee Tip & Bill Splitter",
    "description": "Calculate total bill with tip percentage and divide evenly among guests using operators.",
    "features": [
      "Compute tip using multiplication",
      "Compute per-person share using division",
      "Compute leftover cents with modulo"
    ],
    "starterCode": "# Tip & Split Calculator\nbill = 120.00\ntip_percent = 0.15\npeople = 4\n\n# Compute total and per person cost\n",
    "fullSolution": "bill = 120.00\ntip = bill * 0.15\ntotal = bill + tip\nper_person = total / 4\nprint(f\"Total: ${total:.2f}, Per person: ${per_person:.2f}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Operator Expression Master",
    "description": "Calculate (5 + 3) * 2 ** 3 // 4 and print the result (16).",
    "instructions": [
      "Compute the exact expression: (5 + 3) * 2 ** 3 // 4",
      "Print the result"
    ],
    "starterCode": "# Compute and print (5 + 3) * 2 ** 3 // 4\n",
    "hints": [
      "print((5 + 3) * 2 ** 3 // 4)"
    ],
    "testCases": [
      {
        "description": "Output must contain 16",
        "mustContain": [
          "16"
        ],
        "score": 1
      }
    ],
    "xpReward": 175
  },
  "completion": {
    "message": "\ud83c\udf89 Operators Mastered!",
    "subMessage": "You now harness Python's full mathematical and logical operator toolset.",
    "skills": [
      "Arithmetic & modulo",
      "Floor division & exponents",
      "Operator precedence"
    ],
    "nextTopic": {
      "title": "Control Flow",
      "description": "Master how code execution flows with branching and loops.",
      "icon": "\ud83d\udea6"
    }
  },
  "editorStarterCode": "# Operators Playground\nx = 25\ny = 4\nprint(f\"{x} / {y} = {x / y}\")\nprint(f\"{x} // {y} = {x // y} with remainder {x % y}\")\n"
},

  "control-flow": {
  "id": "control-flow",
  "title": "Control Flow & Execution Paths",
  "subtitle": "Understand how Python navigates conditionals, jumps, and sequential execution!",
  "icon": "\ud83d\udea6",
  "color": "#34495e",
  "colorSecondary": "#2c3e50",
  "xpReward": 200,
  "badge": "\ud83e\udded",
  "badgeName": "Flow Navigator",
  "level": "Beginner",
  "duration": "45 minutes",
  "objectives": [
    "Trace sequential execution top-to-bottom",
    "Understand branching with if/elif/else",
    "Use pass, continue, and break statements",
    "Build nested flow architectures"
  ],
  "lessons": [
    {
      "id": "sequential-vs-branching",
      "title": "Sequential vs Branching",
      "icon": "\ud83d\udee4\ufe0f",
      "content": "\n                <p>Normally Python executes statements strictly top-to-bottom.</p>\n                <p><strong>Control flow</strong> introduces branches (decisions) and loops (repetition) to alter that path based on live data.</p>\n            ",
      "example": {
        "code": "status = \"ACCESS_GRANTED\"\nif status == \"ACCESS_GRANTED\":\n    print(\"Welcome to Secure Area\")\nelse:\n    print(\"Alert: Intrusion Detected!\")",
        "explanation": "The flow diverges depending on whether the condition evaluates to True or False."
      }
    },
    {
      "id": "flow-controls",
      "title": "pass, break, and continue",
      "icon": "\ud83d\uded1",
      "content": "\n                <p>Python gives you keywords to control flow:</p>\n                <ul>\n                    <li><code>pass</code>: Placeholder that does nothing</li>\n                    <li><code>break</code>: Exits a loop immediately</li>\n                    <li><code>continue</code>: Skips to the next loop iteration</li>\n                </ul>\n            ",
      "example": {
        "code": "for n in range(5):\n    if n == 2:\n        continue  # skip 2\n    print(n)",
        "explanation": "2 is skipped by continue; the rest print normally (0, 1, 3, 4)."
      }
    }
  ],
  "explore": {
    "title": "Control Flow Architecture",
    "description": "Trace code pathways step by step."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Status Router",
      "description": "Write an if check: if mode == 'active' print 'System Running', else print 'System Idle'. Set mode = 'active'.",
      "starterCode": "mode = 'active'\n# Write if/else router\n",
      "hints": [
        "if mode == 'active':",
        "    print('System Running')"
      ],
      "solution": "mode = 'active'\nif mode == 'active':\n    print(\"System Running\")\nelse:\n    print(\"System Idle\")"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Break on Target",
      "description": "Loop through numbers 1 to 10. When the number is 6, break the loop. Print each number.",
      "starterCode": "for i in range(1, 11):\n    # Break if i == 6, else print i\n    pass\n",
      "hints": [
        "if i == 6: break",
        "print(i)"
      ],
      "solution": "for i in range(1, 11):\n    if i == 6:\n        break\n    print(i)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Filter Evens with Continue",
      "description": "Loop through range(1, 7). If number is odd (i % 2 != 0), continue. Otherwise print the even number.",
      "starterCode": "for i in range(1, 7):\n    # skip odds, print evens\n    pass\n",
      "hints": [
        "if i % 2 != 0: continue",
        "print(i)"
      ],
      "solution": "for i in range(1, 7):\n    if i % 2 != 0:\n        continue\n    print(i)"
    }
  ],
  "project": {
    "title": "\ud83d\udea8 Firewall Traffic Inspection",
    "description": "Inspect incoming packet statuses ('ALLOW', 'BLOCK', 'DROP') and route them to their respective handlers.",
    "features": [
      "Process simulated network packets",
      "Apply status branching",
      "Print blocked traffic warnings"
    ],
    "starterCode": "# Firewall Traffic Inspection\npacket = {\"ip\": \"10.0.0.5\", \"action\": \"ALLOW\"}\n\n# Implement control flow to handle action\n",
    "fullSolution": "packet = {\"ip\": \"10.0.0.5\", \"action\": \"ALLOW\"}\nif packet[\"action\"] == \"ALLOW\":\n    print(\"Packet forwarded \u2705\")\nelif packet[\"action\"] == \"BLOCK\":\n    print(\"Packet blocked \ud83d\uded1\")\nelse:\n    print(\"Packet dropped \u26a0\ufe0f\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Loop Break Controller",
    "description": "Print numbers from 1 to 5 using a loop that breaks when reaching 4. Ensure 1, 2, 3 are printed.",
    "instructions": [
      "Loop range(1, 10)",
      "If number == 4, break",
      "Print each number"
    ],
    "starterCode": "# Loop and break at 4\n",
    "hints": [
      "for i in range(1, 10): if i == 4: break print(i)"
    ],
    "testCases": [
      {
        "description": "Must print 3",
        "mustContain": [
          "3"
        ],
        "score": 1
      }
    ],
    "xpReward": 200
  },
  "completion": {
    "message": "\ud83c\udf89 Flow Controlled!",
    "subMessage": "You can now direct Python execution paths with precision.",
    "skills": [
      "Sequential execution",
      "Branching logic",
      "break, continue, pass keywords"
    ],
    "nextTopic": {
      "title": "Conditional Statements",
      "description": "Master if, elif, else decisions and comparison operators.",
      "icon": "\ud83d\udd00"
    }
  },
  "editorStarterCode": "# Control Flow Sandbox\nfor step in range(1, 6):\n    if step == 3:\n        print(\"Checkpoint 3 - Skipped!\")\n        continue\n    print(f\"Executing Step {step}\")\n"
},

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

  "for-loop": {
  "id": "for-loop",
  "title": "For Loops & Iteration",
  "subtitle": "Iterate through lists, strings, and ranges like a machine!",
  "icon": "\ud83d\udd01",
  "color": "#e74c3c",
  "colorSecondary": "#c0392b",
  "xpReward": 200,
  "badge": "\ud83d\udd04",
  "badgeName": "Loop Champion",
  "level": "Beginner",
  "duration": "45 minutes",
  "objectives": [
    "Iterate over sequences (strings, lists, tuples)",
    "Master the range(start, stop, step) function",
    "Use enumerate() for index and item access",
    "Calculate running sums and aggregations"
  ],
  "lessons": [
    {
      "id": "intro-for",
      "title": "The For Loop in Python",
      "icon": "\ud83c\udfa1",
      "content": "\n                <p>Python's <code>for</code> loop iterates over items of any sequence in order.</p>\n                <p>No index counter needed unless you want one!</p>\n            ",
      "example": {
        "code": "fruits = [\"Apple\", \"Banana\", \"Cherry\"]\nfor fruit in fruits:\n    print(f\"Tasty {fruit} \ud83c\udf4e\")",
        "explanation": "fruit takes the value of each element in the list one by one."
      }
    },
    {
      "id": "range-mastery",
      "title": "Mastering range()",
      "icon": "\ud83d\udccf",
      "content": "\n                <p><code>range()</code> generates sequences of numbers:</p>\n                <ul>\n                    <li><code>range(5)</code>: 0, 1, 2, 3, 4</li>\n                    <li><code>range(1, 6)</code>: 1, 2, 3, 4, 5</li>\n                    <li><code>range(0, 10, 2)</code>: 0, 2, 4, 6, 8 (step 2)</li>\n                </ul>\n            ",
      "example": {
        "code": "for i in range(2, 11, 2):\n    print(i, end=\" \")\nprint()",
        "explanation": "Generates even numbers between 2 and 10."
      }
    }
  ],
  "explore": {
    "title": "Loop Iteration Visualizer",
    "description": "Watch the loop counter step through values."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Print 1 to 5",
      "description": "Use a for loop with range(1, 6) to print numbers 1 to 5.",
      "starterCode": "# Write a for loop to print 1 to 5\n",
      "hints": [
        "for i in range(1, 6):",
        "    print(i)"
      ],
      "solution": "for i in range(1, 6):\n    print(i)"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Sum of First 10 Numbers",
      "description": "Compute the sum of numbers from 1 to 10 (which is 55) using a for loop and print it.",
      "starterCode": "total = 0\n# Loop from 1 to 10, accumulate in total, print total\n",
      "hints": [
        "for i in range(1, 11): total += i",
        "print(total)"
      ],
      "solution": "total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Countdown Timer",
      "description": "Count down from 5 to 1 using range(5, 0, -1), then print 'Blastoff!'.",
      "starterCode": "# Countdown from 5 to 1, then print 'Blastoff!'\n",
      "hints": [
        "for i in range(5, 0, -1): print(i)",
        "print('Blastoff!')"
      ],
      "solution": "for i in range(5, 0, -1):\n    print(i)\nprint(\"Blastoff!\")"
    }
  ],
  "project": {
    "title": "\ud83d\udcca Cyber Threat Frequency Counter",
    "description": "Iterate through a list of alert severity levels and count how many 'HIGH' threats exist.",
    "features": [
      "Loop through simulated incident list",
      "Filter high-severity alerts",
      "Print incident summary"
    ],
    "starterCode": "alerts = [\"LOW\", \"MEDIUM\", \"HIGH\", \"LOW\", \"HIGH\", \"HIGH\"]\nhigh_count = 0\n\n# Loop through alerts and count HIGH\n",
    "fullSolution": "alerts = [\"LOW\", \"MEDIUM\", \"HIGH\", \"LOW\", \"HIGH\", \"HIGH\"]\nhigh_count = 0\nfor a in alerts:\n    if a == \"HIGH\":\n        high_count += 1\nprint(f\"High Severity Alerts: {high_count}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Factorial Calculator Loop",
    "description": "Compute 5! (5 * 4 * 3 * 2 * 1 = 120) using a for loop and print the result containing '120'.",
    "instructions": [
      "Start with result = 1",
      "Loop from 1 to 5 and multiply into result",
      "Print result containing '120'"
    ],
    "starterCode": "# Calculate factorial of 5\nresult = 1\n",
    "hints": [
      "for i in range(1, 6): result *= i",
      "print('5! =', result)"
    ],
    "testCases": [
      {
        "description": "Must compute 120",
        "mustContain": [
          "120"
        ],
        "score": 1
      }
    ],
    "xpReward": 200
  },
  "completion": {
    "message": "\ud83c\udf89 Loop Virtuoso!",
    "subMessage": "You can now automate repetitive tasks across any sequence in Python.",
    "skills": [
      "for loops",
      "range() customization",
      "Aggregation & accumulators"
    ],
    "nextTopic": {
      "title": "While Loops",
      "description": "Repeat tasks while conditions hold True.",
      "icon": "\u23f3"
    }
  },
  "editorStarterCode": "# For Loop Sandbox\nfor n in range(1, 11):\n    square = n ** 2\n    print(f\"{n}^2 = {square}\")\n"
},

  "while-loop": {
  "id": "while-loop",
  "title": "While Loops & Condition-Driven Iteration",
  "subtitle": "Repeat code as long as a condition holds true, safely avoiding infinite loops!",
  "icon": "\u23f3",
  "color": "#8e44ad",
  "colorSecondary": "#9b59b6",
  "xpReward": 200,
  "badge": "\u267e\ufe0f",
  "badgeName": "Loop Alchemist",
  "level": "Beginner",
  "duration": "40 minutes",
  "objectives": [
    "Structure while loops with clear exit conditions",
    "Update loop variables to prevent infinite loops",
    "Use while True with break for sentinel-controlled loops",
    "Implement retry mechanisms"
  ],
  "lessons": [
    {
      "id": "intro-while",
      "title": "The While Loop Concept",
      "icon": "\ud83d\udd04",
      "content": "\n                <p>A <code>while</code> loop continues executing as long as its boolean condition remains <strong>True</strong>.</p>\n                <p><strong>Crucial rule:</strong> You must always update the condition variable inside the loop body, or it runs forever!</p>\n            ",
      "example": {
        "code": "count = 3\nwhile count > 0:\n    print(f\"T-minus {count}...\")\n    count -= 1\nprint(\"Liftoff! \ud83d\ude80\")",
        "explanation": "count starts at 3, decrements each pass, and stops when count reaches 0."
      }
    },
    {
      "id": "while-break",
      "title": "while True and break",
      "icon": "\ud83d\uded1",
      "content": "\n                <p>A common pattern in games and servers is an infinite loop that terminates via <code>break</code> on a specific condition.</p>\n            ",
      "example": {
        "code": "attempts = 0\nwhile True:\n    attempts += 1\n    if attempts == 3:\n        print(\"Max attempts reached. Locking system.\")\n        break",
        "explanation": "Loops continuously until attempts == 3 triggers break."
      }
    }
  ],
  "explore": {
    "title": "While Loop Safety Monitor",
    "description": "Watch condition evaluation and counter increments."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Basic While Loop",
      "description": "Print numbers from 1 to 4 using a while loop.",
      "starterCode": "i = 1\n# Write while loop up to 4\n",
      "hints": [
        "while i <= 4:",
        "    print(i)",
        "    i += 1"
      ],
      "solution": "i = 1\nwhile i <= 4:\n    print(i)\n    i += 1"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Double Until 100",
      "description": "Start with num = 5. While num < 100, multiply it by 2. Print final num (160).",
      "starterCode": "num = 5\n# While num < 100, double it and print final\n",
      "hints": [
        "while num < 100: num *= 2",
        "print(num)"
      ],
      "solution": "num = 5\nwhile num < 100:\n    num *= 2\nprint(num)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Simulated Pin Validator",
      "description": "Given pin = 1234 and entered = 1000. Increase entered by 117 each loop until entered >= pin. Print final entered.",
      "starterCode": "pin = 1234\nentered = 1000\n# Loop while entered < pin\n",
      "hints": [
        "while entered < pin: entered += 117",
        "print(entered)"
      ],
      "solution": "pin = 1234\nentered = 1000\nwhile entered < pin:\n    entered += 117\nprint(entered)"
    }
  ],
  "project": {
    "title": "\ud83c\udfb2 Password Brute-Force Defense Simulator",
    "description": "Simulate failed login attempts with a cooldown timer that locks the account after 3 attempts.",
    "features": [
      "Track attempts in while loop",
      "Simulate cooldown lockout",
      "Print security warning"
    ],
    "starterCode": "# Account Security Lockout Simulator\nmax_tries = 3\ntries = 0\n\n# Loop and increment tries until max_tries\n",
    "fullSolution": "max_tries = 3\ntries = 0\nwhile tries < max_tries:\n    tries += 1\n    print(f\"Attempt {tries}: Invalid credentials.\")\nprint(\"ACCOUNT LOCKED: Too many failed attempts. \ud83d\udea8\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Power of Two Finder",
    "description": "Start with n = 1. In a while loop, double n until n exceeds 500. Print the final value (512).",
    "instructions": [
      "Start with n = 1",
      "While n <= 500, multiply by 2",
      "Print n (must contain '512')"
    ],
    "starterCode": "# Find first power of 2 greater than 500\nn = 1\n",
    "hints": [
      "while n <= 500: n *= 2",
      "print(n)"
    ],
    "testCases": [
      {
        "description": "Must output 512",
        "mustContain": [
          "512"
        ],
        "score": 1
      }
    ],
    "xpReward": 200
  },
  "completion": {
    "message": "\ud83c\udf89 While Loop Master!",
    "subMessage": "You can handle dynamic, condition-based iteration without infinite loops.",
    "skills": [
      "while loop construction",
      "Sentinel termination",
      "State mutation"
    ],
    "nextTopic": {
      "title": "Functions in Python",
      "description": "Package reusable blocks of code with parameters and return values.",
      "icon": "\ud83e\udde9"
    }
  },
  "editorStarterCode": "# While Loop Sandbox\nbalance = 1000\nyears = 0\nwhile balance < 2000:\n    balance *= 1.07  # 7% interest\n    years += 1\nprint(f\"Doubled in {years} years to ${balance:.2f}\")\n"
},

  "functions": {
  "id": "functions",
  "title": "Functions & Reusable Code",
  "subtitle": "Define functions with def, parameters, default arguments, and return values!",
  "icon": "\ud83e\udde9",
  "color": "#16a085",
  "colorSecondary": "#1abc9c",
  "xpReward": 225,
  "badge": "\ud83c\udfd7\ufe0f",
  "badgeName": "Architect of Code",
  "level": "Intermediate",
  "duration": "45 minutes",
  "objectives": [
    "Define functions using def and call them",
    "Pass arguments and set default parameter values",
    "Return values using the return statement",
    "Understand local vs global variable scope"
  ],
  "lessons": [
    {
      "id": "def-function",
      "title": "Defining Functions with def",
      "icon": "\ud83e\uddf1",
      "content": "\n                <p>Functions bundle code into reusable units that follow the DRY (Don't Repeat Yourself) principle.</p>\n                <p>Use <code>def function_name(parameters):</code> followed by an indented block.</p>\n            ",
      "example": {
        "code": "def greet(name):\n    return f\"Hello, {name}! \ud83d\udee1\ufe0f\"\n\nmsg = greet(\"CyberAgent\")\nprint(msg)",
        "explanation": "greet takes parameter 'name' and returns a customized string greeting."
      }
    },
    {
      "id": "defaults-and-returns",
      "title": "Default Arguments & Return Values",
      "icon": "\ud83c\udf81",
      "content": "\n                <p>You can specify default parameter values. The <code>return</code> keyword hands the result back to the caller.</p>\n            ",
      "example": {
        "code": "def calculate_tax(amount, rate=0.08):\n    return amount * rate\n\nprint(calculate_tax(100))\nprint(calculate_tax(100, 0.15))",
        "explanation": "If rate isn't supplied, Python defaults to 0.08 (8%)."
      }
    }
  ],
  "explore": {
    "title": "Function Scope & Call Stack",
    "description": "Trace inputs entering a function and return values exiting."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Square Function",
      "description": "Define a function 'square(n)' that returns n * n. Call square(6) and print the result (36).",
      "starterCode": "# Define square(n) and print square(6)\n",
      "hints": [
        "def square(n): return n * n",
        "print(square(6))"
      ],
      "solution": "def square(n):\n    return n * n\nprint(square(6))"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Max of Two",
      "description": "Write a function 'maximum(a, b)' that returns the larger number. Print maximum(42, 17).",
      "starterCode": "# Define maximum(a, b) and print maximum(42, 17)\n",
      "hints": [
        "def maximum(a, b): return a if a > b else b",
        "print(maximum(42, 17))"
      ],
      "solution": "def maximum(a, b):\n    return a if a > b else b\nprint(maximum(42, 17))"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Password Strength Metric",
      "description": "Define function 'is_secure(pwd)' that returns True if len(pwd) >= 8 and False otherwise. Print is_secure('SecurePass2026').",
      "starterCode": "# Define is_secure(pwd) and test with 'SecurePass2026'\n",
      "hints": [
        "def is_secure(pwd): return len(pwd) >= 8",
        "print(is_secure('SecurePass2026'))"
      ],
      "solution": "def is_secure(pwd):\n    return len(pwd) >= 8\nprint(is_secure(\"SecurePass2026\"))"
    }
  ],
  "project": {
    "title": "\ud83d\udee1\ufe0f Encryption & Hash Validator",
    "description": "Build reusable cryptographic helper functions to sanitize usernames and format secret authorization tokens.",
    "features": [
      "Create sanitize_user() function",
      "Create generate_token() function",
      "Verify token authorization"
    ],
    "starterCode": "# Security Token Generator\ndef create_token(user, role=\"Analyst\"):\n    # Return formatted token: 'TOKEN-{user.upper()}-{role}'\n    pass\n\n# Test token creation\n",
    "fullSolution": "def create_token(user, role=\"Analyst\"):\n    return f\"TOKEN-{user.upper()}-{role.upper()}\"\nprint(create_token(\"alex\", \"Admin\"))"
  },
  "challenge": {
    "title": "\ud83c\udfaf Multiplier Function Challenge",
    "description": "Define a function 'multiply(x, y)' that returns x * y. Print multiply(7, 8) (must output '56').",
    "instructions": [
      "Define multiply(x, y) returning x * y",
      "Call multiply(7, 8)",
      "Print output containing '56'"
    ],
    "starterCode": "# Define multiply and call it with 7, 8\n",
    "hints": [
      "def multiply(x, y): return x * y",
      "print(multiply(7, 8))"
    ],
    "testCases": [
      {
        "description": "Must output 56",
        "mustContain": [
          "56"
        ],
        "score": 1
      }
    ],
    "xpReward": 225
  },
  "completion": {
    "message": "\ud83c\udf89 Function Architect!",
    "subMessage": "You can organize code into reusable, modular functions.",
    "skills": [
      "Function definitions (def)",
      "Parameters & default values",
      "Return values & scope"
    ],
    "nextTopic": {
      "title": "Lambda Functions",
      "description": "Write concise, anonymous one-line functions with lambda.",
      "icon": "\u26a1"
    }
  },
  "editorStarterCode": "# Functions Sandbox\ndef compute_stats(numbers):\n    return {\"sum\": sum(numbers), \"count\": len(numbers), \"avg\": sum(numbers)/len(numbers)}\nprint(compute_stats([10, 20, 30, 40]))\n"
},

  "lambda": {
  "id": "lambda",
  "title": "Lambda & Anonymous Functions",
  "subtitle": "Harness one-line anonymous functions with map, filter, and sorted!",
  "icon": "\u26a1",
  "color": "#2980b9",
  "colorSecondary": "#3498db",
  "xpReward": 225,
  "badge": "\u26a1",
  "badgeName": "Lambda Ninja",
  "level": "Intermediate",
  "duration": "35 minutes",
  "objectives": [
    "Understand lambda syntax: lambda args: expression",
    "Use lambdas with map() and filter()",
    "Sort complex data using custom lambda keys",
    "Know when to use lambda vs standard def functions"
  ],
  "lessons": [
    {
      "id": "lambda-syntax",
      "title": "What is a Lambda Function?",
      "icon": "\u26a1",
      "content": "\n                <p>A <code>lambda</code> function is a small, anonymous function defined without a name using the <code>lambda</code> keyword.</p>\n                <p>Syntax: <code>lambda arguments: single_expression</code></p>\n                <p>The expression is evaluated and automatically returned.</p>\n            ",
      "example": {
        "code": "double = lambda x: x * 2\nadd = lambda a, b: a + b\nprint(double(7))  # 14\nprint(add(10, 25)) # 35",
        "explanation": "lambda creates quick, disposable one-liner functions on the fly."
      }
    },
    {
      "id": "lambda-with-builtins",
      "title": "Lambda with filter(), map(), and sorted()",
      "icon": "\ud83c\udfaf",
      "content": "\n                <p>Lambdas shine when passed directly into higher-order functions:</p>\n                <ul>\n                    <li><code>filter(lambda x: x > 0, nums)</code>: Keeps matching elements</li>\n                    <li><code>map(lambda x: x ** 2, nums)</code>: Transforms all elements</li>\n                    <li><code>sorted(items, key=lambda x: x['score'])</code>: Custom sort key</li>\n                </ul>\n            ",
      "example": {
        "code": "nums = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda n: n % 2 == 0, nums))\nprint(\"Evens:\", evens)",
        "explanation": "filter applies the lambda to every number and retains only True results."
      }
    }
  ],
  "explore": {
    "title": "Lambda Transformation Lab",
    "description": "Watch inline expressions transform lists instantaneously."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "Cube with Lambda",
      "description": "Create a lambda function 'cube = lambda x: x ** 3'. Print cube(3) (which is 27).",
      "starterCode": "# Define cube lambda and print cube(3)\n",
      "hints": [
        "cube = lambda x: x ** 3",
        "print(cube(3))"
      ],
      "solution": "cube = lambda x: x ** 3\nprint(cube(3))"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Filter Negative Numbers",
      "description": "Given nums = [-5, 10, -2, 8, 0, 15], filter out negatives using filter and a lambda. Print the list of non-negatives.",
      "starterCode": "nums = [-5, 10, -2, 8, 0, 15]\n# Filter >= 0 and print list\n",
      "hints": [
        "positives = list(filter(lambda x: x >= 0, nums))",
        "print(positives)"
      ],
      "solution": "nums = [-5, 10, -2, 8, 0, 15]\npositives = list(filter(lambda x: x >= 0, nums))\nprint(positives)"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Sort by Dictionary Value",
      "description": "Given agents = [{'name': 'Bob', 'score': 70}, {'name': 'Alice', 'score': 95}], sort by score using sorted() with a lambda key. Print sorted names.",
      "starterCode": "agents = [{'name': 'Bob', 'score': 70}, {'name': 'Alice', 'score': 95}]\n# Sort descending by score\n",
      "hints": [
        "sorted(agents, key=lambda a: a['score'], reverse=True)"
      ],
      "solution": "agents = [{'name': 'Bob', 'score': 70}, {'name': 'Alice', 'score': 95}]\nsorted_agents = sorted(agents, key=lambda a: a['score'], reverse=True)\nprint([a['name'] for a in sorted_agents])"
    }
  ],
  "project": {
    "title": "\u26a1 Cyber Log Threat Ranker",
    "description": "Filter critical cybersecurity logs and sort threat incidents by severity score using lambdas.",
    "features": [
      "Use filter() + lambda for critical events",
      "Use sorted() + lambda for threat severity",
      "Display ranked incident table"
    ],
    "starterCode": "logs = [\n    {\"ip\": \"1.1.1.1\", \"threat\": 35},\n    {\"ip\": \"2.2.2.2\", \"threat\": 92},\n    {\"ip\": \"3.3.3.3\", \"threat\": 78}\n]\n# Filter threat > 50 and sort descending\n",
    "fullSolution": "logs = [{\"ip\": \"1.1.1.1\", \"threat\": 35}, {\"ip\": \"2.2.2.2\", \"threat\": 92}, {\"ip\": \"3.3.3.3\", \"threat\": 78}]\ncritical = sorted(filter(lambda l: l[\"threat\"] > 50, logs), key=lambda l: l[\"threat\"], reverse=True)\nfor c in critical:\n    print(f\"{c['ip']} -> Threat Level {c['threat']}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Map Square Lambda Challenge",
    "description": "Use map() and a lambda to square the numbers [1, 2, 3, 4] and print the resulting list [1, 4, 9, 16].",
    "instructions": [
      "nums = [1, 2, 3, 4]",
      "Use map(lambda x: x ** 2, nums)",
      "Print the list (must contain '16')"
    ],
    "starterCode": "# Map square lambda\nnums = [1, 2, 3, 4]\n",
    "hints": [
      "print(list(map(lambda x: x ** 2, nums)))"
    ],
    "testCases": [
      {
        "description": "Must output 16",
        "mustContain": [
          "16"
        ],
        "score": 1
      }
    ],
    "xpReward": 225
  },
  "completion": {
    "message": "\ud83c\udf89 Lambda Ninja Master!",
    "subMessage": "You can write expressive one-line functional transformations with ease.",
    "skills": [
      "lambda syntax",
      "map() and filter() usage",
      "Sorting collections with custom keys"
    ],
    "nextTopic": {
      "title": "Data Structures in Python",
      "description": "Master Lists, Tuples, Sets, and Dictionaries.",
      "icon": "\ud83d\udcda"
    }
  },
  "editorStarterCode": "# Lambda Playground\nnames = [\"Charlie\", \"Alice\", \"Bob\", \"David\"]\nby_length = sorted(names, key=lambda s: len(s))\nprint(\"Sorted by length:\", by_length)\n"
},

  "data-structures": {
  "id": "data-structures",
  "title": "Data Structures: Lists, Tuples, Sets & Dicts",
  "subtitle": "Organize, store, and manipulate data with Python's core collections!",
  "icon": "\ud83d\udcda",
  "color": "#1abc9c",
  "colorSecondary": "#16a085",
  "xpReward": 250,
  "badge": "\ud83d\udc51",
  "badgeName": "Data Grandmaster",
  "level": "Intermediate",
  "duration": "50 minutes",
  "objectives": [
    "Differentiate Lists (mutable), Tuples (immutable), Sets (unique), and Dicts (key-value)",
    "Perform list indexing, slicing, appending, and popping",
    "Work with dictionaries using keys(), values(), and items()",
    "Utilize set operations (union, intersection)"
  ],
  "lessons": [
    {
      "id": "list-tuple",
      "title": "Lists vs Tuples",
      "icon": "\ud83d\udccb",
      "content": "\n                <ul>\n                    <li><strong>List</strong> <code>[1, 2, 3]</code>: Ordered, mutable (can add, remove, change items).</li>\n                    <li><strong>Tuple</strong> <code>(1, 2, 3)</code>: Ordered, immutable (cannot be changed after creation).</li>\n                </ul>\n            ",
      "example": {
        "code": "users = [\"Alice\", \"Bob\"]\nusers.append(\"Charlie\")\nprint(\"List:\", users)\n\ncoords = (10.5, 45.2)\nprint(\"Tuple:\", coords)",
        "explanation": "Lists allow changes (.append, .remove); tuples protect fixed data from modification."
      }
    },
    {
      "id": "dict-set",
      "title": "Dictionaries & Sets",
      "icon": "\ud83d\udcd6",
      "content": "\n                <ul>\n                    <li><strong>Dict</strong> <code>{\"key\": \"val\"}</code>: Key-value mapping with O(1) lightning-fast lookups.</li>\n                    <li><strong>Set</strong> <code>{1, 2, 3}</code>: Unordered collection of unique items. Automatically removes duplicates!</li>\n                </ul>\n            ",
      "example": {
        "code": "user = {\"username\": \"neo\", \"clearance\": 5}\nprint(user[\"username\"])\n\nunique_ips = set([\"1.1.1.1\", \"2.2.2.2\", \"1.1.1.1\"])\nprint(\"Unique IPs:\", unique_ips)",
        "explanation": "Dictionaries associate keys with values; sets eliminate duplicates automatically."
      }
    }
  ],
  "explore": {
    "title": "Data Structures Visualizer",
    "description": "Inspect lists, dictionaries, sets, and tuples in real time."
  },
  "exercises": [
    {
      "id": "ex-easy",
      "difficulty": "Easy",
      "difficultyColor": "#48cfad",
      "title": "List Append & Print",
      "description": "Create items = ['shield', 'sword'], append 'potion', and print the length of items (3).",
      "starterCode": "items = ['shield', 'sword']\n# Append 'potion' and print len(items)\n",
      "hints": [
        "items.append('potion')",
        "print(len(items))"
      ],
      "solution": "items = ['shield', 'sword']\nitems.append('potion')\nprint(len(items))"
    },
    {
      "id": "ex-medium",
      "difficulty": "Medium",
      "difficultyColor": "#f7b731",
      "title": "Dictionary Lookup",
      "description": "Given user = {'id': 101, 'role': 'Admin'}, print 'Role: Admin'.",
      "starterCode": "user = {'id': 101, 'role': 'Admin'}\n# Print 'Role: ' followed by user['role']\n",
      "hints": [
        "print('Role:', user['role'])"
      ],
      "solution": "user = {'id': 101, 'role': 'Admin'}\nprint(\"Role:\", user[\"role\"])"
    },
    {
      "id": "ex-hard",
      "difficulty": "Hard",
      "difficultyColor": "#fc5c65",
      "title": "Set De-duplication",
      "description": "Given raw_ids = [10, 20, 10, 30, 20, 40], convert to a set to remove duplicates, and print the number of unique elements (4).",
      "starterCode": "raw_ids = [10, 20, 10, 30, 20, 40]\n# Deduplicate using set and print length\n",
      "hints": [
        "print(len(set(raw_ids)))"
      ],
      "solution": "raw_ids = [10, 20, 10, 30, 20, 40]\nprint(len(set(raw_ids)))"
    }
  ],
  "project": {
    "title": "\ud83d\udee1\ufe0f Incident Response Registry",
    "description": "Build an incident ticket manager using lists of dictionaries with add, resolve, and filter features.",
    "features": [
      "Store security incident records in dictionaries",
      "Filter active vs resolved incidents",
      "Compute severity distributions"
    ],
    "starterCode": "# Incident Registry\nincidents = [\n    {\"id\": 101, \"title\": \"Phishing attempt\", \"status\": \"OPEN\"},\n    {\"id\": 102, \"title\": \"Malware detected\", \"status\": \"RESOLVED\"}\n]\n# Print titles of all OPEN incidents\n",
    "fullSolution": "incidents = [{\"id\": 101, \"title\": \"Phishing attempt\", \"status\": \"OPEN\"}, {\"id\": 102, \"title\": \"Malware detected\", \"status\": \"RESOLVED\"}]\nfor inc in incidents:\n    if inc[\"status\"] == \"OPEN\":\n        print(f\"Active Alert: {inc['title']}\")"
  },
  "challenge": {
    "title": "\ud83c\udfaf Inventory Aggregator Challenge",
    "description": "Given inventory = {'gold': 150, 'silver': 350}, print the total coins (500) using sum(inventory.values()).",
    "instructions": [
      "inventory = {'gold': 150, 'silver': 350}",
      "Calculate sum of values",
      "Print total (must contain '500')"
    ],
    "starterCode": "inventory = {'gold': 150, 'silver': 350}\n# Calculate and print total coins\n",
    "hints": [
      "print(sum(inventory.values()))"
    ],
    "testCases": [
      {
        "description": "Must output 500",
        "mustContain": [
          "500"
        ],
        "score": 1
      }
    ],
    "xpReward": 250
  },
  "completion": {
    "message": "\ud83c\udf89 Data Grandmaster!",
    "subMessage": "You have conquered all fundamental Python data structures.",
    "skills": [
      "Lists & indexing",
      "Tuples & immutability",
      "Dictionaries & lookups",
      "Sets & uniqueness"
    ],
    "nextTopic": {
      "title": "Python Basics (Review)",
      "description": "Revisit fundamentals or build projects in the free editor!",
      "icon": "\ud83d\udc0d"
    }
  },
  "editorStarterCode": "# Data Structures Playground\nprofile = {\n    \"agent\": \"Viper\",\n    \"skills\": [\"Network Forensics\", \"Reverse Engineering\"],\n    \"stats\": {\"cases_solved\": 42, \"rating\": 4.9}\n}\nprint(f\"{profile['agent']} solved {profile['stats']['cases_solved']} cases!\")\n"
},

};

// Export for Node/module tests if applicable
if (typeof module !== "undefined") module.exports = { LESSONS };
