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
  return`Hello, ${name}!`;
}
// Remember to call the function to test
console.log("this should say 'hello, mydude!'", helloName('mydude'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  //this one was already in my notes from the videos!
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log("the answer is:", addNumbers(1, 1));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}

console.log("the answer is:", multiplyThree(1, 1, 1));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}

console.log(isPositive(-1));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length - 1 >= 0){
    return array[array.length - 1]
  }
  else if (array.length - 1 < 0){
    // couldnt figure out how to make the array name be printed
    //tried using array.name also tried standard comma concatentaion
    console.log(`${array} is empty, yeet!`);
    return undefined;
  }
}

let empty = [];
let full = [1 , 2 , 3];

console.log(getLast(empty));
console.log(getLast(full));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value){
      console.log("yaaay,", value, "is in", array);
      return true;
    }
  }
  console.log("meeh!", value, "was not found >:(");
  return false;
}
 console.log(find(2, full));
 console.log(find(7, full));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
