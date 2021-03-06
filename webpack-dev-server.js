const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
})

server.listen(8080, 'localhost', function() {})