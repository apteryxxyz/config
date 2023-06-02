require('./helpers').ensureDependencies([
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
]);

module.exports = {
    plugins: ['react', 'react-hooks'],
    rules: {
        ...require('./jsx.js').rules,

        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/hook-use-state': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-invalid-html-attribute': 'error',
        'react/no-is-mounted': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': [
            'error',
            {
                ignorePureComponents: true,
            },
        ],
        'react/prop-types': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-default-props': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': ['error', 'always'],
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
