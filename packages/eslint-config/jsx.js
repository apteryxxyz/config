require('./helpers').ensureDependencies([
    'eslint-plugin-react'
]);

module.exports = {
    plugins: ['react'],
    rules: {
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                children: 'never',
                props: 'never',
            },
        ],
        'react/jsx-curly-newline': 'error',
        'react/jsx-curly-spacing': [
            'error',
            'never',
            {
                allowMultiline: true,
            },
        ],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': [
            'error',
            {
                checkInlineFunction: false,
                checkLocalVariables: false,
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on',
            },
        ],
        'react/jsx-indent': ['error', 4],
		'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
            },
        ],
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 3,
                when: 'multiline',
            },
        ],
        'react/jsx-newline': [
            'error',
            {
                prevent: true,
            },
        ],
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
                allowBind: false,
                ignoreRefs: true,
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': [
            'error',
            {
                ignore: [
                    'h{}',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'p',
                    'a',
                    'ul',
                    'ol',
                    'li',
                    'img',
                    'div',
                    'span',
                    'dl',
                    'dt',
                    'dd',
                ],
            },
        ],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': 'error',
        'react/jsx-tag-spacing': [
            'error',
            {
                afterOpening: 'never',
                beforeSelfClosing: 'always',
                closingSlash: 'never',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
    },
};
