var http = require('http');

var options = {
	hostname: '127.0.0.1',
	port: 1337,
	path: '/',
	method: 'GET'
};
var req = http.request(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	var body = '';
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log(chunk);
	});
	res.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
});
req.write('jqx'); 
req.end(); 