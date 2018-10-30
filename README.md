
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

## TODO
* HMR
* CSS preprocessing
* Linting, prettier etc

# Resources
https://webpack.js.org/guides/getting-started/

https://babeljs.io/docs/en/usage

https://github.com/babel/babel-loader

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
