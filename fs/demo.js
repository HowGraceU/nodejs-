var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
	if(err){
		//不输出err的话这里得到undefined的data
		return console.error(err)
	}

	console.log('异步读：' + data)
})

console.log('同步读：' + fs.readFileSync('input.txt'))

// 异步打开文件
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log(fd);
  fd = 'jqx'
  console.log(fd);
});

//获取文件信息
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});

//写入数据
fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
    console.log("异步写入文件: " + fs.readFileSync('input.txt'));
});

console.log('程序执行完毕')