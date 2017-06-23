var fs = require('fs'),
	rs2 = fs.createReadStream('test.md',  {highWaterMark: 11}),
	chunks = [],
	size = 0;

rs2.on("data", function (chunk){
	chunks.push(chunk);
	size += chunk.length;
	console.log('data');
});
rs2.on("end", function () {
	var buf = Buffer.concat(chunks, size),
		str = buf.toString(); 
	console.log('end', str);
}); 