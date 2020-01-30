/* eslint-env mocha */

"use strict";

const assert = require("assert");

describe("polyfill-library-node", function() {
  it("is valid JavaScript code that throws no errors when executed", async function() {
    assert.doesNotThrow(function() {
      require("./index.js");
    });
  });
});
