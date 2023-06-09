const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
        return;
    } else if (req.url === '/about') {
        // BLOCKING CODE !!!!
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i}${j}`);
            }
        }
        res.end('About Page');
        return;
    } else {
        res.end('Error');
        return;
    }
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000....');
})