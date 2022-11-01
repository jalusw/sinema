const { merge } = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
});
