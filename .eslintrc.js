module.exports = () => {
  return {
    parser: "babel-eslint",
    extends: ['airbnb', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    env: {
      browser: true,
      node: true,
      jest: true,
      commonjs: true,
    },
    rules: {
      'react/jsx-filename-extension': 0,
      'prettier/prettier': 'warn',
    },
  };
};
