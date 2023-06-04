const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'To-Do List',
            minify: false,
        }),
    ],
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    }
}