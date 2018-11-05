const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // 处理less
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            // 处理图片
            test: /\.(gif|jpg|jpeg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 90 * 1024
                }
            }]
        }, {
            //处理高版本js
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}