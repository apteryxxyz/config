require('./helpers').ensureDependencies([
    'eslint-plugin-unicorn'
]);

module.exports = {
    env: {
        browser: true,
    },
    plugins: ['unicorn'],
    rules: {
        'unicorn/prefer-dom-node-append': 'error',
        'unicorn/prefer-dom-node-dataset': 'error',
        'unicorn/prefer-dom-node-remove': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
    }
};
