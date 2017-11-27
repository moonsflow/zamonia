const webpack = require('webpack');
const path = require('path');


// const extractCommons = new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: 'commons.js'})
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractCSS = new ExtractTextPlugin('../static_webpack/style.bundle.css')

const pathconfic = {
    src: './booknote/static/booknote',
    dist: './booknote/static/booknote-dist',
}



const config = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    context: path.resolve(__dirname, pathconfic.src),
    entry: {
        main: path.resolve(__dirname, pathconfic.src) + '/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, pathconfic.dist),
        publicPath: 'http://localhost:9090/booknote/static/booknote-dist/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, pathconfic.src),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false}]
                    ]
                }
            }]
        }, {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    //emitFile: false,
                    publicPath: 'http://localhost:8080/',
                    name: '[path][name].[ext]'
                }
            }]
        }, {
            test: /\.(scss|sass)$/i,
            include: [
                path.resolve(__dirname, pathconfic.src) + '/css'
            ],
            // loader: extractCSS.extract(['css-loader','sass-loader'])
            loader: ['style-loader', 'css-loader','sass-loader']
        }]
    },
    plugins: [
        // extractCommons
        // extractCSS,
        new webpack.NamedModulesPlugin(),

    ]
}

module.exports = config