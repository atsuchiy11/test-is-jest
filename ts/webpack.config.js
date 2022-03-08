const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		hot: true,
	},
	devtool: "eval-cheap-module-source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
		alias: {
			/**
			 * tsconfig.jsonのbaseUrlを合わせる
			 * TypeScriptとwebpackのモジュール解決は別物。。
			 */
			src: path.join(__dirname, "src/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: path.join(__dirname, "src"),
				exclude: /node_modules/,
				use: "ts-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "index.html"),
		}),
	],
}
