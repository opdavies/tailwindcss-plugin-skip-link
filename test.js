const cssMatcher = require('jest-matcher-css')
const plugin = require('./index.js')
const { generateComponents } = require('tailwindcss-plugin-test-helpers')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates classes', () => {
  const output = `
    .skip-link {
      clip: rect(1px, 1px, 1px, 1px);
      display: block;
      height: 1px;
      overflow: hidden;
      position: absolute;
      width: 1px;
      z-index: 999;
    }

    .skip-link:focus {
      clip: auto;
      height: auto;
      overflow: visible;
      width: auto;
    }
  `

  generateComponents(plugin).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})
