## About
Get started with running your web applications with webpack. Webpack provides you with production and a development server (realtime updates). This project is just a template that shows how to setup a very basic webpack.config.js file to get any web application going. You can use this project as a template and extend it to build all kinds of angular or react web applications.

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


### Expected Output
This is a simple application. Upon run, by default webpack-dev-server will host your dist/index.html file on localhost:8080. If you hit this page in the browser, you will see the result of app/index.html printing 'Hello Webpack' in your browser and dist/index_bundle.js script printing 'Hello Webapck' in your console.

### Notes
Note server.js exists but is not used in this template. Babel loaded used in this template is also not needed yet. 
