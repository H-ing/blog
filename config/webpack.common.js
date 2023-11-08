const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpacktPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
    entry: {
        main: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'        
                ]
            },
            {
                test: /\.(jpe|jpeg|png|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: './style/[contenthash].css'
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerWebpacktPlugin()
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    }
}