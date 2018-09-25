'use strict';

const index = require('.');

describe('lib/index', () => {
  test('the module exports the expected', () => {
    expect(index).toEqual({
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
        'plugin:unicorn/recommended'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      plugins: ['es6-recommended', 'jsdoc', 'json', 'node', 'security', 'unicorn'],
      rules: expect.any(Object),
      settings: expect.any(Object)
    });
  });
});
