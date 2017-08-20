var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var urlParse = url.parse(req.url),
        pathname = urlParse.pathname,
        queryObj = querystring.parse(url.parse(req.url).query),
        p = path.join(__dirname, pathname);
    console.log(urlParse, p, queryObj);
    fs.readFile(p, function (err, file) {
        if (err) {
            res.writeHead(404);
            res.end('找不到文件- -');
            return;
        }
        res.writeHead(304, 'Not Modified');
        res.end();
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');