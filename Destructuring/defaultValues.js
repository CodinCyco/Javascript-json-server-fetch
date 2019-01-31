const person = {
    name: 'Abid Saifeddine',
    country: 'Tunisia'
};

// Assign default value of 25 to age if undefined
const { name, country, age = 23 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);