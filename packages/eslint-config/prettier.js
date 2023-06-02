require('./helpers').ensureDependencies([
    'eslint-config-prettier',
    'eslint-plugin-prettier'
]);

module.exports = {
    rules: {
        ...require('eslint-config-prettier').rules,

        'arrow-body-style': 'off',
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
    },
};
