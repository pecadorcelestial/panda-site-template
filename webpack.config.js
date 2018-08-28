const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        main: './src/client'
    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].js',
        publicPath: '/dist'
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
        new CleanWebpackPlugin(['dist']),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        }),
		new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views/index.prod.ejs'),
            filename: path.join(__dirname, 'views/index.ejs'),
			chunksSortMode: 'dependency',
            inject: true,
            root: '<%-root%>',
			styles: '<%-styles%>',
			reduxState: '<%=reduxState%>'
        })
    ]
}