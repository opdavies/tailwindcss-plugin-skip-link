module.exports = function () {
  return function ({ addComponents }) {
    addComponents([
      {
        '.skip-link': {
          display: 'block',
          position: 'absolute',
          left: '-999rem',
          zIndex: 999,
          '&:focus': {
            left: 'auto',
          },
        },
      },
    ])
  }
}
