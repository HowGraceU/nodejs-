var http = require('http');
var serialize = function (name, val, opt) {
    var pairs = [name + '=' + val];
    opt = opt || {};
    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
    if (opt.domain) pairs.push('Domain=' + opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');
    return pairs.join('; ');
}; 
http.createServer(function (req, res) {
    var headers = req.headers,
        cookie = headers.cookie,
        cookies = {};
    cookie && cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    req.cookies = cookies;
    console.log(headers, cookies);
    var val = parseInt(cookies.var);
    res.setHeader('Set-Cookie', serialize('var', ++ val));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');