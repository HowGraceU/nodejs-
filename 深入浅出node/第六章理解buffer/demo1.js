var fs = require('fs');
var rs = fs.createReadStream('test.md');
var data = '';
rs.on("data", function (chunk){
	console.log('data');
	data += chunk;
});
rs.on("end", function () {
	console.log('end', data);
	data = '';
	var rs2 = fs.createReadStream('test.md',  {highWaterMark: 11});
	rs2.on("data", function (chunk){
		console.log('data');
		data += chunk;
	});
	rs2.on("end", function () {
		console.log('end', data);
	}); 
}); 