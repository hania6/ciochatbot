const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const historyApiFallback = require('connect-history-api-fallback');

module.exports = (app) => {
    const compiler = webpack(webpackConfig);
    app.use(historyApiFallback({
        verbose: false
    }));

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: path.resolve(__dirname, '../client/public'),
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    }));

    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, '../dist')));
};
