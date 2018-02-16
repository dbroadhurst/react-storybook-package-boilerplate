const path = require('path')

const config = {
  context: path.resolve(__dirname, './src'),
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    library: 'react-storybook-package-boilerplate',
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-react-jsx']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
}

module.exports = config
