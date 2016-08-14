module.exports = {
	entry: './client/app.js',
	output: {
		path: './static',
		filename: 'client.bundle.js'
	},
	module: {
		loaders: [
			{ loader: 'babel-loader' }
		]
	}
};