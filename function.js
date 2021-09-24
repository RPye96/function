
// functions - performs a task or calculates a value function

function greet( name, lastName) { // name is the parameter
 console.log ( 'hello' + name + ' ' + lastName);
}
 greet ('john', 'smith'); // john is the argument
 greet ('robert', 'pye');

 function square(number){ // this is the parameter
     console.log('return',  number * number);
 } //this is the argument,
 square ('20'); //this is the statement

 
 


 //const pressGrindBeans = () => {      // arrow function
//console.log(" grind for 20 seconds..");
 //}

//pressGrindBeans ();
//pressGrindBeans ();


// use let  because the variable will change



console.log ("-----activity1------");
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding){
    console.log("stopping the grind");
    coffeeIsGrinding = false;
} else {
    console.log("grinding is about to begin");
    coffeeIsGrinding = true;
}
}
pressGrindBeans();
pressGrindBeans();

console.log("activity 2")

const addUp = (num1, num2) =>{
    return num1 * num2
}

addUp(7.3); // adds up to return num1 + num2
console.log(addUp(5,100));


console.log(" ---------- activity 1 ----------------");

// change the function to an arrow function = where i have change the const from function. get the same asnwer.

const factorial = (n) => {
     if ((n === 0) || (n === 1)){
         return 1;
     } else {
         return (n * factorial (n-1));
     }
}
console.log(factorial(33));

console.log (" ---------- activity 2 ---------");

let orderCount = 0;

const takeOrder = (toppingOne , toppingTwo ) => { // () - parameters / const - taking the order will be the same
 console.log(`Pizza with ${toppingOne} and ${toppingTwo}`); 
 orderCount++; // creates the order +1
}
takeOrder("salami", "chorizo");
takeOrder("salami", "chorizo");




console.log("----------- activity 3 --------------");


console.log("please enter your pin and the amount which you would like to withdraw")
//let pinNumber = 1234 //variables, our money and pin
//let balance = 50

const cashWithdrawal = (pin, amount) => {   //constant pin and amounts is the parameter
    if (pin != pinNumber) {   // this means is the pin not equal to the pin number
        console.log("incorrect pin, please try again"); // if the pin is inccorrect this will show.
    }
    else if (amount > balance) {     // if pins correct -> the amount requested is greater than the balance.
        console.log(` the ${amount} you have requested exceeds your ${balance} please enter a different amount`);
    } else {
    console.log(`withdrawing ${amount} , please take your money.`); // if pin is correct and the amounts withitn the limit this 
    }                                                               // this is the end result 
}


cashWithdrawal( 1234, 30);  // correct pin correct amount of money to withdraw
cashWithdrawal( 1236, 50);  // because pin != pinnumber, the pin is not correct meaning it wont allow to take money
cashWithdrawal( 1234, 65); // the amount exceeds the balance so it wont execute the transactions


let

