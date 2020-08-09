const EndSound = new Audio('end.wav');
var seconds = 0;
const baseMinute = 5;
var minutes = baseMinute;



var started = false;
var interval = setInterval(update, 1000);

window.onload = function(){ 
    setText(minutes + ":00");
}

function start(){
    started = !started;
    if(started &&  minutes < 0){
        reset();
    }
    if(started){
        stop();
    } else{
        document.getElementById("button").innerHTML = "Stop";
        interval = setInterval(update, 1000);
    }
}

function stop(){
    document.getElementById("button").innerHTML = "Start";
    clearInterval(interval);
}


function reset(){
    minutes = baseMinute;
    seconds = 0;
    stop();
    started = true;
    setText(minutes + ":00");
    clearInterval(interval);
}

function update(){
    seconds--;
    if(seconds < 0){
        seconds += 60;
        minutes--;
        if(minutes < 0) {
            EndSound.play();
            stop();
            setText("Time's up!");
            return;
        }
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setText(minutes + ":" + seconds);
}

function setText(text){
    document.getElementById("timer").innerHTML = text;
    document.title = text;
}