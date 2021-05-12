module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
