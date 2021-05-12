const path = require("path")
const rootPath = path.resolve(__dirname, "../")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = `${rootPath}/src`
    return config
  },
}
