require('./helpers').ensureDependencies([
    'eslint-plugin-n',
    'eslint-plugin-unicorn',
]);

module.exports = {
    env: { node: true },
    plugins: ['n', 'unicorn'],
    rules: {
        'no-redeclare': 'off',
        'no-restricted-globals': [
            'error',
            {
                name: 'Buffer',
                message: 'Import Buffer from `node:buffer` instead',
            },
        ],

        'n/no-deprecated-api': 'error',
        'n/callback-return': 'error',
        'n/no-callback-literal': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-unpublished-bin': 'error',
        'n/no-unsupported-features/es-builtins': 'warn',
        'n/no-unsupported-features/es-syntax': 'warn',
        'n/no-unsupported-features/node-builtins': 'warn',
        'n/process-exit-as-throw': 'error',
        'n/shebang': ['error', {
            convertPath: {
                'src/**/*.js': ['^src/(.+?)\\.js$', 'dist/$1.js'],
            },
        }],
        'n/exports-style': ['error', 'module.exports'],
        'n/prefer-global/buffer': 'error',

        'unicorn/prefer-node-protocol': 'error',
    },
};
