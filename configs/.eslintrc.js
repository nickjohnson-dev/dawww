module.exports = {
  env: {
    browser: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:lodash-fp/recommended',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'lodash-fp',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
      },
    ],
    'prefer-const': 2,
  },
}
