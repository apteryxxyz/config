/**
 * Get the root directory of the parent project.
 * @returns {string}
 */
function getParentRoot() {
    const { _findPath: findPath } = require('node:module');
    const { dirname, sep } = require('node:path');

    const thisPath = dirname(module.filename);
    const pathParts = thisPath.split(sep)
        .map((p, i) => i === 0 ? p : sep + p);

    let currentPath = '', foundRoot = false;

    for (const part of pathParts) {
        currentPath += part;

        if (findPath(currentPath)) {
            foundRoot = true;
            break;
        }
    }

    return currentPath;
}

/**
 * Modify the Prettier module code to meet the needs this.
 * @returns {void}
 */
function modifyPrettierModule() {
    const { resolve } = require('node:path');
    const { readFileSync, writeFileSync, existsSync } = require('node:fs');

    const nodeModulesPath = resolve(getParentRoot(), 'node_modules');
    const prettierIndexPath = resolve(nodeModulesPath, 'prettier', 'index.js');

    if (!existsSync(prettierIndexPath)) return console.warn('\x1b[33m%s\x1b[0m',
        'Prettier module not found, cannot modify.');

    let prettierIndex = readFileSync(prettierIndexPath, 'utf8');

    /**
     * Replace this:
     * ```
     * return (
     *   <div>
     *     <h1>Hello World</h1>
     *   </div>
     * );
     * ```
     * With this;
     * ```
     * return <div>
     *   <h1>Hello World</h1>
     * </div>;
     * ```
     */
    const toReplace = 'function maybeWrapJsxElementInParens(path, elem, options) {';
    const replaceWith = 'function maybeWrapJsxElementInParens(_, e) { return e;';
    prettierIndex = prettierIndex.replace(toReplace, replaceWith);

    writeFileSync(prettierIndexPath, prettierIndex, 'utf8');
}

module.exports = {
    getParentRoot,
    modifyPrettierModule,
};