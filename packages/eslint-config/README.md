# Apteryx's ESLint Config

## Installation

```bash
npm install eslint eslint-config-apteryx
yarn add eslint eslint-config-apteryx
pnpm add eslint eslint-config-apteryx
```

Any additional dependencies - based on which configurations you decide to use - will automatically be installed upon your first run of ESLint.

## Usage

This package includes the following configurations:

- [`apteryx/common`](./common.js)
- [`apteryx/browser`](./browser.js) – for usage with DOM and other browser APIs.
- [`apteryx/jsx`](./jsx.js) – for usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).
- [`apteryx/module`](./module.js) – for usage with ESM modules.
- [`apteryx/next`](./next.js) – for usage with [Next.js](https://nextjs.org/).
- [`apteryx/node`](./node.js) - for usage with Node.js.
- [`apteryx/prettier`](./prettier.js) - for usage with [Prettier](https://prettier.io/).
- [`apteryx/react`](./react.js) - for usage with [React](https://reactjs.org/).
- [`apteryx/typescript`](./typescript.js) - for usage with [TypeScript](http://typescriptlang.org/).

## Configuration

<details>
<summary>Node.js</summary>
<br>

```json
{
    "root": true,
    "extends": [
        "apteryx/common",
        "apteryx/node",
        "apteryx/typescript",
        "apteryx/prettier"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"]
}
```

<br>
</details>

<details>
<summary>React / Next</summary>
<br>

```json
{
    "root": true,
    "extends": [
        "apteryx/common",
        "apteryx/browser",
        "apteryx/node",
        "apteryx/typescript",
        "apteryx/next",
        "apteryx/prettier"
    ],
    "settings": {
        "react": { "version": "detect" }
    },
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }]
    }
}
```

<br>
</details>

## Usage with Prettier

Use with [prettier-config-apteryx](https://github.com/apteryxxyz/config/tree/main/packages/prettier-config).

```json
{
    "extends": [
        "apteryx/common",
        "apteryx/node",
        "apteryx/typescript",
        "apteryx/prettier"
    ]
}
```

`apteryx/prettier` must be last in the list, as this will disable all other rules that conflict with Prettier.
