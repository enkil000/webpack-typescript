const path = require('path')

module.exports = {
	mode: 'production',
	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, 'dist/'),
	},
	module: {
		rules: [
			{
				test: /\.m?ts$/,
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
