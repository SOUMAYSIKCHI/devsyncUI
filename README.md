# 🚀 DevSyncUI — Tailwind Component Library

Welcome to **DevSyncUI**, a lightweight and modern UI library built with **Tailwind CSS**. All components are prefixed with `.devsync-` to avoid conflicts and are ready to drop into any project. This library is perfect for developers who want consistent, customizable, and clean UI without writing everything from scratch.

---

## 📌 Why DevSyncUI?

- ✅ Fully Tailwind-based — no JS, no bloat.
- 🧱 Modular components — buttons, cards, modals, and more.
- 🛡️ Scoped utility classes — uses `.devsync-*` to prevent naming collisions.
- 🎯 Designed for production — responsive, accessible, and extensible.

---

## 🛠️ Getting Started

This guide helps you **install Tailwind**, **add DevSyncUI**, and **use components** in your project — even if you're a beginner.

---

### Step 1: Create a Vite Project (Optional if you have one)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

### Step 2: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js`.

Now update your Tailwind config:

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/devsyncui/**/*.{js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 3: Install DevSyncUI

```bash
npm install devsyncui
```

### Step 4: Import the Styles

In your main CSS file (usually `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import DevSyncUI components */
@import 'devsyncui/style';
```

✅ This pulls all the component styles into your project.

### Step 5: Register Plugin in tailwind.config.js

```js
import devsyncPlugin from 'devsyncui/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/devsyncui/**/*.{js,ts,jsx,tsx,css}"
  ],
  plugins: [devsyncPlugin]
}
```

✅ This registers the DevSyncUI plugin with Tailwind CSS.

---

## 💡 Usage Examples

### 🔘 Button

```html
<button class="devsync-btn devsync-btn-primary">
  Click Me
</button>
```

### 📦 Card

```html
<div class="devsync-card devsync-card-hover">
  <div class="devsync-card-header">
    <h2 class="devsync-card-title">Welcome</h2>
  </div>
  <div class="devsync-card-body">
    This is a card component from DevSyncUI.
  </div>
</div>
```

### 🪟 Modal (Custom Usage with Tailwind Logic)

```html
<div class="devsync-modal-overlay">
  <div class="devsync-modal-container">
    <div class="devsync-modal-header">
      <h3 class="devsync-modal-title">Modal Title</h3>
      <button class="devsync-modal-close">×</button>
    </div>
    <div class="devsync-modal-body">Some content...</div>
    <div class="devsync-modal-footer">
      <button class="devsync-btn devsync-btn-secondary">Close</button>
    </div>
  </div>
</div>
```

---

## 📁 Available Components

| Component | Classes |
|-----------|---------|
| Button | `.devsync-btn`, `.devsync-btn-primary`, `.devsync-btn-outline`, etc. |
| Card | `.devsync-card`, `.devsync-card-header`, `.devsync-card-body`, etc. |
| Modal | `.devsync-modal-container`, `.devsync-modal-header`, `.devsync-modal-footer` |

---

## 🧑‍💻 For Developers

### Update Component Styles

All styles live in `src/components/*.css`. You can edit, add new ones, or split into more files.

### To Publish Your Own Updates:

```bash
npm version patch      # Or minor, major
git add .
git commit -m "Update button style"
git push origin main --follow-tags
npm publish
```

---

## 🔐 License & Usage Terms

```
MIT © 2025 Soumay Sikchi
```

### ✅ You Can:
- Use in any personal or commercial project
- Import via npm and apply classes in production

### ❌ You Cannot:
- Copy the entire repo and reupload as your own npm package
- Rename the package and redistribute without permission

---

## 📬 Feedback & Contributions

Feel free to open GitHub Issues for bugs or suggestions. Contributions welcome soon.

---

## 🌐 Links

- 📦 [NPM Package](#)
- 🧠 **Author**: Soumay
- 🎨 **Demo Website** (coming soon)
