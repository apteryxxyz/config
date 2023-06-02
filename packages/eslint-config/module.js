require('./helpers').ensureDependencies([
    'eslint-plugin-unicorn'
]);

module.exports = {
    plugins: ['unicorn'],
    rules: {
        'unicorn/prefer-module': 2,
    },
};