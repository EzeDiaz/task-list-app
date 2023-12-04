const path = require("path");

//Workaround for code: 'ERR_OSSL_EVP_UNSUPPORTED' issue
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname, 'src', 'app'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader'
    }]
  }
}