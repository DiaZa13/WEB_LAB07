//CONFIGURACION WEBPACK
const path = require('path');
const miniCssExtractplugin = require('mini-css-extract-plugin');
const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:false,
    entry: {
        index: './src/index.js',
        pag1: './src/pag1.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    //plugin
    plugins: [
        new miniCssExtractplugin({ filename: "[name].bundle.css" }),
        new htmlWebpackplugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks:["index"]
        }),
        new htmlWebpackplugin({
            template: "./src/pag1.html",
            filename: "pag1.html",
            chunks:["pag1"]
        }),
    ],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractplugin.loader,'css-loader','sass-loader'],
            },
        ],
    },
};