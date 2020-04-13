const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = function () {
  return {
    module: {
      rules: [{
        test: /\.s*css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
            }
          }, {
            loader: 'resolve-url-loader',
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true } 
          }
        ]
      }]
    }
  }
}
