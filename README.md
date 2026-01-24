README.md
📦 Manager Pro
A lightweight, mobile-first Progressive Web App (PWA) designed for high-speed inventory management and point-of-sale tracking. Built with vanilla JavaScript, CSS3, and HTML5, it utilizes GitHub as a serverless database.

🚀 Key Features
🛒 Smart Checkout (POS)
Sticky Search: Quickly find products even with a large inventory.

Multi-buy Popup: Prompts for quantity upon adding to cart.

Quick Cash Buttons: Dedicated presets for ₱20, ₱50, ₱100, ₱500, and ₱1k.

Live Change Calculation: Instant "Short" or "Change" computation to prevent manual errors.

📦 Inventory Management
Dynamic Pricing: Built-in Recommended Price calculator based on cost, quantity, and a customizable markup percentage.

Visual Stock Alerts: * 🟡 Yellow: Low stock (≤ 3 units).

🔴 Red: Sold Out (0 units) with a stamped badge.

Batch Controls: Buttons for instant Restock, Edit, Copy, and Delete.

📊 Business Intelligence
Real-time Dashboard: Track Capital, Inventory Value, Gross Sales, and Net Profit at a glance.

Automated Sync: Saves data to your GitHub repository every 5 minutes (Smart Sync) or via manual cloud trigger.

Offline Ready: Works as a standalone app on Android/iOS via Service Workers.

🛠 Setup & Installation
Fork/Clone this repository to your GitHub account.

Generate a Fine-grained Personal Access Token on GitHub with contents:write permissions.

Host on GitHub Pages:

Go to Settings > Pages.

Set the branch to main and folder to /root.

Connect the App:

Open your hosted URL.

Enter your GitHub Token and repo path (e.g., yourusername/your-repo-name).

The app will automatically initialize data.json.

📝 Data Structure
The app manages data in a single data.json file for portability:

Inventory: name, cost, qty, qtyInitial, sell.

Sales History: revenue, profit, date.

🛡 Safety & Security
Refresh Protection: Prevents accidental data loss by warning the user if there are unsaved changes.

Validation: Prevents saving products if the GitHub configuration is missing.

Local Storage: Encrypts (Base64) your session data for persistence between app opens.

🛠 Tech Stack
Frontend: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+).

Database: GitHub API (JSON storage).

PWA: Web Manifest & Service Workers.
