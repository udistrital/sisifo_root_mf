const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "udistrital";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isProd: webpackConfigEnv && webpackConfigEnv.isProd,
          isDev: webpackConfigEnv && webpackConfigEnv.isDev,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
        favicon: "./src/favicon.ico",
      }),
      new DefinePlugin({
        isProd: webpackConfigEnv && webpackConfigEnv.isProd,
        isDev: webpackConfigEnv && webpackConfigEnv.isDev,
        isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
      }),
    ],
  });
};
