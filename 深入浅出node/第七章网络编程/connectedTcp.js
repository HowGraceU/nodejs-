//客户端会话
// var net = require('net');
// var client = net.connect({port: 8124}, function () { //'connect' listener
// 	console.log('client connected');
// 	client.write('world!\r\n');
// });
// client.on('data', function (data) {
// 	console.log(data.toString());
// 	client.end();
// });
// client.on('end', function () {
// 	console.log('client disconnected');
// });


var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('连接到服务器！');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('断开与服务器的连接');
});
client.on('timeout', function() { 
   console.log('timeout');
});