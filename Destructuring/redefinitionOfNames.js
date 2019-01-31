const person = {
    name: 'Saifeddine',
    country: 'Tunisia'
};

// Assign default value of 25 to years if age key is undefined
const { name: fullname, country: place, age: years = 23 } = person;

// Here I am using ES6 template literals
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);