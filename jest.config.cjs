// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "babel-jest",
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Ensure ts-jest uses your TypeScript config
    },
  },
};
