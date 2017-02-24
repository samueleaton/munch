var webpack = require('webpack');
var path = require('path');
var process = require('process');
var exec = require('child_process').execSync;

var munchVersion = exec('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();

var env = process.env.NODE_ENV || 'dev';
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod')
  env = 'prod';

var sourceFile = path.join(__dirname, 'src/index.js');
var destFolder = path.join(__dirname, 'dist/');

var entry = sourceFile;
var filename = 'munch.min.js';

if (env === 'test') {
  destFolder = path.join(__dirname, 'test/');
  entry = './test/test.js';
}
else if (env === 'demo') {
  sourceFile = path.join(__dirname, 'demo/src/index.js');
  destFolder = path.join(__dirname, 'demo/');
  entry = sourceFile;
  filename = 'demo.min.js';
}

console.log('\n~~~WEBPACK~~~~~~~~~~~~~~');
console.log('env: ', env);
console.log('Source File: ', sourceFile);
console.log('Destination Folder: ', destFolder);
console.log('Output File: ', filename);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~\n');

var config = {
  entry: entry,
  output: {
    path: destFolder,
    filename: filename,
    library: 'munch'
  },
  resolve: {
    alias: {'~': path.resolve(__dirname)}
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: "json-loader" },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)|(min\.js)/,
      //   loader: 'eslint-loader',
      //   options: {
      //     configFile: './.eslintrc.json',
      //     emitWarning: true,
      //     emitError: true,
      //     failOnError: true,
      //     cache: false
      //   },
      // }
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: { warnings: false }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env),
        'MUNCH_VERSION': JSON.stringify(munchVersion)
      }
    })
  ]
};

if (env === 'test')
  config.target = 'node';

module.exports = config;
