
# Recipe
1. Install Webpack and add scripts to `package.json`
```
npm install --save-dev webpack webpack-cli
```
```
"scripts": {
  "start": "webpack --mode=development",
  "build": "webpack --mode=production"
}
```
2. Install Babel and add `webpack.config.js` with `babel-loader` module
```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```
3. Install React
```
npm install --save react react-dom
npm install --save-dev @babel/preset-react
```
4. Install `weback-dev-server`
```
npm install --save weback-dev-server
```
```
"scripts": {
  "start": "webpack-dev-server --mode=development --open",
  ...
},
```
5. Add a scss loader
```
npm install sass-loader node-sass --save-dev
npm install mini-css-extract-plugin css-loader --save-dev
```
```
// Chain the loaders
{
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ]
},
// Create a main.css file
plugins: [
  new MiniCssExtractPlugin()
]
```
6. Install `html-webpack-plugin` and `clean-webpack-plugin` and add to plugins array

7. Support testing with `jest`
    * `babel-core@^7.0.0-0` needs to be added. See [here](https://stackoverflow.com/questions/50620775/requires-babel-7-0-0-0-but-was-loaded-with-6-26-0).
    * Add jest config in `package.json` to mock css and transpile js
```
npm install --save-dev jest babel-jest babel-core@^7.0.0-0
```

## TODO
* HMR
* Linting, prettier etc

# Resources
https://webpack.js.org/guides/getting-started/

https://babeljs.io/docs/en/usage

https://github.com/babel/babel-loader

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
