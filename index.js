
//  Detecting Button Press on Click
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;   // it means which button is clicked
  makeSound(buttonInnerHTML);  //this lines means play specific sound to be played acording switch stmt.
  buttonAnimation(buttonInnerHTML);
  });
}

//this section of code  runs when a key is pressed  (Keyboard Press)
document.addEventListener("keypress",function(e) {

  makeSound(e.key);
  buttonAnimation(e.key);
});

 //this code checks which key sound is to play based on which key is pressed or clicked
function makeSound(key){
   
  switch (key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
     
    case "a":
        var tom_2= new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;

    case "s":
        var tom_3= new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;

     case "d":
        var tom_4= new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;

     case "j":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;

     case "k":
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
        break;

     case "l":
        var kick_bass= new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed");
},100);
}


// document.getElementsByClassName(".set")[0].getAttribute;

// var noOfButtons=document.querySelectorAll(".drum").length;
// while ( noOfButtons){
// document.querySelectorAll(".drum").addEventListener("click",handleClick)

// }

// function handleClick(){
//     console.log("i got Clicked!")
//   var audio= new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
