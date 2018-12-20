module.exports = function () {
  return function ({ addComponents }) {
    addComponents([
      {
        '.skip-link': {
          clip: 'rect(1px,1px,1px,1px)',
          display: 'block',
          height: '1px',
          overflow: 'hidden',
          position: 'absolute',
          width: '1px',
          zIndex: 999,
          '&:focus': {
            clip: 'auto',
            height: 'auto',
            overflow: 'visible',
            width: 'auto',
          },
        },
      },
    ])
  }
}
