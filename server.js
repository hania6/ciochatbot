const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
//const mongoose = require('mongoose');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

//const config = require('./config/config');

const chatRoutes = require('./server/routes/api/Chat');
// Configuration
// ================================================================================================

// Set up Mongoose
// mongoose.connect(isDev ? config.db_dev : config.db, {
//     useMongoClient: true,
// });
// mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
app.use('/', chatRoutes);

if (isDev) {
    // Transpilation Setup Loaded Optionally in Developement enviroment only
    const webpack = require('webpack'); // eslint-disable-line global-require
    const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
    const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
    const webpackConfig = require('./webpack.config'); // eslint-disable-line global-require
    const historyApiFallback = require('connect-history-api-fallback'); // eslint-disable-line global-require

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
    app.use(express.static(path.resolve(__dirname, './dist')));
} else {
    app.use(express.static(path.resolve(__dirname, './dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './dist/index.html'));
        res.end();
    });
}

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }

    console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
