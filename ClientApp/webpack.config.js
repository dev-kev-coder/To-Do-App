const path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname),
        use: ['babel-loader'],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // we are interested in.
  resolve: {
    alias: {
      Materialize: path.resolve(__dirname, 'src/ui/materialize'),
    },
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'wwwroot', 'js'),
  },
};
