'use strict';

module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:array-func/all',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
    'plugin:json/recommended',
    'plugin:node/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:radar/recommended',
    'plugin:security/recommended',
    'plugin:switch-case/recommended',
    'plugin:unicorn/recommended'
  ],
  ignorePatterns: ['**/*.md'],
  overrides: [
    {
      files: ['*.test.js', '**/__mocks__/**/*.js'],
      rules: {
        'global-require': 'off',
        'jsdoc/require-jsdoc': 'off',
        'radar/cognitive-complexity': 'warn',
        'radar/no-duplicate-string': 'off',
        'radar/no-identical-functions': 'off',
        'unicorn/consistent-function-scoping': 'off'
      }
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.js'],
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        'no-console': 'off',
        strict: 'off',
        'unicorn/filename-case': 'off'
      }
    }
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'script'
  },
  plugins: [
    'es6-recommended',
    'import',
    'jsdoc',
    'json',
    'markdown',
    'no-constructor-bind',
    'no-secrets',
    'no-use-extend-native',
    'node',
    'promise',
    'radar',
    'security',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'switch-case',
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
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['index', 'parent', 'sibling']
        ],
        'newlines-between': 'always'
      }
    ],
    'jest/no-deprecated-functions': 'off',
    'jsdoc/check-tag-names': ['error', { definedTags: ['fulfil', 'reject', 'typicalname'] }],
    'jsdoc/no-undefined-types': ['error', { definedTypes: ['NodeJS'] }],
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-await-in-loop': 'off',
    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',
    'no-continue': 'off',
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
    'no-secrets/no-secrets': 'error',
    'no-use-extend-native/no-use-extend-native': 'error',
    'promise/no-callback-in-promise': 'off',
    'radar/cognitive-complexity': ['error', 128],
    'security/detect-object-injection': 'off',
    'simple-import-sort/imports': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    strict: ['error', 'global'],
    'switch-case/newline-between-switch-case': 'off',
    'switch-case/no-case-curly': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^README\\.md$', '^\\d+_\\d+\\.json$']
      }
    ],
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-flat-map': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prevent-abbreviations': 'off'
  },
  settings: {
    jsdoc: {
      mode: 'permissive',
      preferredTypes: {
        object: 'Object',
        'object.<>': 'Object'
      },
      tagNamePreference: {
        return: 'returns'
      }
    }
  }
};
