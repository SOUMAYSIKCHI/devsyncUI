# DevSyncUI

A modern, lightweight component library built with Tailwind CSS. DevSyncUI provides a set of reusable, accessible, and customizable UI components that can be easily integrated into any project.

## Features

- 🎨 **Modern Design**: Clean, contemporary components with smooth animations
- 🚀 **Lightweight**: Built on Tailwind CSS for optimal performance
- 🎯 **Accessible**: WCAG compliant components with proper ARIA attributes
- 🔧 **Customizable**: Easy to customize with Tailwind's utility classes
- 📱 **Responsive**: Mobile-first design approach
- 🎭 **Flexible**: Use as CSS classes or integrate as a Tailwind plugin

## Installation

### Option 1: CSS Import (Recommended)

1. Install the package:
```bash
npm install devsync-ui
```

2. Import the CSS in your project:
```css
@import 'devsync-ui/dist/devsync-ui.css';
```

### Option 2: Tailwind Plugin

1. Install the package:
```bash
npm install devsyncui
```

2. Add to your `tailwind.config.js`:
```javascript
module.exports = {
  plugins: [
    require('devsync-ui/src/plugin.js'),
  ],
}
```

## Components

### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Primary Button</button>

<!-- Secondary button -->
<button class="btn btn-secondary">Secondary Button</button>

<!-- Success button -->
<button class="btn btn-success">Success Button</button>

<!-- Danger button -->
<button class="btn btn-danger">Danger Button</button>

<!-- Outline button -->
<button class="btn btn-outline">Outline Button</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<!-- Basic card -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    <p>Card content goes here...</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Interactive card -->
<div class="card card-interactive">
  <div class="card-body">
    <p>Clickable card content</p>
  </div>
</div>

<!-- Compact card -->
<div class="card card-compact">
  <div class="card-body">
    <p>Compact card content</p>
  </div>
</div>
```

### Modals

```html
<!-- Modal overlay -->
<div class="modal-overlay">
  <div class="modal-container">
    <div class="modal-header">
      <h3 class="modal-title">Modal Title</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>

<!-- Modal sizes -->
<div class="modal-container modal-sm">Small Modal</div>
<div class="modal-container modal-lg">Large Modal</div>
<div class="modal-container modal-xl">Extra Large Modal</div>
<div class="modal-container modal-full">Full Screen Modal</div>
```

## Customization

### Colors

You can customize the color scheme by extending the Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Spacing

Adjust component spacing by modifying the padding and margin values in the component CSS files.

## Development

### Setup

1. Clone the repository:
```bash
git clone https://github.com/devsync/devsync-ui.git
cd devsync-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run dev
```

### Build

Build the production CSS:
```bash
npm run build
```

### Linting

Check for CSS issues:
```bash
npm run lint
```

Fix CSS issues automatically:
```bash
npm run lint:fix
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@devsync.com
- 🐛 Issues: [GitHub Issues](https://github.com/devsync/devsync-ui/issues)
- 📖 Documentation: [GitHub Wiki](https://github.com/devsync/devsync-ui/wiki) 