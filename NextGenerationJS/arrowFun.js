// function printMyName(name) {
//     console.log(name);
// }
// printMyName("Max");

const printMyName = (name) => {
    console.log(name);
}
printMyName('Max');

//if no. of arguments is 1 then only we can omit the parenthesis around the args
const printYourName = name => {
    console.log(name);
}
printYourName('Manu');

//You need parenthesis if no. of arguments is 0 or more than or equal to 2

const multiply = (number) => {
    return number*2;
}
console.log(multiply(4))

//or it can be done as below as it has only one line body
const multiplyNew = number => number*2;
console.log(multiplyNew(5));