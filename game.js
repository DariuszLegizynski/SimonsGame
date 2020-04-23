const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    const audioRed = new Audio("sounds/red.mp3");
    const audioGreen = new Audio("sounds/green.mp3");
    const audioBlue = new Audio("sounds/blue.mp3");
    const audioYellow = new Audio("sounds/yellow.mp3");

    for(let i of gamePattern){
        if(i === "red"){
            $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
            audioRed.play();
        }
        else if(i === "green"){
            $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
            audioGreen.play();
        }
        else if(i === "blue"){
            $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
            audioBlue.play();
        }
        else if(i === "yellow"){
            $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
            audioYellow.play();
        }
    }
}