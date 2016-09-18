'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');

var appPath = path.join(__dirname, 'src');

var env = process.env.NODE_ENV || 'dev';
var debug = env !== 'production';
var minify = !debug;

var plugins = [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(appPath, 'index.html'),
    minify: false
}), new CleanWebpackPlugin(['dist', 'build'], {
    root: '/full/project/path',
    verbose: true,
    dry: false,
    exclude: ['shared.js']
})];

if (minify) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: {
        bundle: './src/main.js'
    },

    devtool: 'inline-source-map',

    debug: debug,

    output: {
        path: './src/dist',
        filename: '[hash].[name].js'
    },

    devServer: {
        host: 'localhost',
        port: 8080
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.(gif|phg|jpg)$/,
            loader: 'file',
            query: {
                name: '[path][name].[ext]?[hash]'
            }
        }]
    },

    plugins: plugins

};

//# sourceMappingURL=webpack.config-compiled.js.map