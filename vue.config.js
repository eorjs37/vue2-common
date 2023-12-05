const { defineConfig } = require('@vue/cli-service');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      sentryWebpackPlugin({
        org: "no-vx9",
        project: "vue2-editorconfig",
        authToken: "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"
      }),
      new BundleAnalyzerPlugin()
    ],
  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = "APLAYZ CLONE"
      return args
    });
  }
})
