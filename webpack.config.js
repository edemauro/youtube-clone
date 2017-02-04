var webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'API_KEY': JSON.stringify(process.env.API_KEY)
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
