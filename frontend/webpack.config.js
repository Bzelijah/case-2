const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js'),
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './public/build'),
		compress: true,
		hot: true,
		port: 8081,
		proxy: {
			'/api': 'http://localhost:8001'
		}
	},
	output: {
		path: path.resolve(__dirname, './public/build'),
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Case 2',
			template: path.resolve(__dirname, './src/template.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(sass|less|css)$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	}
}
