const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.devsync-btn': {
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      backgroundColor: '#2563eb',
      color: '#fff',
    },
  });
});