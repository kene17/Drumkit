for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

//loops through the index file to create an event for all the buttons, .drum makes it class specific
  if(i==4 || i==5){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "black";
    var butttonInnerHTML = this.innerHTML;
    switch (butttonInnerHTML) {
      case 'j':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

        break;
        case 'k':
          var crash = new Audio("sounds/crash.mp3");
          crash.play();

          break;

      default: console.log(butttonInnerHTML);

    }
  })
  }else{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      this.style.color = "white";
      var butttonInnerHTML = this.innerHTML;
      switch (butttonInnerHTML) {
        case 'w':
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();

          break;
          case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;

        default:
    }

  });

}
}
