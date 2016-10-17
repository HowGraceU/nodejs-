var fs = require('fs')
var buf = new Buffer(1024)

fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");

	console.log("准备读取文件");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buffer) {
		console.log(bytes, buffer)
		console.log("读取文件完成，得到数据：" + buffer.slice(0, bytes).toString());

		console.log('准备写入数据')
		//第一种方法会改变文件的编码？
		// fs.write(fd, 'jqx', 2, 'utf-8', function(err, a, b){
		// 	console.log(a, b)
		// })
		//a为bytes，b为写入的数据（字符串或者Buffer）
		fs.write(fd, new Buffer('jqx'), 0, 3, 3, function(err, a ,b) {
			console.log(a, b)
			console.log('数据写入成功')

			fs.close(fd, function() {
				console.log('文件已关闭')
			})
		})


	})

})