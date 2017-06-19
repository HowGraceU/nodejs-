process.nextTick(function () {
 console.log('nextTickჽ׿执行1 1');
});
process.nextTick(function () {
 console.log('nextTickჽ׿执行2 2');
});
// 加入ଇ߲setImmediate()的回调函数
setImmediate(function () {
 console.log('setImmediateჽ׿执行1 3');
 // 进入ူْ循环
 process.nextTick(function () {
 	console.log('ഽ势֭入 4');		
 });
});
setImmediate(function () {
 console.log('setImmediateჽ׿执行2 5');
});
console.log('正常执行'); 

// 预期执行结果
// 正常执行
// nextTickჽ׿执行1
// nextTickჽ׿执行2
// setImmediateჽ׿执行1
// ഽ势֭入
// setImmediateჽ׿执行2 