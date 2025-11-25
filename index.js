// Assignment1//////////////

// A.Part 1: Coding Questions (7.5 Grade):


// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// Output Example: 130
let str = "123";
let num = Number(str);
let result = num + 7;
console.log(" Answer for question 1", result);

//----------------------------------------------------------------------------------------//
// 2.Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// Input Example: 0
// Output Example: "Invalid"
let variable = 0;
if (
  variable === false ||
  variable === 0 ||
  variable === "" ||
  variable === null ||
  variable === undefined ||
  Number.isNaN(variable) ||
  variable === -0 ||
  variable === BigInt(0)
) {
  console.log("Answer for question 2", "Invalid");
}
//-------------------------------------------------------------------------------------------//

// 3.Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// Output Example:1, 3, 5, 7, 9
for (let index = 1; index <= 10; index++) {
  if (index % 2 === 0) {
    continue;
  }
  console.log("Answer for question 3", index);
}

//---------------------------------------------------------------------------------------------//

// 4.Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
//Input Example: [1, 2, 3, 4, 5]
// Output Example: [2,4]
let array = [1, 2, 3, 4, 5];
let evenNumbers = array.filter(function (num) {
  return num % 2 === 0;
});
console.log("Answer for question 4", evenNumbers);
//------------------------------------------------------------------------------------------//

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// Input Example: [1, 2, 3], [4, 5, 6]
// Output Example: [1, 2, 3, 4, 5, 6]
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log("Answer for question 5", mergedArray);
//-----------------------------------------------------------------------------------------//

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
// Input Example: 2
// Output Example: “Monday”

let dayNomber = 2;
switch (dayNomber) {
  case 1:
    console.log("Answer for question 6", "Sunday");
    break;

  case 2:
    console.log("Answer for question 6", "Monday");
    break;

  case 3:
    console.log("Answer for question 6", "Tuesday");
    break;

  case 4:
    console.log("Answer for question 6", "Wednesday");
    break;

  case 5:
    console.log("Answer for question 6", "Thursday");
    break;

  case 6:
    console.log("Answer for question 6", "Friday");
    break;

  case 7:
    console.log("Answer for question 6", "Saturday");
    break;
  default:
    break;
}
//--------------------------------------------------------------------------------------//

// 7.Create an array of strings and return their lengths using map method (0.5 Grade)
// Input: ["a", "ab", "abc"]
// Output Example: [1, 2, 3]
let arrayOfStrings = ["a", "ab", "abc"];
let lengths = arrayOfStrings.map((string) => string.length);
console.log("Answer for question 7", lengths);
//------------------------------------------------------------------------------------//

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// Input Example: 15
// Output Example: “Divisible by both”
let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("Answer for question 8", "Divisible by both");
}
//---------------------------------------------------------------------------------//

// 9.Write a function using arrow syntax to return the square of a number (0.5 Grade)
// Input Example: 5
// Output Example: 25
let square = (num) => num * num;
console.log("Answer for question 9", square(5));
//---------------------------------------------------------------------------------//

// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// Input Example: const person = {name: 'John', age: 25}
// Output Example: 'John is 25 years old'
const person = {name: 'John', age: 25}
const {name, age} = person;
console.log("Answer for question 10", `${name} is ${age} years old`);
//---------------------------------------------------------------------------------//

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// Input Example: 1, 2, 3, 4, 5
//Output Example: 15
let sum = (...args) => {
  if (args.length > 0) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  } else {
    return 0;
  }
}
console.log("Answer for question 11", sum(1,2,3,4,5));

//Another way
let sum1 = (...args) => args.reduce((a, b) => a + b,0);
console.log("Alternative Answer for question 11", sum1(1,2,3,4,5));
//---------------------------------------------------------------------------------//

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// Output Example: “Success”
const after3SecondsPromise = new Promise((resolve) => {
    setTimeout(() => {
    resolve("Success");
  }, 3000);
}).then((message) => {
  console.log("Answer for question 12", message);   
})
//---------------------------------------------------------------------------------//

// 13. Write a function to find the largest number in an array. (0.5 Grade)
// Input Example: [1, 3, 7, 2, 4]
// Output Example: 7
let array3 = [1, 3, 7, 2, 4];
let largestNumber = array3.reduce((a, b) => (a > b ? a : b));
console.log("Answer for question 13", largestNumber);

// Another way
let largestNumber1 = Math.max(...array3);
console.log("Alternative Answer for question 13", largestNumber1);
//---------------------------------------------------------------------------------//


// 14.Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// Input Example:{name: "John", age: 30}
// Output Example: ["name", "age"]

let object = {name: "John", age: 30};
console.log("Answer for question 14", Object.keys(object));
//---------------------------------------------------------------------------------//

// 15.Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// Input: "The quick brown fox"
// Output: ["The", "quick", "brown", "fox"]

let string = "The quick brown fox";
console.log("Answer for question 15", string.split(" "));

//==================================================================================================//

// B. Part 2: Essay Questions (2.5 Grade):

// 1.What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// forEach:
//forEach is a method that belongs to the Array prototype. It executes a callback function you provide once for each element in an array.
//Key Characteristics:
//It's an Array Method: It can only be called on arrays (e.g., myArray.forEach(...)).
//Uses a Callback Function: You pass a function that receives the element, its index, and the original array as arguments.
//Cannot Be Stopped: You cannot use break to exit the loop or continue to skip an iteration. The loop will always run to completion for every element.
//Not Great for async/await: It does not wait for promises. If you use an async function as the callback, forEach will execute all of them in parallel without waiting for any to finish.
//for...of:
// The for...of loop is a more modern iteration statement introduced in ES6. It creates a loop that can iterate over iterable objects (including Array, String, Map, Set, etc.).
// Key Characteristics:
// It's a Loop Statement: It's a general-purpose loop, not a method tied to arrays.
// Direct Access to Elements: It directly gives you the value of the element for each iteration, not the index.
// Can Be Stopped: You have full control over the loop and can use break to exit early or continue to skip an iteration.
// // Excellent for async/await: It works perfectly with asynchronous code. The loop will pause and wait for an await-ed promise to resolve before moving to the next iteration.
// When to use forEach:
// You want to perform a simple, synchronous operation on every element of an array.
// You don't need to break out of the loop.
// When to use for...of:
// You need to break out of a loop or skip iterations.
// You are working with async/await operations inside the loop and need them to complete in sequence.
// You are iterating over something that isn't an array, like a String, Set, or Map.
//------------------------------------------------------------------------------------------------//

// 2.What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
//The Temporal Dead Zone is a behavior specific to variables declared with let and const. Like var, the declarations for let and const are also hoisted to the top of their block scope. However, unlike var, they are not initialized with undefined.
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (either the global scope or a function scope) by the JavaScript engine before the code is executed.
//-----------------------------------------------------------------------------------------------//

// 3.What are the main differences between == and ===? (0.5 Grade)
// The main difference is that == (loose equality) performs type coercion, while === (strict equality) does not.
// `==` (Loose Equality):
// - Compares two values for equality after converting both values to a common type.
// - Example: `5 == "5"` is true because the string "5" is converted to the number 5 before the comparison.
//
// `===` (Strict Equality):
// - Compares two values for equality without any type conversion. It checks if both the value and the type are identical.
// - Example: `5 === "5"` is false because one is a number and the other is a string.
//-------------------------------------------------------------------------------------------------//


// 4.Explain how try-catch works and why it is important in async operations. (0.5 Grade)
// The `try...catch` statement allows you to handle errors gracefully.
//
// How it works:
// 1. `try` block: You place code that might throw an error inside this block.
// 2. `catch` block: If an error occurs in the `try` block, the execution immediately jumps to the `catch` block, which receives an error object. This prevents the script from crashing.
// 3. `finally` block (optional): This block runs after `try` and `catch`, regardless of whether an error occurred.
//
// Importance in Async Operations:
// Asynchronous operations (like API calls with `fetch`) can fail for many reasons (e.g., network issues, server errors). The `async/await` syntax makes async code look synchronous. When an awaited promise is rejected, it throws an error.

//----------------------------------------------------------------------------------------------//


// 5.What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type Conversion (Explicit): This is manual process of converting a value from one type to another using built-in functions.
// Example:
// let str = "123";
// let num = Number(str); // Explicitly converting a string to a number.
//
// Type Coercion (Implicit): This is the automatic conversion of values from one type to another, performed by the JS engine during operations.
// Example:
// let result = 5 + "5"; // The number 5 is implicitly coerced to a string, resulting in "55".

//-----------------------------------------------End--------------------------------------------------//