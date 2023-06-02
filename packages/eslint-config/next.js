require('./helpers').ensureDependencies([
    '@next/eslint-plugin-next'
]);

module.exports = {
    plugins: ['@next/next'],
    rules: {
        '@next/next/google-font-display': 'warn',
        '@next/next/google-font-preconnect': 'warn',
        '@next/next/inline-script-id': 'error',
        '@next/next/next-script-for-ga': 'warn',
        '@next/next/no-assign-module-variable': 'error',
        '@next/next/no-before-interactive-script-outside-document': 'error',
        '@next/next/no-css-tags': 'warn',
        '@next/next/no-document-import-in-page': 'error',
        '@next/next/no-duplicate-head': 'error',
        '@next/next/no-head-import-in-document': 'error',
        '@next/next/no-html-link-for-pages': ['warn', 'src/app/'],
        '@next/next/no-img-element': 'warn',
        '@next/next/no-page-custom-font': 'warn',
        '@next/next/no-script-component-in-head': 'error',
        '@next/next/no-styled-jsx-in-document': 'error',
        '@next/next/no-sync-scripts': 'error',
        '@next/next/no-title-in-document-head': 'error',
        '@next/next/no-typos': 'error',
        '@next/next/no-unwanted-polyfillio': 'error',
        'import/extensions': 'off',
    }
};
