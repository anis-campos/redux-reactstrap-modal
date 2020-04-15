// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  collectCoverageFrom: [
    "src/**/*.js"
  ],
  coveragePathIgnorePatterns: [
    "index.js"
  ],

  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  },

  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jsdom",


};
