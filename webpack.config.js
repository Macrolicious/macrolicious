const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  // mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', { targets: 'defaults' }],
              ['@babel/react'],
            ],
          },
        }, 
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|cur)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: 'client/index.html',
      publicPath: '/',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    // disables the full-screen overlay that displays build errors
    // uncomment while styling
    client: {
      overlay: false,
    },

    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build'),
    },
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    ],
    port: 8080,
  },
  
 
};


/*

devServer: {
    static: {
      directory: path.join(__dirname, './build'),
    },
    hot: true,
    port: 3000,
    proxy: {
      '/': 'http://localhost:' + process.env.PORT,
    },
  },


*/


/*
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
*/


