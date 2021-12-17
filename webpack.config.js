const path = require("path");
const { NODE_ENV = "production" } = process.env;
module.exports = {
	entry: "./src/app.ts",
	devtool: "inline-source-map",
	mode: NODE_ENV,
	target: "node",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.js",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
};
