const sayHello = () => alert('Hello world!');
sayHello();

// Task 1

const element1 = 'Hello';
const element2 = 'World';

console.log(`${element1}, ${element2}`);

// Task 2

const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 5));

// Task 3 

const average = (...args) => {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    })
    return sum / args.length;
};

console.log(average(1, 3));

//Task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Task 5

const elements = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = elements;
console.log(`${firstname} ${lastname}`);