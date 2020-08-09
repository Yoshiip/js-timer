const EndSound = new Audio('end.wav');
var seconds = 0;
const baseMinute = 5;
var minutes = baseMinute;



var started = false;
var interval = setInterval(Update, 1000);

window.onload = function(){ 
    SetText(minutes + ":00");
}

function Start(){
    started = !started;
    if(started &&  minutes < 0){
        Reset();
    }
    if(started){
        Stop();
    } else{
        document.getElementById("button").innerHTML = "Stop";
        interval = setInterval(Update, 1000);
    }
}

function Stop(){
    document.getElementById("button").innerHTML = "Start";
    clearInterval(interval);
}


function Reset(){
    baseMinute = 2;
    seconds = 0;
    Stop();
    started = true;
    SetText(minutes + ":00");
    clearinterval(interval);
}

function Update(){
    seconds--;
    if(seconds < 0){
        seconds += 60;
        minutes--;
        if(minutes < 0) {
            EndSound.play();
            Stop();
            SetText("Time's up!");
            return;
        }
    }
    console.log(seconds);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    SetText(minutes + ":" + seconds);
}

function SetText(text){
    document.getElementById("timer").innerHTML = text;
    document.title = text;
}