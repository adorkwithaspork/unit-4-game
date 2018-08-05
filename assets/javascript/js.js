// Here we establish the "targetNumber" (set to 50 in this example).
var targetNumber = 50;

// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#number-to-guess").text(targetNumber);

 
    S// Here we created a counter, we'll be using this to track the user's total.
  var counter = 0;
  $(".crystal-image").on("click", function() {

    //We'll then increment the counter each time by the randomly selected number.
    // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
    // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
counter += increment;

    // Here we created code that selects a number either 10 or 11.
  // We'll set this number at the start of the "game".
  var numberOptions = [10, 11];
  var increment = numberOptions[Math.round(Math.random())];

    // We then output the number of times the crystal is clicked.
    alert("Your new score " + counter);

    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {

    // If the numbers match we'll celebrate the user's win.
    alert("You win!");

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        alert("You lose!!");
      }
  
      // This is fine except the way our code is written every user will win first (when they hit 50).
      // But will then lose immediately if they click again. Seems pointless right?
      // To make this a game we need to create additional code to randomize the counter and targetScore.
  

  });