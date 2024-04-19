const express = require('express');
const router = express.Router();

let cars = [];
let nextId = 1;

router.get('/', (req, res) => {
  if (cars.length === 0) {
    res.send('No cars has been found.');
  } else {
    const car = cars[cars.length - 1];
    const carHtml = `
      <h2>Last added car</h2>
      <div>
        <div><span class="bold">Make:</span> ${car.make}</div>
        <div><span class="bold">Model:</span> ${car.model}</div>
        <div><span class="bold">Year:</span> ${car.year}</div>
        <div><span class="bold">Color:</span> ${car.color}</div>
      </div>
    `;
    res.send(carHtml);
  }
});

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/add-car.html'));
});

router.post('/add', (req, res) => {
  const { make, model, year, color } = req.body;
  const newCar = { id: nextId++, make, model, year, color };
  cars.push(newCar);
  res.redirect('/car');
});

router.get('/list', (req, res) => {
  if (cars.length === 0) {
    res.send('No cars has been found.');
  } else {
    const carsHtml = `
      <h2>Cars</h2>
      <ul>
        ${cars.map(car => `<li><p><span class="bold">Make:</span> ${car.make}</p><p><span class="bold">Model:</span> ${car.model}</p><p><span class="bold">Year:</span> ${car.year}</p><p><span class="bold">Color:</span> ${car.color}</p></li>`).join('')}
      </ul>
    `;
    res.send(carsHtml);
  }
});

module.exports = router;
