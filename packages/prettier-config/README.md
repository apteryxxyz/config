# Apteryx's Prettier Config

## Installation

```bash
npm install prettier prettier-config-apteryx
yarn add prettier prettier-config-apteryx
pnpm add prettier prettier-config-apteryx
```

## Usage

Add the following field to your `package.json`.

```json
{
    "devDependencies": {
        "prettier-config-apteryx": "*"
    },
    "prettier": "prettier-config-apteryx"
}
```

<br>
</details>

## Usage with ESLint

Use with [eslint-config-apteryx](https://github.com/apteryxxyz/config/tree/main/packages/eslint-config).

Add the following to your ESLint config.

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
