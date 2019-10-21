# eslint-config-lifion

[![npm version](https://badge.fury.io/js/eslint-config-lifion.svg)](http://badge.fury.io/js/eslint-config-lifion)

This package provides Lifion's base JS .eslintrc as an extensible shared config.

## Usage

Install the module and its peer dependencies:

```sh
npm install eslint-config-lifion eslint prettier -D
```

Make sure ESLint uses this module by adding "extends" to your `.eslintrc` file:

```json
{
  "extends": "lifion"
}
```

Configure Prettier by adding this to your `.prettierrc` file:

```json
{
  "printWidth": 100,
  "singleQuote": true
}
```

## License

[MIT](LICENSE)
