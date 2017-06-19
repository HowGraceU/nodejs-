// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 订阅
eventEmitter.on("event1", function (message) {
 console.log(message);
});
// 发布
eventEmitter.emit('event1', "I am message!"); 