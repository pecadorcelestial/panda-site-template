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
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/dist/'
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/
                },
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    name: 'commons'
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