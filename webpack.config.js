const path = require('path');

module.exports = {
  entry: './frontend/index.js', // Only include frontend entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'final'),
  },
  target: 'web', // Ensures bundling is for the browser
  externals: {
    // Exclude `mysql` or any Node.js server code from being bundled
    mysql: 'commonjs mysql',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
