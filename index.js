// Start
console.log("Hello World");

// Variables
let firstName = "Paul";
console.log(firstName);

// Constants
const interestRate = 0.3;
console.log(interestRate);

// Primitive Types
firstName = "Paul"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined; // undefined - not common / = '';
let secondName = null; // null - create variable to be used later/assign as null

// Objects
let person = {
    firstName: "Paul",
    age: 38,
};
console.log(person);

person.firstName = "Matilda"; // Dot Notation
person["age"] = 1; //Bracket Notation
console.log(person);

let selection = "firstName"; //Bracket Notation using variable
person[selection] = "Maia";
console.log(person);

// Arrays
let selectedColours = ["red", "blue"]; // create array
console.log(selectedColours); // log whole array

console.log(selectedColours[0]); // log selected array item at position 0

selectedColours[2] = "green"; // add to array
console.log(selectedColours);

selectedColours[2] = 1; // add to array so that it contains different types
console.log(selectedColours);

console.log(selectedColours.length); // access a property of array

// Functions
function greet() {
    console.log("Hello World");
} // !important - no trailing ; for functions

greet(); // call function

function greetWithParameter(name) {
    console.log("Hello " + name);
}
greetWithParameter(firstName); // parameter is argument at call
greetWithParameter("Matilda");

function greetWithManyParameters(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}
greetWithManyParameters(firstName, secondName); // null variable secondName
secondName = "Morgan";
greetWithManyParameters(firstName, secondName);

//Types of Functions
// function greetWithParameter(name) {
//     console.log("Hello " + name);
// }  // Performing a task

function square(number) {
    return number * number;
}
console.log(square(2)); // Calculating and returning value

// Javascript Operators - Arithmetic
let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Remained (Modulo)
console.log(x ** y); // Exponentiation - x to power of y

x = 10;
console.log(++x); //Increment first 11
x = 10;
console.log(x++); //Increment post 10 => 11
x = 10;
console.log(--x); //Decrement first 9
x = 10;
console.log(x--); //Decrement post 10 => 9

// Javascript Operators - Assignment
x = 10;
x = x + 5;
console.log(x); // long hand
x = 10;
x += 5;
console.log(x); // short hand

// Javascript Operators - Comparison
x = 1;
// Relational...
console.log(x > 0); // greater than => true
console.log(x >= 1); // greater than or equal => true
console.log(x < 1); // less than => false
console.log(x <= 1); // less than or equal => true

// Equality...
console.log(x === 1); // === = equals => true
console.log(x !== 1); // !== = not equals => false

// Javascript Operators - Equality
console.log(1 === 1); // strict equality operator => same type and value, number and 1 => true
console.log("1" === 1); // same type and value, string and 1 => fase

console.log(1 == 1); // loose equality operator => same value only => true
console.log("1" == 1); // => true
console.log(true == 1); // => true

// Javascript Operators - Ternary
let points = 110;
let type = points > 100 ? "gold" : "silver"; // var = conditon ? true : false;
console.log("Customer type", type); // gold
points = 90;
type = points > 100 ? "gold" : "silver";
console.log("Customer type", type); // silver

// Javascript Operators - Logical
console.log(true && true); // Logical AND (&&) returns TRUE if both operands are TRUE => true
console.log(true && false); // => false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Eligible", eligibleForLoan); // => true

console.log(true || true); // Logical OR (||) returns TRUE if one of operands are TRUE => true
console.log(true || false); // => true

highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan); // => true

highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan); // => false
let applicationRefused = !eligibleForLoan; // NOT operator (!) - opposite of result => true (application IS refused)
console.log("Application Refused", applicationRefused);

// Javascript Operators - Logical with Non-Booleans
console.log(false || true); // => true
console.log(false || "Paul"); // => "Paul"
console.log(false || 1); // => 1
// Falsy (false) => undefined / null / 0 / false / '' / NaN (Not a Number)
// Truthy (true) => anything NOT Falsy
console.log(false || 1 || 2); // => 1 / first Truthy is result - Short-circuiting
// example 1
let userColour = "red";
let defaultColour = "blue";
let currentColour = userColour || defaultColour;
console.log(currentColour); // => red
// example 2
userColour = "";
defaultColour = "blue";
currentColour = userColour || defaultColour;
console.log(currentColour); // => blue

// Javascript Operators - Bitwise
// 0 = 00000000
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); // Bitwise OR => // R = 00000011 3
console.log(1 & 2); // Bitwise OR => // R = 00000000 0

// Read, Write, Execute
// Read 00000100
// Read Write 00000110
// Read Write Execute 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
let myPermission2 = 0;
myPermission2 = myPermission2 | writePermission;
let message2 = myPermission2 & readPermission ? "yes" : "no";
console.log(message2);

// Operators Precedence
// PEDMAS