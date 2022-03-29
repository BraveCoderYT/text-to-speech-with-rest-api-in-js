var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

start.addEventListener("click", function () {
    var voice = document.getElementById("voice").value;
    var txt = document.getElementById("text").value;

    if (voice == "") {
        responsiveVoice.speak("Select a voice first.", "US English Male");
    } else if (txt == "") {
        responsiveVoice.speak("Enter text first.", "US English Male");
    } else {
        responsiveVoice.speak(txt, voice);
    }
});

pause.addEventListener("click", function () {
   responsiveVoice.pause(); 
});

resume.addEventListener("click", function () {
    responsiveVoice.resume(); 
});

stop.addEventListener("click", function () {
    responsiveVoice.cancel();
});

clear.addEventListener("click", function () {
    var txt = document.getElementById("text").value="";
});