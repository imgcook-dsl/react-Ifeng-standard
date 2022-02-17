// ts 转义 js
const path = require('path');

module.exports = {
  watch: false,
  entry: './src/core/entry.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/,
    },

    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src'),
    libraryTarget: 'commonjs2',
  }
};