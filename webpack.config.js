const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'static/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template: './public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'static'),
        //         to: 'static',
        //         ignore: ['.*']
        //     }
        // ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        host: '192.168.9.149',
        port: 9000
    }
}