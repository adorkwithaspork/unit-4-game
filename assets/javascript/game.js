//Step 1: Ready the Document

// Here we establish the "targetNumber" (set to 50 in this example).
var targetNumber = null;
var wins = 0;
var losses = 0;
var counter = 0;

var updateWins = function() {
    $("#wins").text(wins);
};

var updateLosses = function(){
    $("#losses").text(losses)
};

var updateCounter = function(){
    $("#counter").text(counter)

};

var updateTargetNumber = function(){
       targetNumber = Math.floor(Math.random()*(120-19+1)+19);
       $("#number-to-guess").text(targetNumber);
        };

        console.log(updateTargetNumber)
        
        //
  


// var resetRound = function(){
//     targetNumber = 0;
//     startGame()
// }

//MAJOR TASK 1: CREATE RANDOM NUMBER TO GUESS 
//create a random number from 19-120
function randomIntFromInterval(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }
var targetNumber = randomIntFromInterval(19,120)
$("#number-to-guess").text(targetNumber);

    //debug 
    console.log("targetNumber",targetNumber);


  
//MAJOR TASK 2: CREATE DYNAMIC BUTTONS FOR CRYSTALS WITH DATA VALUES
  var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

   // Next we create a for loop to create crystals for every numberOption.
   for (var i = 0; i < 4; i++) {

    var crystalSource= ["assets/images/2-Star_Crystal.png", "assets/images (1).jpeg", "assets/images/images (2).jpeg,", "assets/images.jpeg"];
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // Each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    
    imageCrystal.addClass("crystal-image crystal crystal-button");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be  set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}
     //MAJOR TASK 3: OBTAIN DATA FROM DYNAMIC BUTTONS UPON CLICK AND ADD DATA TO DISPLAY BASED ON GUESS 

$(".crystal-image").on("click",function() {
//Extract crystal value from data attribute
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

// // We then add the crystalValue to the user's "counter" which is a global variable.
// // Every click, from every crystal adds to the global counter.
counter += crystalValue;
document.getElementById("counter").innerHTML = counter;

if (counter === targetNumber) {
        // If the numbers match we'll celebrate the user's win.
        alert("You win!");
        wins++;
        counter = 0;
        updateWins();
        updateCounter();
        updateTargetNumber();
        
        
        // if(confirm("Do you want to play again?")){
        //     txt === true;
        //     updateTargetNumber()
 
           
        // } else {
        //     resetGame()
        // }
        
        
        // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    } else if (counter >= targetNumber) {
        // Then they are alerted with a loss.
        losses++;
        counter = 0;
        updateLosses();
        updateCounter();
        updateTargetNumber();
        alert("You lose and suck at math!!");
    
    };

});



function resetGame (){
    var targetNumber = 0;
    var wins = 0;
    var loses = 0;
    var counter = 0;

}






// //Why does this not work?  Tried with and without hash
// // $("#counter").html(counter);
// 
// })


 














