const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'myBundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(jpg|jpeg|svg|gif|png)$/i,
        type: 'asset/resource' 
      }
    ]
  },
  devServer: {
    before: function(src, server){
      server._watch('./src/*.html')
    },
    contentBase: path.join(__dirname,'src'),
    hot: true,
    port: 3000
  }
}