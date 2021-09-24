let firstName ="rob";
console.log(firstName);
firstName = "chris";
console.log(firstName);


let i = 10;
console.log(10)
i +=2;
console.log (i);


let favouriteDrink = "coke";
let name ="rob";
let age ="25";
let favouriteColour ="blue";
console.log(`hi my name is ${name} and i am ${age} and my favourite colour is ${favouriteColour}`);
age = 26;
favouriteColour = 'green'; 
console.log(`hi my name is ${name} and i am ${age} and my favourite colour is ${favouriteColour} `);

let breakfast = 'cereal';
let dinner = 'bacon butty';
let tea = 'risotto';
console.log (`This morning for breakfast i had ${breakfast} followed by a ${dinner} for dinner then finally for tea i had ${tea}`);
breakfast = 'toasty';
dinner = 'salad';
tea = 'pasta';
console.log (`This morning for breakfast I had ${breakfast}, followed by a ${dinner} for dinner, then finally for tea i had ${tea}.`);



// task 3 //

const birthDay = new Date("2022,1,14") // my birthday next year.
const todaysDate = new Date("2021,9,22"); // todays date
let difInTime = birthDay.getTime() - todaysDate.getTime() //im looking to get the difference in time between my bday and todays date.
let difInDays = Math.floor(difInTime / (1000 * 3600 * 24)); // this some turns milliseconds to days
console.log(`the difference between ${birthDay} and ${todaysDate} is ${difInDays} days`); // i want to log the diff between my bday
//and todays date by using the sum 




//task 4

let space1="x";
let space2="o";
let space3=" "; 
let space4="x";
let space5="x";
let space6=" ";
let space7="o";
let space8=" ";
let space9="x";

// insert vairables onto board //

console.log('  |    |    ')
console.log(` ${space1}| ${space2}  |${space3} `)
console.log("  |    |    ")
console.log('--------------')
console.log("  |    |    ")
console.log(` ${space4}| ${space5}  |${space6} `)
console.log("  |    |    ")
console.log('--------------')
console.log("  |    |    ")
console.log(` ${space7}| ${space8}  |${space9} `)
console.log("  |    |    ")


// if/else //

if(10 == "10"){
    console.log("they are the same")
} else {
    console.log("they are not the same")
}


//let age = 15;

//if(age > 17 == uk){
    console.log("yes i can serve you")
//} else {
    console.log("you arent old enough")
//} //

//activity 2//

let topping = "pepperoni";
switch(topping){
case "extra cheese":
case "peppers":
case "olives":
console.log(`${topping} extra cheese this is an important ingrediant for my pizza:`); 
break; 
case "pepperoni":
case "anchovies":
console.log(`i dont mind having ${topping} on my pizza`);
break;
default:
console.log(`${topping} should not be on a pizza`)
}



//Activity 3// password

let password = "DHK34HPSJP"

if(password.lenght >= 8)
{
    console.log("your password was at least 8 charachters. You choose:" + let.password)
} else {
console.log ("your password is too short.")
}



// activity 3 stretch
 let num = 10
 if (num % 3 == 0 || num % 5 == 0) {
     console.log("this number is divisible by 3 or 5")
 } else {
     console.log("this number is NOT divisible by 3 or 5")
 }


 // activity 4

 let pnum = 9
  
if(pnum % 3 == 0 && pnum %5){
    console.log("fizzbuz")
} else if(pnum % 3 == 0){
    console.dot("fizz")
} else if(pnum % 5 == 0){
    console.dot("buzz")
}


//activity 5

let palindrome = "193748";
let palinSplit = palindrome.split("");
console.log("palinSplit is equal to:" +palinSplit)
let palinReverse = palinSplit.reverse("");
console.log("palinReverse is equal to:" +palinReverse);
let palinJoin = palinReverse.join("");
console.log("palinJoin is equal to:" +palinJoin)
if
(palindrome == palinJoin) {
    console.log("palindrome!")
} else {
    console.log("not a palindrome")
}


// activity 6

