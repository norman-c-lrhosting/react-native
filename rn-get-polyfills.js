/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

module.exports = () => [
  require.resolve('./build/polyfills/console.js'),
  require.resolve('./build/polyfills/error-guard.js'),
  require.resolve('./build/polyfills/Object.es7.js'),
];
