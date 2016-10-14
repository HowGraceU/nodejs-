//但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
//创建buffer方法有3种
//方法1
var buf = new Buffer(10)

console.log(buf)
//方法2
buf = new Buffer([10, 20, 30])

console.log(buf, buf[0], buf[1])
//方法3
buf = new Buffer("www.runoob.com", "utf-8")

console.log(buf)

buf = new Buffer(["www.runoob.com", "www.baidu.com", "www.sina.com"], "utf-8")

console.log(buf, buf[0], buf[1])

//写入node缓冲区
buf = new Buffer(256);
for(var i = 0; i < 10; i++){
	console.log(i, buf[i])
}
len = buf.write("www.runoob.com");
for(var i = 0; i < 256; i++){
	console.log(i, buf[i])
}

console.log("写入字节数 : "+  len);

//从缓冲区读取数据
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 5))
console.log(buf.toString('utf8'))
console.log(buf.toString(undefined, 0, 5))

//Buffer转为json
buf = new Buffer('www.runoob.com')
for(var i = 0; i < 14; i++){
	console.log(i, buf[i])
}

json = buf.toJSON(buf)
console.log(buf, json)

//合并缓冲区
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 内容: " + buffer3.toString());

//缓冲区比较
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
var equal = buffer1.equals(buffer2);

console.log('进行的是前面减后面的过程' + result)

//缓冲区拷贝
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(10);
buffer1.copy(buffer2, 2, 0, 3);
var buffer3 = new Buffer(buffer1)
// targetBuffer - 要拷贝到的 Buffer 对象。
// targetStart - 数字, 可选, 拷贝到目标第几个, 默认: 0
// sourceStart - 数字, 可选, 从第几个开始拷贝, 默认: 0
// sourceEnd - 数字, 可选, 拷贝到哪结束, 默认: buffer.length
console.log(buffer2, buffer3);

//缓冲区裁剪, 返回一个裁剪后的buffer
console.log(buffer2.slice(2, 5), buffer2)

//缓冲区的长度
console.log(buffer2.length)

//缓冲区填充
// buf.fill(value[, offset][, end])
// 使用指定的 value 来填充这个 buffer。如果没有指定 offset (默认是 0) 并且 end (默认是 buffer.length) ，将会填充整个buffer。
console.log(buffer1)

buffer1 = new Buffer(30)
buffer1.fill(1, 1, buffer1.length - 1)

console.log(buffer1)