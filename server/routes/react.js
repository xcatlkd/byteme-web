import express from "express";
import webpack from "webpack";
import path from "path";
import fs from "fs";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack.config";

export default function(app) {
	const htmlFilePath = path.resolve(__dirname, "../../dist", "index.html");
	let htmlHandler;

	if (IS_DEV) {
		const compiler = webpack(webpackConfig);
		const devMW = webpackDevMiddleware(compiler, {
			publicPath: webpackConfig.output.publicPath,
			contentBase: path.resolve(__dirname, "../../src"),
			hot: true,
			stats: { colors: true },
		});

		app.use(devMW);
		app.use(webpackHotMiddleware(compiler));
		const mfs = devMW.fileSystem;

		
	}

}