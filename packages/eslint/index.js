const deepMerge = require('deepmerge');
const baseConfig = require('@sapphire/eslint-config');

const customConfig = {
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-throw-literal': 'off'
    }
};

module.exports = deepMerge(baseConfig, customConfig);