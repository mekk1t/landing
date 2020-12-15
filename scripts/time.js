function setTimer(){
    createTimer();
    time();
    setInterval(time, 1000);
    document.getElementById("timeSetter").style.display = "none";
}

function time(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("timer").innerHTML = `${h}:${m}:${s}`;
}

function createTimer(){
    var timerElement = document.createElement("span");
    timerElement.id = "timer";
    document.getElementById("upper").append(timerElement);
}