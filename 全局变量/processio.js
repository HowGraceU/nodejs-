//保存控制台不关闭
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('data: ' + chunk);
  process.exit()
});

//关闭时触发
process.on('exit', function () {
	process.stdout.write('exit')
})

process.on('beforeExit', function () {
	process.stdout.write('beforeExit')
})

//使用ctrl+c退出时
process.on('SIGINT', function () { //SIGINT这个信号是系统默认信号，代表信号中断，就是ctrl+c
  console.log('Got SIGINT.ctrl+c被捕获，不触发，请使用ctrl+d');
});

// process.kill(process.pid)

//关闭时触发？不明用途
process.stdin.on('end', function () {
  process.stdout.write('end');
});