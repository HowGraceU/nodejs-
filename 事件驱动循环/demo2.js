//事件监听的方法
var events = require('events'),
	myEvent = new events.EventEmitter();

//为指定事件添加一个监听器到监听器数组的尾部。
myEvent.addListener('a', function(){
	console.log('addListener events a')
})

//为指定事件注册一个监听器（尾部）
myEvent.on('a', function(){
	console.log('on events a')
})

myEvent.addListener('a', function(){
	console.log('addListener events a 2')
})

//once触发一次事件后解除绑定
myEvent.once('a', function(){
	console.log('once events a')
})

myEvent.emit('a')
myEvent.emit('a')

//移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
var myEvent2 = new events.EventEmitter();
function b(string){
	console.log('vents b')
}

//只能remove一次绑定
myEvent2.addListener('b', b)

myEvent2.addListener('b', b)

myEvent2.on('b', b)

myEvent2.emit('b')

myEvent2.removeListener('b', b)
// myEvent2.removeListener('b', b)
// myEvent2.removeListener('b', b)

myEvent2.emit('b')

//移除所有的事件绑定
myEvent2.removeAllListeners('b')

myEvent2.emit('b')

//一般情况下 EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
myEvent2.setMaxListeners(2)

myEvent2.addListener('b', function(){
	console.log('setMaxListeners 2')
})
myEvent2.addListener('b', function(){
	console.log('setMaxListeners 2')
})
//报错
// myEvent2.addListener('b', function(){
// 	console.log('setMaxListeners 2')
// })

myEvent2.emit('b')

//listeners方法返回事件监听数组
console.log(myEvent2.listeners('b'))

myEvent2.listeners('b')[0]()

//emit方法按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
function c(string){
	console.log(string)
}

myEvent2.addListener('c', c)

console.log(myEvent2.emit('c', 'emit'), myEvent2.emit('noThisEvent'))

//类方法listenerCount返回指定事件的监听器数量。
console.log(events.EventEmitter.listenerCount(myEvent2, 'b'), myEvent2.listeners('b'))

//EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
//当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
var myEvent3 = new events.EventEmitter();
myEvent3.on('error', function(){
	console.log('error')
})
myEvent3.emit('error')

//该事件在添加新监听器时被触发。
myEvent3.on('newListener', function(event, callback){
	console.log(event, callback)
})

myEvent3.on('b', b)

//从指定监听器数组中删除一个监听器。
myEvent3.on('removeListener', function(event, callback){
	console.log(event, callback)
})

myEvent3.removeListener('b', b)

myEvent3.removeAllListeners()