# use-mobile-keyboard-visibility

![build](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg) ![platform](https://img.shields.io/node/v/react.svg) ![stars](https://img.shields.io/amo/stars/dustman.svg) ![license](https://img.shields.io/bower/l/bootstrap.svg)

> [![basic-merchandising](https://imgur.com/LNOYczf.png)](https://github.com/leopq)

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

## Contributors

> Special thanks to [Fernanda Almeida](https://github.com/fealmeida), whom thoroughly tested this package 💖.
