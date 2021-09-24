const person ={
    firstName: "robert",
    age: 25,
    sayHi(){
        return(`hello my name is ${person.firstName}`)
    }
};
console.log (person.firstName);
console.log (person.age);
console.log (person.sayHi())

person.favSongs = ["linkin park - numb", "basshunter - now your gone", "ben howard - only love"]
console.log(person.favSongs);



 

// cafe question.
 console.log("cafe question");
 
 const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
      "Cappucino",
      "Latte",
      "Filter Coffee",
      "Tea",
      "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
  
openCafe() {
    return "come on in";
},
closedCafe() {
    return "we are closed come back tomrrow"}
}
console.log(cafe.openCafe());
console.log(cafe.closedCafe());





console.log(" activity 1")
  // create an alarm

let alarm ="";
let day = "saturday"

const alarmClock ={
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

if (day == "saturday" || day == "sunday"){
    alarm = alarmClock.weekendAlarm;
    console.log(`hello chris ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`hello chris: ${ alarm}`)
}


console.log("---------- activity 2 --------------")

const  pet = {
    name : "fin",
    typeOfPet : "dog",
    age : 9,
    colour : "black",
}
    pet.eat = `${pet.name} is eating a snack`;
    pet.drink = `${pet.name} is drinking water`;

console.log(pet.eat);
console.log(pet.drink);


console.log ("practice");


let alien = {
    name : 'rob',
    age : '25',
    eyeColour :'blue',
    'work exp' : 4
    
}
console.log(alien["work exp"]);

//declare a new object, called "myCafe" Basils example.
const myCafe = {
  
    //now assign it its own variables...
  name:"The Moldy Bread Café", 
  maxSeats: 100, 
  hasOffers:true, 
    
    //I wanted the drinks the cafe offered as well as the prices of each, so I used a nested array (or an array of arrays)
    //you access a nested array like this: arrayName[RowNumber][indexOfThatRow]
  arr_Drinks:
  [
    ["Ancient tea", "Very Bitter Coffee", "Stale water", "Second hand milk"],
    [4.50, 4.95, 45.72, 1.56]
  ],
  
  //Another nested array,  this time for food. Not used at the moment but same setup as above.
  arr_Foods:[["Warped banana", "Watery soup", "Wall scrapings", "Broken glass"],[22.80, 14.50, 87.50, 41.50]],
  
  //a function built in to the myCafe object. when called, simply displays some text
  fn_open:(input)=>
      { }

    };
    
      //now that the object has been made, we need to get some data out of it.
      //this function requires an object as a parameter (which in this case could be "myCafe")
    
    function orderDrinks(object)
    {
    
      //generate a random (whole) number between 0 and 3....
        let var_index = Math.floor((Math.random()*4))
    
      //then, use that random number to pick out a random element of the food array, then the matching element for the price (all inside the   //arr_Drinks array where arr_Drinks[0][?] would be the actual string and where arr_Drinks[1][?] would be the matching price
      //once accessed, print them out to the console
        //bark("For a drink, you ordered the " +object.arr_Drinks[0][var_index]+" and the price of it is £"+object.arr_Drinks[1][var_index])
    
      //can also return the price of a drink, but this isnt used yet
      return (object.arr_Drinks[1][var_index])
    }
    
    //now, actually call the function (with an object passed as a parameter) so something will be displayed
    orderDrinks(myCafe);


    console.log ("")
    let hour = 18;

    if (hour >= 6 && hour < 12){
      console.log("good morning")
    } else if  (hour >= 12 && hour < 18){
console.log("good afternoon")
    } else 
    console.log("good evening");


    const restaurant = { // this is the object
      name: "grey mare",
      seatingCapacity: 100, // these are all keys
      hasDealsOn: true,
      beers:[
        "san miguel",  // keys and values are separates by the colon.
        "peroni",
        "stella",
        "forsters"
      ]
};

 let myYoutubeVideo = {
   title : 'loops in javascript',
   videoLenght: 15,
   videoCreator: 'rob pye',
   videoDescription: ' this is a video description'

  }

console.log(myYoutubeVideo);
console.log(`hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);


