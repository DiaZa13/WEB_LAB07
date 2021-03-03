//CONFIGURACION WEBPACK
const path = require('path');
const miniCssExtractplugin = require('mini-css-extract-plugin');
const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:false,
    entry: {
        //index: './src/index.js',
        pag1: './src/pag3.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    //plugin
    plugins: [
        new miniCssExtractplugin({ filename: "index.bundle.css" }),
      /*  new htmlWebpackplugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks:["index"]
        }),*/
        new htmlWebpackplugin({
            template: "./src/pag3.html",
            filename: "pag3.html",
            chunks:["pag1"]
        }),
    ],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractplugin.loader,'css-loader','sass-loader'],
            },
            {
                test: /\.(svg|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
        ],
    },
};