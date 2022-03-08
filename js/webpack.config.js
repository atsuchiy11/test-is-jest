const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		hot: true,
		/** for delivery scripts */
		// open: "bundle.js",
		// https: true,
	},
	devtool: "eval-cheap-module-source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
	},
	module: {
		rules: [{ test: /\.js?/, exclude: /node_modules/, loader: "babel-loader" }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "index.html"),
		}),
	],
}
