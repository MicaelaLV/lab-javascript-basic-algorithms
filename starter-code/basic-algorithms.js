// #1. Create a variable hacker1 with the driver's name
//Print "The driver's name is XXXX"

var hacker1 = "Cloe";
console.log("The driver's name is " + hacker1);

// Create a variable hacker2 and ask the user for the navigator's name
// Print "The navigator's name is YYYY"

var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
// #2. Depending on which name is longer, print:
      //The Driver has the longest name, it has XX characters or
      //Yo, navigator got the longest name, it has XX characters or
      //wow, you both got equally long names, XX characters!!

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
// #3.Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var hacker1Upper = hacker1.toUpperCase();
var driver = '';
for(var i = 0; i < hacker1Upper.length; i ++) {
  driver += hacker1Upper.charAt(i) + ' ';
}
console.log(driver);

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var navigatorOnReverse = "";
for (var i = hacker2.length -1 ; i >= 0; i--) {
  navigatorOnReverse += hacker2[i];
}
console.log(navigatorOnReverse);

//Depending on the lexicographic order of the strings, print:
    //The driver's name goes first
    //Yo, the navigator goes first definitely
    //What?! You both got the same name?
function alphabetical(a, b) {
  var A = a.toLowerCase();
  var B = b.toLowerCase();
  if(A < B) {
    console.log("The driver's name goes first");
  } else if (A > B) {
      console.log("Yo, the navigator goes first definitely");
    } else {
      console.log("What?! You both got the same name?");
  }
}
alphabetical(driver,navigatorOnReverse);

//Bonus Time!
//#4.Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
    // "A man, a plan, a canal, Panama!"
    // "Amor, Roma"
    // "race car"
    // "stack cats"
    // "step on no pets"
    // "taco cat"
    // "put it up"
    // "Was it a car or a cat I saw?" and "No 'x' in Nixon".
/*
var userInput = prompt("insert a palindrome quote");
var userInversedInput = "";
var checkedInput = "";
for (var i = userInput.length -1 ; i >= 0; i--) {
  userInversedInput += userInput[i];
  checkedInput = userInversedInput./[^A-Za-z0–9]/g;
}
console.log(checkedInput);

if (checkedInput === userInput) {
  console.log("The string you've inputted is a palindrome");
} else {
  console.log("The string you've inputted it's not a palindrome");
}
*/
