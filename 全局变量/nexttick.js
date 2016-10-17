process.on('uncaughtException', function(e) {
　　console.log(e);
});
process.nextTick(function() {
　　console.log('tick');
});
process.nextTick(function() {
　　iAmAMistake();
　　console.log('tock');
});
process.nextTick(function() {
　　console.log('tick tock');
});

(function() {
	console.log(process.uptime())
	process.nextTick(function() {
		console.log('尽管第一个输出时间，这个tick还是最后输出')
	})
})()

console.log('End of 1st loop');