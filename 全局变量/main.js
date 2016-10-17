function a() {
	console.trace(1)
}

a()

//文件路径
console.log(__filename)
console.log(__dirname)

//console调用
var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");

setTimeout(function(){
	console.timeEnd('获取数据');
}, 200)