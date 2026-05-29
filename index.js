/*console.log('Hello');
console.log('I like pizza!');

window.alert('This is an alert');

// This is a comment 
/*multi 
line 
comment */ 
//document.getElementById("first").textContent = 'Hello';
//document.getElementById("second").textContent = 'I like pizza!';
 //variable = A container that stores a value.
//            Because as if it were the value it contains
// 1. declaration let x;
// 2. assignment x = 100;

/*let x;
x = 100;

let y = 124;
console.log(x);
console.log(y);

let age = 25;
let gpa = 8.2;
let price = 10.99;
let firstname = "vipin";

console.log(`You are ${age} years old`);
console.log(`The over all GPA is ${gpa}`);
console.log(`The price for you is ₹${price}`);
console.log(typeof age);
console.log(typeof firstname);
console.log(firstname);

let online = true;

console.log(typeof online);

let students = 30;

students +=1;
console.log(`${students}`)
students -= 2;
console.log(`${students}`)
students *= 3;
console.log(`${students}`)
students /= 2;
console.log(`${students}`)
students **= 2;
console.log(`${students}`)
students %= 2;
console.log(`${students}`)



students +=1;
console.log(`${students}`)
students -= 2;
console.log(`${students}`)
students *= 3;
console.log(`${students}`)
students /= 2;
console.log(`${students}`)
students **= 2;
console.log(`${students}`)
students %= 2;
console.log(`${students}`)
students++;
console.log(`${students}`)
vipi
/*
Operator Precedence 
1. Parenthesis
2. exponents 
3. multiplication & division & modulo 
4. addition and subtraction  */

//input in alert window
/*let username; 
//username = window.prompt("what is your username?");
//console.log(username);

document.getElementById("mySubmit").onclick = function(){
 username = document.getElementById("myText").value;
 console.log(username);
 document.getElementById("myH1").textContent = `Hello ${username}`
}*/
//all input functions as a string so you have to first type convert them into desirable form 

/*let age = window.prompt("How old are you?");
age = Number(age);
console.log(age);
age +=1;
console.log(age, typeof age);*/

//const = a variable that cannot be changed



/*const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myCircumference").textContent = circumference + "cm";
}*/

const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
const countLable = document.getElementById("countLable");
let count = 0;

incrementBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decrementBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countLable.textContent = count;
}