import express from 'express';
import path from 'path';
const webpack = require('webpack');
const webpackconfig = require('../webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");


const port = 3000;
const app = express();


app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../files')))

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler,{});
app.use(wpmw);


/* This make listen to port 3000 continuously */
app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log('Example app listening on port 3000!')
    }
});



// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });

