const http = require('http');
const { getCars, getCarInformation, getCarAge } = require('./cars');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(getHTMLDocumentStart()); 
    res.write('<body>');

    const id = 1;
    res.write(`<p>${getCarInformation(id)}</p>`);
    res.write(`<p>${getCarAge(id)}</p>`);
    res.write('</body>'); 
    res.write(getHTMLDocumentEnd()); 
    res.end(); 
});


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
