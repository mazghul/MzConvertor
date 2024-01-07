/* eslint-env node */

module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react',
        },
      },
    ],
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/api',
    '<rootDir>/app/navigation',
    '<rootDir>/App.tsx',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-paper|react=native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
}
