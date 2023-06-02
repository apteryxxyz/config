const { resolve } = require('node:path');
const { readFile, writeFile, access } = require('node:fs/promises');
const getParentRoot = () => require('app-root-path').toString();

async function main(){
    await patchPrettier();
}
void main();

async function patchPrettier() {
    const nodeModulesPath = resolve(getParentRoot(), 'node_modules');
    const prettierIndexPath = resolve(nodeModulesPath, 'prettier', 'index.js');

    const doesExist = await doesFileExist(prettierIndexPath);
    if (!doesExist) return console.warn('\x1b[33m%s\x1b[0m',
        'Prettier module not found, cannot modify.');

    let prettierIndex = await readFile(prettierIndexPath, 'utf8');

    const toReplace = 'function maybeWrapJsxElementInParens(path, elem, options) {';
    const replaceWith = 'function maybeWrapJsxElementInParens(_, e) { return e;';
    prettierIndex = prettierIndex.replace(toReplace, replaceWith);

    await writeFile(prettierIndexPath, prettierIndex, 'utf8');
}

async function doesFileExist(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}