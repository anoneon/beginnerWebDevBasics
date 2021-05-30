var buttoncolours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPatter = [];
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level - "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

    userClickedPatter.push(userChosenColour);
    
    playSound(userChosenColour);
    checkAnswer(userClickedPatter.length-1);


});

function checkAnswer(currentLevel){

    if(userClickedPatter[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPatter.length === gamePattern.length){
            setTimeout(nextSequence(),1000);
        }
    }
    else{
        console.log("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        playSound("wrong");

        $("#level-title").text("Game Over, Press any key to restart");
        startOver();
    }

}

function nextSequence(){

    userClickedPatter = [];
    level++;
    $("#level-title").text("Level - "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttoncolours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    animatePress(name);
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function startOver(){
    gamePattern = [];
    userClickedPatter = [];
    started = false;
    level = 0;
}
