/**
 *config file for webpack
*/
var webpack = require("webpack")

 module.exports = {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" }
        ],
 };