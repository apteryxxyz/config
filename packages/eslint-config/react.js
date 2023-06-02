require('./helpers').ensureDependencies([
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
]);

module.exports = {
    plugins: ['react', 'react-hooks'],
    rules: {
        ...require('./jsx.js').rules,

        'react/boolean-prop-naming': 2,
        'react/button-has-type': 2,
        'react/default-props-match-prop-types': 2,
        'react/hook-use-state': 2,
        'react/iframe-missing-sandbox': 2,
        'react/no-access-state-in-setstate': 2,
        'react/no-arrow-function-lifecycle': 2,
        'react/no-children-prop': 2,
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-invalid-html-attribute': 2,
        'react/no-is-mounted': 2,
        'react/no-namespace': 2,
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-set-state': 2,
        'react/no-string-refs': 2,
        'react/no-this-in-sfc': 2,
        'react/no-typos': 2,
        'react/no-unknown-property': 2,
        'react/no-unsafe': 2,
        'react/no-unstable-nested-components': 2,
        'react/no-unused-class-component-methods': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-read-only-props': 2,
        'react/prefer-stateless-function': [
            2,
            {
                ignorePureComponents: true,
            },
        ],
        'react/prop-types': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-default-props': 2,
        'react/sort-comp': 2,
        'react/sort-prop-types': 2,
        'react/state-in-constructor': [2, 'always'],
        'react/static-property-placement': 2,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,

        'react-hooks/exhaustive-deps': 2,
        'react-hooks/rules-of-hooks': 2,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
