require('./helpers').ensureDependencies([
    'eslint-plugin-n',
    'eslint-plugin-unicorn',
]);

module.exports = {
    env: { node: true },
    plugins: ['n', 'unicorn'],
    rules: {
        'no-redeclare': 0,
        'no-restricted-globals': [
            2,
            {
                name: 'Buffer',
                message: 'Import Buffer from `node:buffer` instead',
            },
        ],

        'n/no-deprecated-api': 2,
        'n/callback-return': 2,
        'n/no-callback-literal': 2,
        'n/no-exports-assign': 2,
        'n/no-new-require': 2,
        'n/no-path-concat': 2,
        'n/no-unpublished-bin': 2,
        'n/no-unsupported-features/es-builtins': 1,
        'n/no-unsupported-features/es-syntax': 1,
        'n/no-unsupported-features/node-builtins': 1,
        'n/process-exit-as-throw': 2,
        'n/shebang': [2, {
            convertPath: {
                'src/**/*.js': ['^src/(.+?)\\.js$', 'dist/$1.js'],
            },
        }],
        'n/exports-style': [2, 'module.exports'],

        'unicorn/prefer-node-protocol': 2,
    },
};
