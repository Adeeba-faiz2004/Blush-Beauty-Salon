const config = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf6f8',
          100: '#fce8ef',
          200: '#f9d0de',
          300: '#f4a8c2',
          400: '#ec759c',
          500: '#e0487a',
          600: '#cc2d5f',
          700: '#ab204c',
          800: '#8f1d42',
          900: '#781c3b'
        },
        gold: {
          300: '#f0d9a8',
          400: '#e8c87a',
          500: '#d4af37',
          600: '#b8962e'
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif']
      }
    }
  }
};

// Export the same configuration for a local Tailwind build and for the CDN, if needed.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = config;
}
