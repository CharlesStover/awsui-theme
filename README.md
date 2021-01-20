# AWS UI Theme

[![version](https://img.shields.io/npm/v/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)
[![downloads](https://img.shields.io/npm/dt/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)

The `AwsuiTheme` component allows you to easily apply your brand's theme to your
[AWS UI components](https://www.npmjs.com/package/@awsui/components-react).

_Looking for **dark mode**?_ Check out
[`awsui-dark-mode`](https://www.npmjs.com/package/awsui-dark-mode).

- [Install](#install)
- [Use](#use)
- [API](#api)

## Install

- `npm install awsui-theme` or
- `yarn add awsui-theme`

## Use

To use a custom AWS UI theme, wrap the `AwsuiTheme` component around your
application. While `AwsuiTheme` does not currently use React contexts, this
wrapper would most likely be placed alongside your React context providers, such
as React Router or Redux.

```javascript
import AwsuiTheme from 'awsui-theme';

export default function App() {
  return (
    <AwsuiTheme>
      <Home />
    </AwsuiTheme>
  );
}
```

## API

The `AwsuiTheme` takes any number of props specifying design tokens for your
theme. These props are more or less equivalent to the design tokens you would
find in the
[@awsui/design-tokens](https://www.npmjs.com/package/@awsui/design-tokens)
package.

With TypeScript support, the known design tokens should auto-complete in your
development environment. There may be more, unknown design tokens that do not
auto-complete. You may specify _any_ value as a prop, and the `AwsuiTheme`
component will attempt to find that design token in the document.

For example, if the CSS variable you want to manipulate is called
`--color-test-xyz`, but `colorTest` does not auto-complete as a prop, you may
still specify it anyway: `colorTest="red"`. The component will scan the document
for CSS variables named `--color-test-xyz` and change those values for all
child nodes.

An example `AwsuiTheme` implementation that changes the primary action color
from blue to red may look like this:

```javascript
import AwsuiTheme from 'awsui-theme';

export default function App() {
  return (
    <AwsuiTheme colorTextAccent="red">
      <Home />
    </AwsuiTheme>
  );
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover) via GitHub's
Sponsors Program.
