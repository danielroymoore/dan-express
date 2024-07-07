module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node", // Use node environment for server tests
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use babel-jest for js and jsx files
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest for ts and tsx files
  },
};
