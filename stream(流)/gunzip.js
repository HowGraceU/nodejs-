var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input3.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input4.txt'));

console.log("文件解压完成。");