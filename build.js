"use strict";

require("hard-rejection/register");

const path = require("path");
const fs = require("fs").promises;
const polyfillLibrary = require("polyfill-library");

async function buildNodePolyfillFile() {
  const bundleString =
    "var self = global;" +
    (await polyfillLibrary.getPolyfillString({
      uaString: "nodeJS lol",
      minify: true,
      features: {
        ecma262: { flags: ["gated", "always"] },
        es6: { flags: ["gated", "always"] },
        es2015: { flags: ["gated", "always"] },
        es5: { flags: ["gated", "always"] },
        es7: { flags: ["gated", "always"] },
        es2016: { flags: ["gated", "always"] },
        es2017: { flags: ["gated", "always"] },
        es2018: { flags: ["gated", "always"] }
      },
      stream: false
    }));

  await fs.writeFile(path.join(__dirname, "index.js"), bundleString, "utf-8");
}

buildNodePolyfillFile();
