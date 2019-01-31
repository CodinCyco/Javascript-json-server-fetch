let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};


({ firstname, lastname } = student);


console.log(firstname, lastname, country);