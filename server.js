const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = './';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.StatusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.StatusCode = 200;
            break;
        default:
            path += '404.html'
            res.StatusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));