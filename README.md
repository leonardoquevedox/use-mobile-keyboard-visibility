# use-mobile-keyboard-visibility

React hook for subscribing to window size!

![build](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg) ![platform](https://img.shields.io/node/v/react.svg) ![stars](https://img.shields.io/amo/stars/dustman.svg) ![license](https://img.shields.io/bower/l/bootstrap.svg)

> [![basic-merchandising](https://imgur.com/LNOYczf.png)](https://github.com/leopq)

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
