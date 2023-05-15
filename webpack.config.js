const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.html',
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    }
}