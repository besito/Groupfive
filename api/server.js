const http = require('http');
const fs = require ('fs');
const_ = require ('lodash');
const server = http.createServer((req, res) => {
console.log(req.url, req.method);

// SET HEADER CONTENT TYPE
res.setHeader('Content-Type', 'text/plain');

//res.write('<head><link rel="stylesheet"href="#></head>');
res.write('Event Tickets');
res.write('Movies');
res.write('Comedy Show');
res.write('Musical Consert');
res.write('Art Exhibition');


res.end();
});


server.listen(3001, 'localhost', () => {
    console.log('listening for requests on port 3001');
});

