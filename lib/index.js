module.exports = {
  env: {
    node: true,
    jest: true
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
  plugins: ['es6-recommended', 'jsdoc', 'node', 'security', 'unicorn'],
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
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'security/detect-object-injection': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }]
  },
  settings: {
    jsdoc: {
      additionalTagNames: {
        customTags: ['fulfil', 'reject']
      }
    }
  }
};
