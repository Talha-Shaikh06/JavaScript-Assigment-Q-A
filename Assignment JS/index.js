//Q1: Write a JavaScript program to construct the following pattern, using a nested for loop.
//*
//**
///***
////****
////*****

//let rows = 5;
//for (let i = 1; i <= rows; i++) {
//  let pattern = "";
//  for (let j = 1; j <= i; j++) {
//    pattern += "* ";
//  }
//  console.log(pattern);
//}


//Q2: 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

//let num1 = prompt("Enter the first number:");
//let num2 = prompt("Enter the second number:");
//
//if (num1 > num2) {
//  console.log(num1 + " is larger than " + num2);
//} else if (num1 < num2) {
//  console.log(num1 + " is smaller than " + num2);
//}else{
//    console.log("Both numbers are equal");
//}


//Q2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
//Sample: 3 
//Output : The sign is +
//Sample: -5 
//Output : The sign is -

//const number = prompt("enter your number");
//if (number > 3){
//    alert("The sign is +");
//}
//else if(number < 5){
//    alert("The sign is -");
//}



//Q3:Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

//var number1 = prompt("Enter the 1 number");
//var number2 = prompt("Enter the 2 number");
//var number3 = prompt("Enter the 3 number");
//var number4 = prompt("Enter the 4 number");
//var number5 = prompt("Enter the 5 number");
//
//if(number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5){
//    console.log(number1);
//}
//else if(number2 > number3 && number2 > number4 && number2 > number5){
//    console.log(number2);
//}
//else if(number3 > number4 && number3 > number5){
//    console.log(number3);
//}
//else if(number4 > number5){
//    console.log(number4);
//}
//else{
//   console.log(number5);
//}



//Q4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Sample Output : "0 is even" "1 is odd" "2 is even" 

//for (var i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//       console.log(i + " is even");
//    } else {
//       console.log(i + " is odd");
//    }
// } 



//Q6: Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//for (let i = 1; i <= 100; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//      console.log("FizzBuzz");
//    } else if (i % 3 === 0) {
//      console.log("Fizz");
//    } else if (i % 5 === 0) {
//      console.log("Buzz");
//    } else {
//      console.log(i);
//    }
//  }


//Q5:Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
//The grades are computed as follows :        
//Range Grades
//<60     F
//<70     D
//<80     C
//<90     B
//<100    A

//const marks = [59, 69, 77, 89, 98,];
//const avg = marks.reduce((total, mark) => total + mark, 0) / marks.length;
//let grade;
//if (avg < 60) {
//    grade = 'F';
//} else if (avg < 70) {
//    grade = 'D';
//} else if (avg < 80) {
//    grade = 'C';
//} else if (avg < 90) {
//    grade = 'B';
//} else {
//    grade = 'A';
//}
//console.log(`Average mark : ${avg.toFixed(2)}`);
//console.log(`Grade : ${grade}`);