var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("sprite");

var x = canvas.width/2;
var y = canvas.height/2;
var widthOfImage = img.width; // find the width of the image
var heightOfImage = img.height; // find the height of the image

var dx =2;
var dy = -2;

var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y);

    if(rightPressed) {
        x += 1;
    }
    else if(leftPressed) {
        x -= 1;
    }else if(upPressed) {
        y -= 1;
    }
    else if(downPressed) {
        y += 1;
    }



}



setInterval(draw,5);


