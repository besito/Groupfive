const http = require('http');
const fs = require ('fs');
const_ = require ('lodash');
const express = require('express');
const mongoose = require('mongoose');
const Groupfive = require('./models/User');



//express app
const app = express();

//connect mongodb database
const dbURI = 'mongodb+srv://groupfive:group12345@cluster0.sw7bhpr.mongodb.net/groupfive?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

.then((result) => app.listen(3001))
.catch((err) => console.log(err));

//register view engine
app.use(express.static('public'));
app.use(morgan('dev'));






const server = http.createServer((req, res) => {
console.log(req.url, req.method);

// SET HEADER CONTENT TYPE
res.setHeader('Content-Type', 'text/plain')

//res.write('<head><link rel="stylesheet"href="#></head>');
res.write('Event Tickets');
res.write('Movies');
res.write('Comedy Show');
res.write('Musical Consert');
res.write('Art Exhibition');


res.end();

res.end();
});


server.listen(3001, 'localhost', () => {
    console.log('listening for requests on port 3001');
});

