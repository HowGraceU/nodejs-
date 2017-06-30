var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
	// console.log(req.query, req.body);
	req.on('data', function (chunk) {
		console.log(chunk, 'data')
	})
	.on('chunk', function (a) {
		console.log(a, '2chunk')
	});
}).listen(1337, '127.0.0.1')
.on('data', function (a) {
	console.log(a, '2data')
})
.on('chunk', function (a) {
	console.log(a, '2chunk')
});
console.log('Server running at http://127.0.0.1:1337/'); 