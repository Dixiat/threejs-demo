const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) },
            { test: /\.js$/, loader: 'babel-loader', include: [path.join(__dirname, 'src')]}
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        progress: true,
        port: 3000
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: 'body'
        })
    ]
};