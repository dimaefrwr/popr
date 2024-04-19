const cars = [
    { id: 1, make: 'Toyota', year: 2001, color: 'white' },
    { id: 2, make: 'Honda', year: 2010, color: 'blue' },
    { id: 3, make: 'Ford', year: 2015, color: 'red' },
    { id: 4, make: 'Chevrolet', year: 2018, color: 'black' },
    { id: 5, make: 'BMW', year: 2020, color: 'silver' }
];

const getCars = () => cars;

const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const { make, year, color } = car;
        return `Make: ${make}, Year: ${year}, Color: ${color}.`;
    } else {
        return 'Car doesn’t exist';
    }
};
const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old`;
    } else {
        return 'Car doesn’t exist';
    }
};

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};
