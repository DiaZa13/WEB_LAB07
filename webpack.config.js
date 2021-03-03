//CONFIGURACION WEBPACK
const path = require('path');
const miniCssExtractplugin = require('mini-css-extract-plugin');
const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:false,
    entry: {
        index: './src/app/home/index.js',
        pag1: './src/app/pag1/pag1.js',
        pag2: './src/app/pag2/pag2.js',
        pag3: './src/app/pag3/pag3.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    //plugin
    plugins: [
        new miniCssExtractplugin({ filename: "index.bundle.css" }),
      new htmlWebpackplugin({
            template: "./src/app/home/index.html",
            filename: "index.html",
            chunks:["index"]
        }),
        new htmlWebpackplugin({
            template: './src/app/pag1/pag1.html',
            filename: "pag1.html",
            chunks:["pag1"]
        }),
        new htmlWebpackplugin({
            template: './src/app/pag2/pag2.html',
            filename: "pag2.html",
            chunks:["pag2"]
        }),
        new htmlWebpackplugin({
            template: './src/app/pag3/pag3.html',
            filename: "pag3.html",
            chunks:["pag3"]
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
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "img",
                        name: "[name]-[hash].[ext]",
                    }
                }
            },
            {

                test: /\.mp3$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "audio",
                        name: "[name]-[hash].[ext]",
                    }
                }

            },
        ],
    },
};