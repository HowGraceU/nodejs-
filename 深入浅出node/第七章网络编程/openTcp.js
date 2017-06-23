// var net = require('net');
// var server = net.createServer(function(socket) {
// 	// socket.on('data', function (data) {
// 	// 	socket.write("你好");
// 	// });
// 	socket.on('end', function() {
// 		console.log('连接断开');
// 	});
// 	// socket.on('error', function (a) {
// 	// 	console.log('连接断开', a);
// 	// });
// 	socket.write('node.js示例\n');
// 	socket.pipe(socket);
// });
// server.listen(8080, function() { 
//   console.log('server is listening');
// });


// var net = require('net');
// var server = net.createServer(function(socket) {
// 	socket.on('end', function() {
// 		console.log('连接断开');
// 	});
// 	socket.write('node.js示例\n');
// 	socket.pipe(socket);
// });
// server.listen(8080, function() { 
//   console.log('server is listening');
// });

var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   connection.on('end', function() {
      console.log('客户端关闭连接');
   });
   connection.on('timeout', function() { 
	   console.log('timeout');
	});
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
server.listen(8080, function(){
	console.log(11111111111)
});