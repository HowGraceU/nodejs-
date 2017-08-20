var http = require('http');
var sessions = {};
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
    cookie && cookie.split(';').forEach(function (Cookie) {
        var parts = Cookie.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    req.cookies = cookies;

    var EXPIRES = 20 * 60 * 1000;
    var generate = function () {
        var session = {};
        session.id = (new Date()).getTime() + Math.random();
        session.cookie = {
            expire: (new Date()).getTime() + EXPIRES
        };
        sessions[session.id] = session;
        return session;
    };

    var key = 'session_id';
    var id = cookies[key];
    if (!id) {
        req.session = generate();
    } else {
        var session = sessions[id];
        if (session) {
            if (session.cookie.expire > (new Date()).getTime()) {
                session.cookie.expire = (new Date()).getTime() + EXPIRES;
                req.session = session;
            } else {
                delete sessions[id];
                req.session = generate();
            }
        } else {
            req.session = generate();
        }
    }

    res.setHeader('Set-Cookie', serialize('session_id', req.session.id));
    console.log(sessions);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');