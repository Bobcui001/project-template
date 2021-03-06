/**
 *  Author: harry.lang
 *  Date: 2017/11/21
 *  Description: Created by harrylang on 2017/11/21.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map ',
    devServer: {
        contentBase: './',
        host: '127.0.0.1',
        port: 9999
    }
});