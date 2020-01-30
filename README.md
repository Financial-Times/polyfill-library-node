# polyfill-library-node

[![npm](https://img.shields.io/npm/v/polyfill-library-node.svg)](https://www.npmjs.com/package/polyfill-library-node)

An alternative to core-js for nodeJS environments.

Loads all ECMAScript-262 (excluding annex-B) polyfills into nodeJS.

You should use this if you are wanting to use the latest stable features of JavaScript but the version of nodeJS you are using does not have those features.

## Install

```
$ npm install polyfill-library-node
```

## Usage

```js
require("polyfill-library-node");

// Now nodeJS has all stable JavaScript features such as Array.prototype.flatMap, Promise.allSettled etc
```


## FAQ

### How come it does not support proposal "X" ?

`polyfill-library` follows the [guidance from the W3C TAG on polyfilling](https://www.w3.org/2001/tag/doc/polyfills/) and only implements polyfills features/proposals of ECMAScript that have reached [stage 4](https://github.com/tc39/proposals/blob/master/finished-proposals.md#finished-proposals) whereas core-js implements polyfills for proposals at all stages.

### How come it does not make async-await functions, for-of loops etc work in old versions of nodeJS ?

Those features are new pieces of syntax and not a [standard built-in object](https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects), and JavaScript does not have a way to make the runtime (in this case nodeJS) understand new pieces of syntax. It is only possible to polyfill [standard built-in objects](https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects). If you are wanting to use new syntax in a version of nodeJS which does not support it, you will need to use a compiler such as [Babel](https://babeljs.io/) and [Babel's nodeJS CLI](https://babeljs.io/docs/en/babel-node).