function makeSound(key){

//takes in a single parameter, and let's recognizes what key was pressed
  switch (key) {


    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;
      case 'k':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        break;

    default: ;
  }
}

function makeSound2(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
      case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();

        break;
        case 'l':
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();

          break;
          case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;
            case 'd':
              var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();

              break;

    default:
}


}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);//waits for a button to be selected
  activeButton.classList.add("pressed")//pressed is a class from the css file, this allows the button to have an animation.
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);//after the animation is completed we need to to go back to normal

  //or




}
//detecting Button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

//loops through the index file to create an event for all the buttons, .drum makes it class specific
  if(i==4 || i==5){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {//adds eventListener to a specific button,listen for when you click on a button
    this.style.color = "black";//this changes the color of the button clicked on to black
    var butttonInnerHTML = this.innerHTML;//stores the value of the buttons
    makeSound(butttonInnerHTML);//uses the value of the button stored to play a sound, e.g makesound(w)
    buttonAnimation(butttonInnerHTML);//uses the value of the button stored to make an animation
  })
  }else{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {//adds eventListener to a specific button,listen for when you click on a button
      this.style.color = "white";
      var butttonInnerHTML = this.innerHTML;
      makeSound2(butttonInnerHTML);
      buttonAnimation(butttonInnerHTML);//uses the value of the button stored to make an animation


  });

}
}
//detecting Keyboard Press
document.addEventListener("keypress", function(event) {//adds eventListener to entire document,event let's us tap into the event that triggred the event listener
  makeSound(event.key);//sends the key property of the event to make a sound
  makeSound2(event.key);//sends the key property of the event to make a sound,e.g makesound(W)
  buttonAnimation(event.key);

})
