var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path =require('path');
var app = express();
var socketapp = express();

var http = require('http');
var data_one = require('./data1.json');
const route = require('./routes/route') ;

const server = http.Server(socketapp);
var io = require('socket.io')(server);


mongoose.connect('mongodb://mongo:27017/waterdashboard');

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in database'+err);
    }
})

const port = 3000;


app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("success")
});

app.listen(port,()=>{
    console.log("Server started at port "+port)
});

io.on('connection', function(socket){
    console.log("socket connection established");
        socket.emit('test event', data_one);
})

server.listen(3005, ()=>{
    console.log("listenning on port 3005");
})

