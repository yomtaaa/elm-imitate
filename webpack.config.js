const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractCSS = new ExtractTextPlugin('css/[name]-one.css')
const extractSass = new ExtractTextPlugin('css/[name]-two.css')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'css/[name].[ext]',
                    publicPath: '../'
                }
                
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader"
                use: extractCSS.extract(['css-loader']),
            },
            {
                test: /\.scss$/i,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                use: extractSass.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    // reslove: {
    //     extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
    // },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'My App',
            template: './index.ejs',
            filename: './index.html'
        }),
        extractCSS,
        extractSass,
        new UglifyJSPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true
    },
    devtool: '#eval-source-map'
}