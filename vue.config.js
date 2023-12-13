const { defineConfig } = require('@vue/cli-service');
const { dependencies } = require('./package.json')
let whiteListedModules = ['vue', 'vue-lottie']
// const CopyPlugin = require("copy-webpack-plugin")

// const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'umd'
    },
    target: 'web',
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      //new BundleAnalyzerPlugin()
      // sentryWebpackPlugin({
      //   org: "no-vx9",
      //   project: "vue2-editorconfig",
      //   authToken: "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"
      // }),
      //
    ],
    externals: [
      'lottie-web',
      'vue-lottie'
    ],
    // externals: {
    //   'lottie-web': {
    //     amd: 'lottie-web',
    //   },
    //   vuelottie: {
    //     amd: 'vue-lottie',
    //     root: '_'
    //   }
    // },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = "APLAYZ CLONE"
      return args
    });
  }
})
