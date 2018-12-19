# Tailwind CSS Skip Link plugin

## Overview

```sh
# Using npm
npm install --save-dev tailwindcss-skip-link

# Using yarn
yarn add --dev tailwindcss-skip-link
```

## Usage

You can add the plugin to your Tailwind config as follows:

```js
plugins: [
  // ...
  require('tailwindcss-skip-link')(),
],
```

Within your HTML, add the skip link straight after the `body` tag along with any other additional classes:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

Then add the matching ID to skip to on your main content element.

```html
<div id="main-content">
    <h1>Lorem ipsum</h1>
</div>
```

## Example

To see an example of this plugin in use, see the [oliverdavies.uk repository](https://github.com/opdavies/oliverdavies.uk).

## Author

[Oliver Davies](https://www.oliverdavies.uk) - Full Stack Developer
