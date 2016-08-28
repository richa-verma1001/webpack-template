## About
Get started with running your web applications with webpack. Webpack provides you with production and a development server (realtime updates). This project is just a template that shows how to setup a very basic webpack.config.js file to get any web application going. You can use this project as a template and extend it to build all kinds of angular or react web applications.

### Template includes
+ Transpiling JS using babel and babel preset for es2015
+ LESS conversion into CSS
+ JSON support to include JSOn files in JS

### Run application
````
npm install
npm run production   [Run production via webpack -p]

or
npm install
npm run start  [Run devmode via webpack-dev-server]
````

### Description
Running this application will be processed in the following order -
1. The webpack server is kicked off, reading from the webpack configuration
2. webpack will read the configured application entry listed as
````
entry: [
  './app/index.js'
],
````
and compile that into the suggested output
````
output: {
  path: __dirname + '/dist',
  filename: "index_bundle.js"
}
````
3. The 'HtmlWebpackPlugin' being used in the config, is a npm package that is included in dependencies and helps with injecting the build output(dist/index_bundle.js) into the base index.html file that is then served by webpack in the browser.

4. babel6 is used to transpile your JS files. To work well with webpack, the babel-preset-es2015 needs to be set as well. This will allow features like inclusion of import statements inside your JS

5. css loaders and related packges are needed to convert your .scss or .less files into css.

6. Finally, a json loader is used to read your config from a json file


### Expected Output
This is a simple application. Upon run, by default webpack-dev-server will host your dist/index.html file on localhost:8080. If you hit this page in the browser, you will see the result of app/index.html printing 'Hello Webpack' in your browser and dist/index_bundle.js script printing 'Hello Webapck' in your console.

### Notes
+ Note server.js exists but is not used in this template.
+ To use babel6 with webpack, babel preset is needed for imports to work in JS files. Check .babelrc file.


### References
+ https://www.youtube.com/watch?v=v3PNhMk4MWg
