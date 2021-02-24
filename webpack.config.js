//CONFIGURACION WEBPACK
const path = require("path");
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devtool:false,
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    //plugin
    plugins: [new miniCssExtractPlugin({ filename: "main.css" })],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader,'css-loader','sass-loader'],
            },
        ],
    },
};