// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
//GLOBAL VARIABLES
/* global $ */

var userChoice;
var computerChoice;
var winner;
var randomNumber;

// DOCUMENT READY FUNCTION BELOW

$("button").click(function() {
   
    userChoice=$("#input").val();
    
    $("#userChoice").text(userChoice);
});

$("button").click(function() {
   
  // computerChoice=$("#input").val();
   
   //$("#computerChoice").text($("#input").val());
   
   
   var randomNumber= Math.random();
   
console.log(randomNumber);
if(randomNumber< .3333333) {
   computerChoice = "piedra"
        $("#computerChoice").html("piedra"); 
    }
 else if(randomNumber <  .6666666 ){
    computerChoice = " tijeras" 
 $("#computerChoice").html("tijeras"); }
 
 
 else {
 $("#text").html("paper"); }
 

});

