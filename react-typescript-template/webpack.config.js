const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  devServer: {
    // hot: true,
    host: '0.0.0.0',
    contentBase: './dist'
  },

  entry: {
    index: path.join(__dirname, 'src/index.tsx')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".tsx", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              minimize: false,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "tslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]']
      }]
  },

  externals: {
    'jquery': 'jQuery',
    '$': 'jQuery',
    'jQuery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src/index.html'),
    //   title: '首页',
    //   filename: 'index.html',
    //   chunks: ['index']
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: 'index.html'
    }),

    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
