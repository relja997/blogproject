const path = require('path');
const mode =
	process.env.NODE_ENV === 'production' ? 'production' : 'development';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: mode,

	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[hash][ext][query]',
	},

	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
		}),
	],

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devtool: 'source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
};
