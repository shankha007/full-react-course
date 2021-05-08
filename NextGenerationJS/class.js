class Human {
    constructor() {
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}
// In ES7 constructor call can be replaced by 
// myProperty = 'value'
// and methods can be written as
// myMethod = () -> {...}

class Person extends Human {
    constructor() {
        super(); //This is mandatory
        this.name = 'Max';
        this.gender = 'male'; // as extended gender variable can be accessed from this class
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();