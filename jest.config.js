module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  errorOnDeprecated: true,
  globals: {
    "ts-jest": {
      tsconfig: {
        extends: "./tsconfig.json",
        compilerOptions: {
          "jsx": "react-jsx"
        }
      }
    },
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
