 // coffee order 1

 let coffeeOrder = [
     "alex - cortadi",
     "ben - cortado",
     "charlie - whatever's new",
 ];
 
 console.log(coffeeOrder.length)
 // to add

 coffeeOrder.push("donna - espresso");

 // activity 2

 let favouriteSong = [
     "ben howard - end of the affair",
     "green day - american idiot",
     "foo fighters - everlong"
 ];

 console.log(favouriteSong)

 let newSong = [
     "spice girls - tell you what i want",
     "linkin park - numb",
 ];
console.log(newSong.unshift)

//activity 3 

let shoppingList = ["pears", "peaches","bannanas",]
shoppingList.splice(3)
console.log(shoppingList)


//loops

let favDrinks = ["coke",
"fanta",
"tonic",
"redbull"
];

for(let i = 0; i < favDrinks.length; i++ ){
    console.log(favDrinks[i]);
}

//activity 4

for(let i = 0; i <= 10; i++){
    console.log(i);
}

//activity 5 while loop

let age =15;
while(age < 18){
    console.log("your a child"); //
    age++;
}
console.log("your now and adult!");
// if the age is less than 18 its buy 3 years so 3 loops than an adult.

//Activity 1

let  favSong = ["Numb","one step closer","in the end",]; /// try this again.
favSong.push("spicegirls","elton john")
for(let i = 0; i < favSong.length; i++);
{
console.log(favSong)}
 

 //try push again.


// activity 2 random number 1-50



for(let i = 0; i <= 5; i++)
{let randomNumber = Math.floor(Math.random()*50-1+1);
    console.log(randomNumber)}



   //activity 3 create a loop 0-9

for(let i = 9; i >= 0; i--) {
    console.log('' + i);
}

// i = 0; i >= 0 (i is equal or greater than 0); i--


//activity 4

let films = ["saving private ryan","fast and furious"," batman","spiderman"]
// the array of the 4 films - above
//

for(let i = 0; i <= films.length-1; i++){
    console.log(films[i])

}
// this ask if film 3 is ghostbusters say "" yay"""
if(films [3]== "Ghostbusters"){
    console.log("yay its ghost busters")
}
else {
    console.log("Boo we want ghostbusters")
}
//or else if its not ghost busters it will say "boo"


// Activity 5

let num // create the variable (num)
for(let i = 0; i < 6; i++){                 // this is the for loop, i is always 0, 6 is the amount of random numbers needed. 
    num = (Math.floor(Math.random()*30));   // Math.floor - returns the largest interger less than or equal to a given number
    console.log(num)      // math.random creates the random number. between 1 - 30
    if (num % 7 == 0){  // if statement - asks if the random number chose is divible by 7
        console.log(`${num} is divisble by 7`)
    } else {
        console.log(`${num} is not divisible by 7`) // or else - is not divisible by 7
    }
}



// activity 6 

let davesFollowers = ["rob", "james", "mick", "tom"]
//both arrays of names. 2 have the same names in each ie fb mutual friends.
let joshFollowers = ["rob", "james","nathan","trevor"]

for (let i = 0; i < davesFollowers.length; i++){  // a nested loop is needed to compare both sets friends to find the same
    for (let j = 0; j < joshFollowers.length; j++){ //[i] this means you dont have to type the array in
        if (davesFollowers[i]==joshFollowers[j]){   // == is daves followes equal to joshs followers.
            console.log(davesFollowers[i], joshFollowers[j])
        }
    }
}


let monicasFollowers = ["Jim", "patrick","toby", "katy", "martin"]
let franksFollowers = ["reilly","katy", "peter","martin","jim",]

for (let i = 0; i < monicasFollowers.length; i++){
    for ( let p = 0; p < franksFollowers.length; p++){
        if (monicasFollowers [i] == franksFollowers[p]){ // loop inside a loop is a nested loop
            console.log(monicasFollowers[i],franksFollowers[p])
        }
    }
        
    }
    // try 6 again.


// ACTIVITY 7 
 // research on do while loop


let place = "helmshore";
let weather = "snow";

if (place == "helmshore" && weather == "sunny"){
    console.log("check again stupid");
} else if (place == "helmshore" && weather == "snow"){
    console.log("highly likely");
} else {
    console.log(" what, it isnt snowing?");
}