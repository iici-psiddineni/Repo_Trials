//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// connect to mongo DB
mongoose.connect('mongodb://localhost:27017/providerlist');

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017')
});

mongoose.connection.on('error', (err)=>{
    if (err){
        console.log('Error in database connection: ' + err);
    }
});

//port #
const port = 3000;

//adding middleware - cors: for using multiple ports
app.use(cors());

//bodyparser: for parsing JSON
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//testing route (server)
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:' +port);
});