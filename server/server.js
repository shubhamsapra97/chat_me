const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const http = require('http');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const randomString = require('randomstring');

mongoose.Promise = global.Promise;
var uri = 'mongodb://shubham:Shubham%4025@ds261616.mlab.com:61616/chat_me';
mongoose.connect(uri,
    { useNewUrlParser: true },
    function(error) {
        console.log(`ERRORS in connecting to DB: ${error}`);
    }
);

const port = process.env.PORT || 5000;
var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({
    extended: true
}));
const publicPath = path.join(__dirname,'../public');
app.use('/public', express.static('public'));
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/login',(req,res) => {
    console.log("login req received");
});

server.listen(port,()=>{
   console.log(`Server is up on port ${port}`); 
});