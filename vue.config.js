const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require('copy-webpack-plugin')

//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = defineConfig({
  pluginOptions: {
    storybook: {
      allowedPlugins: ['define']
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'umd'
    },
    target: 'web',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: './node_modules/lottie-web/build/player/lottie.min.js',
            to: './lottie.min.js'
          },
          {
            from: './node_modules/hls.js/dist/hls.js',
            to: './hls.js'
          }
        ]
      })
      // new BundleAnalyzerPlugin(),
    ],
    externals: {
      'lottie-web': 'lottie',
      'hls.js': 'Hls'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })

    config.plugin('html').tap((args) => {
      args[0].title = 'APLAYZ CLONE'
      return args
    })
  }
})
