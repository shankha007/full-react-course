const person = {
    name : 'Max'
};

const secondPerson = person; // just copied the pointer. secondPerson is pointing to person, did not copy the contents of person
console.log(secondPerson);
person.name = 'Manu'
console.log(secondPerson);

//for copying the contents of person in secondPerson use 'spread' operator
// const secondPerson = {
//    ...person
// }