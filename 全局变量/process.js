process.on('exit', function(code) {
	setTimeout(function() {
		console.log('改代码不会执行')
	}, 0)

	console.log('退出码：', code)
})

process.on('beforeExit', function(code) {
	console.log('退出前 退出码：', code)
})

process.on('uncaughtException', function(err) {
	console.log('异常捕获，程序停止了！', err)
})

//process的属性
console.log('node实例版本号',process.version)
console.log('node实例版本号和依赖',process.versions)
console.log('列举node运行的操作系统的环境，只会显示内核相关的信息',process.platform)
console.log('程序运行了多少时间',process.uptime())
console.log('获取进程id',process.pid)
console.log('设置进程名称',process.title)
process.title = 'jinqixiao'
console.log('设置进程名称',process.title)
console.log('当前node进程的执行路径',process.execPath)
console.log('当前工作目录',process.cwd())
console.log('node进程内存的使用情况，rss代表ram的使用情况，vsize代表总内存的使用大小，包括ram和swap,process.heapTotal,process.heapUsed',process.memoryUsage())

// 输出到终端和console.log一样
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

console.log(a)

console.log('程序执行结束')