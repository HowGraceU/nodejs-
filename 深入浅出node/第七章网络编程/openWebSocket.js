var http = require('http'),
	crypto = require('crypto');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
});
server.listen(12010);
// 在收ڟupgrade请求ࢫǈߢኮ客户端ሎႹൎ换ၹᅱ
server.on('upgrade', function (req, socket, upgradeHead) {
	var head = new Buffer(upgradeHead.length);
	upgradeHead.copy(head);
	var key = req.headers['sec-websocket-key'];
	var shasum = crypto.createHash('sha1');
	key = shasum.update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest('base64');
	var headers = [
		'HTTP/1.1 101 Switching Protocols',
		'Upgrade: websocket',
		'Connection: Upgrade',
		'Sec-WebSocket-Accept: ' + key
	];
	// ඟ数据૬न发ໃ
	socket.setNoDelay(true);
	socket.write(headers.concat('', '').join('\r\n'));
	// 建૬服务器端WebSocket૶接
	var websocket = new WebSocket();
	websocket.setSocket(socket);
});