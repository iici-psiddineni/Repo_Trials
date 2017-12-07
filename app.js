//importing modules
var express = require('express');
var mongiise = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//port #
const port = 3000;

//adding middleware - cors: for using multiple ports
app.use(cors());

//adding middleware - bodyparser: for parsing JSON
app.use(bodyparser.json());

//adding middleware - static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//testing route (server)
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:' +port);
});