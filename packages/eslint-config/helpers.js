const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { execSync } = require('node:child_process');
const getParentRoot = () => require('app-root-path').toString();

function getParentPackageJson() {
    const packageJsonPath = join(getParentRoot(), 'package.json');
    const packageJson = readFileSync(packageJsonPath, 'utf8');

    return JSON.parse(packageJson);
}

function determineAddDependencyScript() {
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

function ensureDependencies(dependencies = []) {
    const packageJson = getParentPackageJson();
    const missingDependencies = dependencies.filter(dep =>
        !packageJson.dependencies?.[dep] &&
        !packageJson.devDependencies?.[dep]);
    if (missingDependencies.length === 0) return;

    const [packageManager, addScript] = determineAddDependencyScript();
    if (!packageManager)
        throw new Error('Could not determine package manager');

    const fullAddScript = `${packageManager} ${addScript}`;
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
