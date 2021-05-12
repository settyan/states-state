module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  errorOnDeprecated: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
}
