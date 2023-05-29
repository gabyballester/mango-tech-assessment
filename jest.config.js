module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  transform: {
    "^.+\\.scss$": 'jest-scss-transform',
    "^.+\\.jsx?$": "babel-jest"
  },
}