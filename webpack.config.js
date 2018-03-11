let path = require('path');

module.exports = {
    entry: ['./App/app.js'],
    output: {
        path: path.join(__dirname, '/dest'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {   test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders:['css-loader']
            },
            {   test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loaders: ['file-loader']
            },
            {   test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        proxy:{
            '/iplookup': {
                target : 'http://int.dpool.sina.com.cn',
                secure :false,
                changeOrigin : true
            },
            '/weather':{
                target : 'http://jisutqybmf.market.alicloudapi.com',
                secure : false,
                changeOrigin : true
            }
        }
    }
};