const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')

const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === 'production'

const entry = PRODUCTION ? [
] : [
	'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:8080'
]

entry.push('./src/index.js')

const plugins = PRODUCTION ? [
	// this is required for efficient production build of react
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),
	new webpack.optimize.UglifyJsPlugin(),
	new HTMLPlugin({
		template: './src/html/index-template.html',
		filename: 'index.html',
		title: 'New Liberty'
	})
] : [
	new webpack.HotModuleReplacementPlugin()
]

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION),
	})
)

const extractSass = new ExtractTextPlugin({
	filename: 'style.[contenthash:12].min.css',
	disable: DEVELOPMENT
})

plugins.push(extractSass)

module.exports = {
	entry: entry,
	plugins: plugins,
	externals: {
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.(png|jpe?g|gif)$/,
			use: 'url-loader?limit=10000&name=images/[hash:12].[ext]',
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			use: extractSass.extract({
				use: [
					{loader: 'css-loader?minimize'},
					{loader: 'sass-loader'}
				],
				fallback: 'style-loader'
			}),
			exclude: /node_modules/
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: PRODUCTION ? '/' : '/dist/',
		filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
}