//Declare a variable firstname and initialize it with the value 'Lata'.
var firstname = 'Lata'

// "Which value does x have after execution of the following code? 
// let x = 'Geeta';"
value does x have after execution of the following code is 'Geeta'


//Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
var flower = 'rose'
var tree = 'maple'

 //"Which value does x have after execution of the following code?
// let x = 'Tic';
// x = 'Tac';
// x = 'Toe';"
after executing this code, the value of `x` is 'Toe'.

// "Which value does x have after execution of the following code?                            let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;"
After executing the code, the value of `x` is 'Hardy'.

// Define a function hello that returns 'Hello world!'.
function hello() {
    return 'Hello world!';
}
console.log(hello());
// Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.
function a() {
    return 'Hello a!';
}

function b() {
    return 'Hello b!';
}
console.log(a());
console.log(b());
// Define a function greet returning the value  'Haydo!'   Declare a variable salutation Call the function greet and assign the result of the call to the variable salutation.
function greet() {
    return 'Haydo!';
}
let salutation = greet();
console.log(salutation);
// "function hello() {
//   return 'Hi!';
// }

// let x = hello();"
console.log(x);

// Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(param) {
    return param;
}
console.log(echo('Greta'));
console.log(echo('CO2'));

function reply(phrase) {
    return phrase;
   }
   
   let x = reply('How do you do?');
   console.log(x);
// Write a function greet having one parameter and returning 'Hello <parameter>!'.Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.
function greet(name) {
    return 'Hello ' + name + '!';
}
console.log(greet('Ada'));
console.log(greet('Grace'));
// "Que vaut X 
function whereIs(name) {
    return 'Where is ' + name + '?';
  }
  
  let x = whereIs('Jacky');" 
  // X vaut Where is Jacky