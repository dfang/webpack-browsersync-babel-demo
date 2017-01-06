module.exports = {
  entry: './app/index.js',
  output: {
			    filename: 'bundle.js',
			    path: './dist'
  },
	devServer: {
	        historyApiFallback: true,
	        hot: true,
	        inline: true,
	        progress: true,
					port: 8080
  }
}
