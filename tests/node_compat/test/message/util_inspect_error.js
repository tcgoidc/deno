// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

require('../common');
const util = require('util');

const err = new Error('foo\nbar');

console.log(util.inspect({ err, nested: { err } }, { compact: true }));
console.log(util.inspect({ err, nested: { err } }, { compact: false }));

err.foo = 'bar';
console.log(util.inspect(err, { compact: true, breakLength: 5 }));
