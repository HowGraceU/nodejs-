var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

http.createServer(function (req, res) {
    var urlParse = url.parse(req.url),
        pathname = urlParse.pathname,
        p = path.join(__dirname, pathname);
    console.log(req.headers);

    fs.stat(p, function (err, stat){
        console.log(stat);
        var lastModified = stat.mtime.toUTCString(); 
        if(lastModified === req.headers['if-modified-since']){
            res.writeHead(304, 'Not Modified');
            res.end();
        } else {
            fs.readFile(p, function (err, file) {
                if (err) {
                    res.writeHead(404);
                    res.end('找不到文件- -');
                    return;
                }
                res.setHeader('Last-Modified', lastModified);
                res.writeHead(200, 'Ok');
                res.end(file); 
            });
        }
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');