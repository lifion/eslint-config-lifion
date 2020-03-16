'use strict';

module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
    'prettier/unicorn'
  ],
  overrides: [
    {
      files: ['*.test.js', '**/__mocks__/*.js'],
      rules: {
        'global-require': 'off',
        'jsdoc/require-jsdoc': 'off'
      }
    }
  ],
  parserOptions: {
    sourceType: 'script'
  },
  plugins: [
    'es6-recommended',
    'jsdoc',
    'json-light',
    'node',
    'security',
    'sort-destructure-keys',
    'sort-keys-fix',
    'unicorn'
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/__mocks__/**',
          'examples/**',
          'scripts/**',
          'tests/**'
        ],
        optionalDependencies: false
      }
    ],
    'jsdoc/check-tag-names': ['error', { definedTags: ['fulfil', 'reject', 'typicalname'] }],
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      }
    ],
    'security/detect-object-injection': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    strict: ['error', 'global'],
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/no-for-loop': 'off',
    'unicorn/prefer-flat-map': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
};
