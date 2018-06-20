# eslint-config-lifion

[![npm version](https://badge.fury.io/js/eslint-config-lifion.svg)](http://badge.fury.io/js/eslint-config-lifion)

This package provides Lifion's base JS .eslintrc as an extensible shared config.

## Usage

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-lifion@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-lifion
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-lifion;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-lifion
  ```

2. Add `"extends": "lifion"` to your .eslintrc

## License

[MIT](LICENSE)
