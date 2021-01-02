# AWS UI Theme

[![version](https://img.shields.io/npm/v/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)
[![downloads](https://img.shields.io/npm/dt/awsui-theme.svg)](https://www.npmjs.com/package/awsui-theme)

The `AwsuiTheme` component allows you to easily apply your brand's theme to your
[AWS UI components](https://www.npmjs.com/package/@awsui/components-react).

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
theme. To see a full list of supported design tokens, see
[the Theme interface](https://github.com/CharlesStover/awsui-theme/blob/master/src/types/theme.ts).

The Theme interface is more or less equivalent to the design tokens you would
find in the
[@awsui/design-tokens](https://www.npmjs.com/package/@awsui/design-tokens)
package.

An example `AwsuiTheme` implementation that changes the primary action color
from blue to red may look like this:

```javascript
import AwsuiTheme from 'awsui-theme';

export default function App() {
  return (
    <AwsuiTheme textAccent="red">
      <Home />
    </AwsuiTheme>
  );
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover) via GitHub's
Sponsors Program.
