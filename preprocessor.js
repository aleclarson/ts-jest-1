console.warn(
  `[ts-jest][DEPRECATED] - replace any occurrences of "ts-jest/dist/preprocessor.js" or ` +
    ` "<rootDir>/node_modules/ts-jest/preprocessor.js"` +
    ` in the 'transform' section of your Jest config with just "ts-jest".`
);

module.exports = require('./dist');
