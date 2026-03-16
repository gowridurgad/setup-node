const {FlatCompat} = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  {
    ignores: ['**/*', '!src/**', '!__tests__/**', '__tests__/data/**']
  },
  ...compat.config(require('./.eslintrc.js'))
];
