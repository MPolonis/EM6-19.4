'use strict';

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

// Task 1

var element1 = 'Hello';
var element2 = 'World';

console.log(element1 + ', ' + element2);

// Task 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5, 5));

// Task 3 

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};
console.log(average(1, 3));

//Task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Task 5

var elements = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = elements[2],
    lastname = elements[4];

console.log(firstname + ' ' + lastname);
