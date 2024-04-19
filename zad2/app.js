const http = require('http');
const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/' && req.method === 'GET') {
        handleHome(res);
    } else if (req.url === '/add-car' && req.method === 'GET') {
        handleAddCar(res);
    } else if (req.url === '/car' && req.method === 'GET') {
        handleCar(res);
    } else {
        handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
