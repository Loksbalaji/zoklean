const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: "./client/index.jsx",
  plugins: [HtmlWebpackPluginConfig],
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.(css)$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(gif|jpe?g|png|ico|eot|svg|ttf|woff|woff2)$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "^/api/*": {
        target: "http://localhost:8000/api/",
        secure: false
      }
    }
  }
};
