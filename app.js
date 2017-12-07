//importing modules
var express = require('express');
var mongiise = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port #
const port = 3000;

//testing route (server)
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:' +port);
});