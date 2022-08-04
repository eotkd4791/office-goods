/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/renderer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/.next'],
  setupFilesAfterEnv: ['<rootDir>/renderer/jest.setup.ts'],
  verbose: true,
};
