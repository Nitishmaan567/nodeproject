 const port = 3000;

const http = require('http');

const server = http.createServer( function(req, res){res.end("Hello Bro! What's Up")});

server.listen(port, function() {
    console.log('server running at http://localhost:${port}/');
})