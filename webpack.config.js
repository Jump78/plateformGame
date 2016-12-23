var path         = require('path');
var SRC          = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

module.exports = {
    entry: './src/app.js',           
    output: {                     
        path: __dirname + '/dist/asset/script',            
        publicPath: '/dist/asset/script/',
        filename: 'app-bundle.js',
        sourceMapFilename: '[file].map'  
    },
    resolve: {
        root: [SRC, NODE_MODULES],
        extensions: ['', '.js', '.es6']
    },
    devtool: 'source-map',
    devServer: { 
        contentBase: 'dist',
        colors: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015',  'stage-0'] 
                }
            }
        ]
    },

    jshint: {
        esversion: 6,
        failOnHint: false
    }
}