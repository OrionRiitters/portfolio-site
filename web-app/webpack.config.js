const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

//const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    open: true,
    host: "localhost"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new ESLintPlugin(),

    //new MiniCssExtractPlugin()

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader"
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"]
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [/*stylesHandler, */"css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset"
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    //config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
