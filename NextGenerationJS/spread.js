const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age : 28
};

console.log(newPerson);