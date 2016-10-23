module.exports = {
	entry: './src/main.js',

	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	watch: true,

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]//loaders
	}//module
};