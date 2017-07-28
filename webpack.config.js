var path = require("path");
var webpack = require("webpack");
module.exports = {
    cache: true,
    entry: './app/app.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'main.js'
    }
};
