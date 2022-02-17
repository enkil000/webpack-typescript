const path = require('path')

module.exports = {
	mode: 'development',
	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, 'dist/'),
	},
	module: {
		rules: [
			{
				test: /\.m?ts$/,
				exclude: /(node_modules|bower_components)/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {},
	plugins: [],
}
