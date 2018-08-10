const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client';

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname + '/dist'),
        hot: true,
        open: true,
        overlay: true,
        publicPath: '/'
    },
    entry: {
        main: ['./src/client', hotMiddlewareScript]
    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
			react: path.resolve('./node_modules/react'),
			scripts: path.resolve('./src/scripts'),
			actions: path.resolve('./src/actions'),
			reducers: path.resolve('./src/reducers'),
			config: path.resolve('./config.js'),
			common: path.resolve('./src/components/common')
		},
        extensions: ['.js', '.jsx'],
        modules: [
			path.join(__dirname, 'src'),
			'node_modules'
		]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    chunks: "initial",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                },
                commons: {
                    chunks: "initial",
                    minChunks: 3,
                    name: "commons",
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views/index.dev.ejs'),
            inject: false
        })
    ]
}