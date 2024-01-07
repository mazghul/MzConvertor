/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'prefer-promise-reject-errors': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
