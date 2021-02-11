'use strict';

const index = require('.');

describe('lib/index', () => {
  test('the module exports the expected', () => {
    expect(index).toStrictEqual({
      env: expect.any(Object),
      extends: expect.any(Array),
      overrides: expect.any(Array),
      parserOptions: { sourceType: 'script' },
      plugins: expect.any(Array),
      rules: expect.any(Object),
      settings: expect.any(Object)
    });
  });
});
