const cssMatcher = require('jest-matcher-css')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

const generatePluginCss = () => {
  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [plugin()]
    })
  )
  .process('@tailwind components;', {
    from: undefined
  })
  .then(result => {
    return result.css
  })
}

expect.extend({
  toMatchCss: cssMatcher
})

test('it generates classes', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
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
    `)
  })
})
