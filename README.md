# eslint-config-lifion

[![npm version](https://badge.fury.io/js/eslint-config-lifion.svg)](http://badge.fury.io/js/eslint-config-lifion) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)

This package provides Lifion's base JS .eslintrc as an extensible shared config.

## Usage

Install the module and its peer dependencies:

```sh
npm install eslint-config-lifion eslint@7 prettier@2 -D
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
  "endOfLine": "auto",
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none"
}
```

## License

[Apache-2.0](LICENSE)
