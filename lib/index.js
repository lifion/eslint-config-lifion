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
    'jsdoc/check-tag-names': ['error', { definedTags: ['fulfil', 'reject'] }],
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-await-in-loop': 'off',
    'security/detect-object-injection': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    strict: ['error', 'global'],
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/no-for-loop': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
};
