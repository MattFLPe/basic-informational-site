const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    fs.readFile(filePath, function(err, data) {
        if (err) {
            fs.readFile(path.join(__dirname, '404.html'), function(error, errorPage) {
                if (error) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end('404 not found');
                };
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(errorPage);
                return res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        }
    });
}).listen(8080);
