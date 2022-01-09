console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return`Hello, ${name}!`;  // returns concatented sting
}
// Remember to call the function to test
console.log("this should say 'hello, mydude!'", helloName('mydude')); //testing function

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  //this one was already in my notes from the videos!
  let answer = firstNumber + secondNumber; //adds numbers input from argument
  return answer;
  // return firstNumber + secondNumber;
}

console.log("the answer is:", addNumbers(1, 1));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  let answer = firstNumber * secondNumber * thirdNumber; //adds numbers input from argument
  return answer;
}

console.log("the answer is:", multiplyThree(1, 1, 1)); //testing function

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){ //determins if input from argument is above 0/ positive
    return true;
  }
  else { //catches all cases that dont fit the above parameter
    return false;
  }
}

console.log(isPositive(-1)); //tested here before noticing the additional checks below
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );  //testing function with different arguments
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length - 1 >= 0){ //checks if the array length is atleast 1
    return array[array.length - 1]
  }
  else if (array.length - 1 < 0){ //checks if array length is less than 1 meanng it would be empty
    // couldnt figure out how to make the array name be printed
    //tried using array.name also tried standard comma concatentaion
    console.log(`${array} is empty, yeet!`);
    return undefined;
  }
}

let empty = [];
let full = [1 , 2 , 3];

console.log(getLast(empty)); //testing function with different arguments
console.log(getLast(full));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (var i = 0; i < array.length; i++) { //for loop to iterate over array
    if (array[i] === value){  //checks value from argument against values in array
      console.log("yaaay,", value, "is in", array); //logs found value
      return true;
    }
  }
  console.log("meeh!", value, "was not found >:("); //logs absence of value
  return false;
}
 console.log(find(2, full)); //testing function with different arguments
 console.log(find(7, full));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) { //checks value from argument against value in string array
    console.log('tis the same!');  //logs outcome
    return true;
  }
  else {
    console.log('tis NOT the same!'); //logs outcome
    return false;
  }
}
//testing function with different arguments
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('n', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for ( num of array) { // iterastes through the array, for of lets us use values without arrat notation
    sum += num; // adds number from array to sum only which keeps track of the total
  }
  return sum;
}
//testing
let test = [ 1, 2, 3, 4, 5]; // creating random number arrays to test
let test2 =[427, 2, -15, 10000000, 0];

console.log(sumAll(test)); // should log 15
console.log(sumAll(test2)); // should log 10,000,414

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
