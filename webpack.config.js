const path = require('path')
const merge = require('webpack-merge')
const pug = require('./webpack/pug')
const scss = require('./webpack/scss')
const images = require('./webpack/images')
const fonts = require('./webpack/fonts')
const devServer = require('./webpack/devserver')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

const common = merge([{
  resolve: {
    alias: {
      Src: path.resolve(__dirname, './src'),
      Components: path.resolve(__dirname, './src/components')
      }
    },
  entry: {
    'app': PATHS.source + '/app.js',
    },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js'
    },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({})
      ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['app'],
      template: PATHS.source + '/public/index.html'
      }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    })
    ]
  },
  pug(),
  scss(),
  images(),
  fonts()
])

module.exports = function (env) {
  if (env === 'production') {
    return common
    }

  if (env === 'development') {
    return merge([
      common,
      devServer()
      ])
    }
}