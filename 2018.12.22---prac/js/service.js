var http  = require('http');
http.createServer(function (re,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello,world\n');

}).listen(8888,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');
//
// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });