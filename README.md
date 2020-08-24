# `use-mobile-keyboard-visibility`

> React hook for subscribing to window size

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add use-mobile-keyboard-visibility
```

## Usage

```js
import useMobileKeyboardVisibililty from 'use-mobile-keyboard-visibility'

function MyComponent() {
  const minimumKeyboardHeight = 100
  let isKeyboardVisible = useMobileKeyboardVisibililty(minimumKeyboardHeight)
  console.log(isKeyboardVisible)

  // ...
}
```
