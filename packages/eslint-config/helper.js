/**
 * Get the root directory of the parent project.
 * @returns {string}
 */
const getParentRoot = () => require('app-root-path').toString();

/**
 * Get the package.json content of the parent project.
 * @returns {Record<string, any>}
 */
function getParentPackageJson() {
    const { readFileSync } = require('node:fs');
    const { join } = require('node:path');

    const packageJsonPath = join(getParentRoot(), 'package.json');
    const packageJson = readFileSync(packageJsonPath, 'utf8');

    return JSON.parse(packageJson);
}

/**
 * Determine the package manager and add dependency script to use.
 * Add script will also be set to have as development dependency.
 * @returns {[string, string]}
 */
function determineAddDependencyScript() {
    const { existsSync } = require('node:fs');
    const { join } = require('node:path');

    const root = getParentRoot();

    if (existsSync(join(root, 'package-lock.json')))
        return ['npm', 'install -D'];
    else if (existsSync(join(root, 'yarn.lock')))
        return ['yarn', 'add -D'];
    else if (existsSync(join(root, 'pnpm-lock.yaml')))
        if (existsSync(join(root, 'pnpm-workspace.yaml')))
            return ['pnpm', 'add -Dw'];
        else
            return ['pnpm', 'add -D'];
    else
        return [null, null];
}

/**
 * Ensure a list of dependencies are installed.
 * @param {string[]} dependencies List of dependency names.
 * @returns {void}
 */
function ensureDependencies(dependencies = []) {
    const { execSync } = require('node:child_process');

    const packageJson = getParentPackageJson();
    const [packageManager, addScript] = determineAddDependencyScript();
    const fullAddScript = `${packageManager} ${addScript}`;

    if (!packageManager)
        throw new Error('Could not determine package manager');

    const missingDependencies = dependencies.filter(dep =>
        !packageJson.dependencies?.[dep] &&
        !packageJson.devDependencies?.[dep]);

    if (missingDependencies.length === 0) return;

    const missingDependenciesString = missingDependencies.join(' ');
    const command = `${fullAddScript} ${missingDependenciesString}`;

    console.log(
        '\x1b[36m%s\x1b[0m',
        '[eslint-config-apteryx] The folllowing required dependencies are missing:'
    );
    console.log(missingDependenciesString);
    console.log(
        '\x1b[36m%s\x1b[0m',
        `[eslint-config-apteryx] Attempting to install them now using ${packageManager}...`
    );
    execSync(command, { stdio: 'inherit' });
}

module.exports = {
    getParentRoot,
    getParentPackageJson,
    determineAddDependencyScript,
    ensureDependencies
};