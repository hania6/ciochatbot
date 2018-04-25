const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = {
    entry: {
        app: [
            helpers.root('client/app/index.js')
        ]
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.json', '.html'],
        alias: {
            app: 'client/app'
        }
    },

    module: {
        rules: [
            // JS files
            {
                test: /\.jsx?$/,
                include: helpers.root('client'),
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        new HtmlWebpackPlugin({
            template: helpers.root('client/public/index.html'),
            inject: 'body'
        }),

        new CopyWebpackPlugin([{
            from: helpers.root('client/public')
        }])
    ]
};
