const http = require('http');
const static = require('node-static');
const file = new static.Server('.');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8380);

console.log('Server running on port 3080');
