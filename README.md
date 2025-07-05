# 🚀 DevSyncUI — Tailwind Component Library

Welcome to **DevSyncUI**, a lightweight and modern UI library built with **Tailwind CSS**. All components are prefixed with `.devsync-` to avoid conflicts and are ready to drop into any project. This library is perfect for developers who want consistent, customizable, and clean UI without writing everything from scratch.

---

## 📌 Why DevSyncUI?

- ✅ **Fully Tailwind-based** — no JS, no bloat
- 🧱 **Modular components** — buttons, cards, modals, and more
- 🛡️ **Scoped utility classes** — uses `.devsync-*` to prevent naming collisions
- 🎯 **Designed for production** — responsive, accessible, and extensible

---

## 🛠️ Getting Started

This guide helps you **install Tailwind**, **add DevSyncUI**, and **use components** in your project — even if you're a beginner.

---
## 🔗 CDN Usage

Include DevSyncUI directly in your HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devsyncui/src/index.css" />
```

### Step 1: Create a Vite Project (Optional)

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

⚠️ **Note:** If `tailwind.config.js` or `postcss.config.js` aren't created automatically, create them manually:

**postcss.config.js** (Recommended Production Version)
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
```

### Step 3: Install DevSyncUI

```bash
npm install devsyncui
```

### Step 4: Import Styles in your main CSS (e.g., `src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import DevSyncUI styles */
@import 'devsyncui/style';
```

### Step 5: Register Plugin in `tailwind.config.js`

```js
import devsyncPlugin from 'devsyncui/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/devsyncui/**/*.{js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [devsyncPlugin],
}
```

✅ This registers the DevSyncUI plugin with Tailwind CSS.

---

## 📚 Component Classes

View the full list of utility classes, variants, and themes on the [official documentation site](https://devsyncui.dev).

---

## 🧑‍💻 Developer Notes

### Update Component Styles

All styles live in `src/components/*.css`. You can edit, extend, or organize them as needed.

### To Publish New Changes

```bash
npm version patch      # Or use: minor, major
git add .
git commit -m "Update styles"
git push origin main --follow-tags
npm publish
```

---

## 🔐 License & Usage Terms

See full [terms.md](./terms.md)

---

## 📬 Feedback & Contributions

Feel free to open GitHub Issues for bugs or suggestions. Contributions will be open soon.

---

## 🌐 Links

- 📦 **NPM Package**: [devsyncui](https://www.npmjs.com/package/devsyncui)
- 🧠 **Author**: Soumay Sikchi
- 🎨 **Demo Website**: Coming soon
- 🧾 **Documentation**: [devsyncui.dev](https://devsyncui.dev)

---

## 📄 License & Usage Terms

```markdown
# License & Usage Terms

MIT License © 2025 Soumay Sikchi

---

## ✅ You May:

- Use DevSyncUI in personal and commercial projects
- Modify and extend the library in your own apps
- Share components in open-source projects with attribution

## ❌ You May Not:

- Re-upload the DevSyncUI library as a new npm package
- Rename the library and redistribute without consent
- Claim full authorship of this codebase without contributing

---

For collaboration, licensing deals, or enterprise distribution rights, please reach out via the official contact channels.