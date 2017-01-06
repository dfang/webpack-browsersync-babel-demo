```
mkdir webpack-browsersync-babel-demo && cd webpack-browsersync-babel-demo
npm init -y
npm i --save-dev webpack@beta webpack-dev-server browser-sync-webpack-plugin
mkdir app
touch webpack.config.js index.html app/index.js app/style.css
echo -e "node_modules/  \ndist/ \nbuild/ \nnpm-debug.log" > .gitignore
```

## index.html
```
<html>
  <head>
    <title>Webpack 2 demo</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

# package.json
```
"scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --devtool eval --progress --colors --watch --hot --content-base app",
    "deploy": "NODE_ENV=production webpack --config webpack.production.config.js"
},
```

# webpack.config.js
```
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
	        progress: true
  }
}
```

### links

[webpack-dev-server](https://github.com/webpack/webpack-dev-server)
[browser-sync-webpack-plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
