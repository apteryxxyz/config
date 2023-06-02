require('./helpers').ensureDependencies([
    'eslint-plugin-unicorn'
]);

module.exports = {
    env: {
        browser: true,
    },
    plugins: ['unicorn'],
    rules: {
        'unicorn/prefer-dom-node-append': 2,
        'unicorn/prefer-dom-node-dataset': 2,
        'unicorn/prefer-dom-node-remove': 2,
        'unicorn/prefer-dom-node-text-content': 2,
        'unicorn/prefer-keyboard-event-key': 2,
        'unicorn/prefer-modern-dom-apis': 2,
    }
};
