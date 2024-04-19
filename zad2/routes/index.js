const fs = require('fs');
const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderCarPage } = require('../views/car');
const { renderPage: renderAddCarPage } = require('../views/add-car');

const handleHome = (res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(renderHomePage());
    res.end();
};

const handleAddCar = (res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(renderAddCarPage());
    res.end();
};

const handleCar = (res) => {
    fs.readFile('formData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('404 Page Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(renderCarPage(data));
            res.end();
        }
    });
};

const handlePageNotFound = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Page Not Found');
    res.end();
};

module.exports = {
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound
};
