// CJS mock for src/dirname.ts
// In tests (ts-jest CJS mode), import.meta.url is not available.
// This mock provides __dirname as the fallback.
const path = require('path');

module.exports = {
  currentDirname: path.resolve(__dirname, '..', 'src')
};
