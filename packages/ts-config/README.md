# Apteryx's TypeScript Config

## Installation

```bash
npm install ts-config-apteryx
yarn add ts-config-apteryx
pnpm add ts-config-apteryx
```

## Usage

Add the following field to your `tsconfig.json`.

```json
{
    "extends": "ts-config-apteryx"
}
```

## Configuration

```json
{
    "extends": "ts-config-apteryx",
    "compilerOptions": { "ourDir": "./dist" },
    "exclude": ["./node_modules/", "./dist/"],
    "include": ["./src/**/*.ts"]
}
```
