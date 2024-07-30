// Problem 1: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

var person = {
    name: "Hassan",
    age: 33,
    profession: "Service Holder"
}

let {name, age} =person; // Destructuring



// Problem 2:  Create a module that exports a function to calculate the area of a circle and import it into another file.
// Area of Circle = πr2

 let AreaOfCircle = function (radius){
    return Math.PI * radius * radius;
}

console.log(AreaOfCircle(1));
module.exports = AreaOfCircle;



// Problem 3: Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height; 
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangleOne = new Rectangle(5, 10);



// Problem 4: Create a class Person with a getter and setter for the fullName property. 

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName; 
    }

    get fullName() {
        return `${this.firstName } ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let personOne = new Person('Rakibul', 'Hassan');

console.log(personOne.fullName);



// Problem 5: Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }
};

const circle = new Circle(5); 



// Problem 6: Create an object with computed property names based on variables.
const name1 = 'firstName';
const name2 = 'lastName';

let persontwo = {
    [name1] : 'Rakibul',
    [name2] : 'Hassan',
    age: 33,

    getFullName (){
        return`${this[name1]} ${this[name2]}`
    }
}



// Problem 7: Create a base class Animal and a derived class Dog that inherits from Animal.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}

const newDog = new Dog('Tommy', 15, 'Husky');

console.log(newDog);




