require('./helpers').ensureDependencies([
    'eslint-config-prettier',
    'eslint-plugin-prettier'
]);

module.exports = {
    rules: {
        ...require('eslint-config-prettier').rules,

        'arrow-body-style': 0,
        'line-comment-position': 0,
        'no-inline-comments': 0,
    },
};
