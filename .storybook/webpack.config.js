const webpack = require("webpack");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [/configs/, /stories/, /src/],
    loader: "ts-loader",
    options: {
      onlyCompileBundledFiles: true
    }
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
