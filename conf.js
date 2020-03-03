// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
exports.config = {
  framework: "mocha",
  allScriptsTimeout: 80000,
  getPageTimeout: 40000,
  capabilities: {
    browserName: "chrome"
  },
  mochaOpts: {
    enableTimeouts: false
  },
  specs: ["spec.js"],
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
