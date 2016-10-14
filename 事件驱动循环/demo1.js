//事件监听基本使用
var events = require('events')

//创建一个 EventEmitter（事件发射器？） 对象
var myEvent = new events.EventEmitter()

myEvent.on('connection', function(){
	console.log('连接成功 1')

	myEvent.emit('data_received')
})

myEvent.on('data_received', function(){
	console.log('数据接收成功 2')
})

myEvent.emit('connection')

console.log('程序执行完毕 3')