const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },  // Añadimos nuestro punto de salida
  // watch: true,
  resolve: {
    extensions: ['.js', '.jsx'],  // Añadimos el soporte para la extencion de JSX
    alias:{
      '@components' : path.resolve(__dirname, 'src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,  // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader" // Utiliza la configuracion de Babel
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [  // utilizamos este plugin para añadir el compilado al documento HTML
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  devServer: {
    historyApiFallback: true,
    open:true,
    port: 3006,
    compress: true,
    static: './dist',
  },

};