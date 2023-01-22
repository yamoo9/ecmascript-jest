module.exprots = {
  testEnvironment: '@happy-dom/jest-environment',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/__tests__/__html__',
  ],
};
