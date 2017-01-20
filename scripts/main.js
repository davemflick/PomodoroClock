var workTime = document.getElementById('workTime').value;
var breakTime = document.getElementById('breakTime').value;
var $timeDisplay = document.getElementById('timer');
var audio = new Audio('sounds/end.mp3')

//Allows the Work Time and Break Time to be manipulated by 1.
document.getElementById('workUp').onclick = function(){
document.getElementById('workTime').stepUp();
workTime++
}
document.getElementById('workDown').onclick = function(){
 document.getElementById('workTime').stepDown();
 workTime--;
}
document.getElementById('breakUp').onclick = function(){
 document.getElementById('breakTime').stepUp();
 breakTime++;
}
document.getElementById('breakDown').onclick = function(){
 document.getElementById('breakTime').stepDown();
 breakTime--;
}


//Start of Timer Functionallity

var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        var mins = Math.floor(sec/60000);
        var secs = Math.floor(((sec % 60000)/1000).toFixed(0));
        $timeDisplay.innerHTML = secs !== 60 ? mins + ':' + (secs <10 ? '0' : '') + secs : mins+1 + ':00';
    },
    onstart : function() {
        $timeDisplay.innerHTML = "Here We Go!";
    }
});

timer.on('end', function () {
    document.getElementById('endNotice').innerHTML = 'Work time ended, break time starts';
    audio.play();
    timer2.start(breakTime*60);
});

var timer2 = new Timer({
    tick : 1,
    ontick : function (sec) {
        var mins = Math.floor(sec/60000);
        var secs = Math.floor(((sec % 60000)/1000).toFixed(0));
        $timeDisplay.innerHTML = secs !== 60 ? mins + ':' + (secs <10 ? '0' : '') + secs : mins+1 + ':00';;
    },
    onstart : function() {
        $timeDisplay.innerHTML = 'Break Begins!';
    }
});

timer2.on('end', function () {
    document.getElementById('endNotice').innerHTML = 'Break time ended';
    $timeDisplay.innerHTML = 0;
    audio.play();
    timer2.off();
});

document.getElementById('startStop').onclick = function(){
  if(timer.getStatus() === 'initialized' && timer2.getStatus() !== 'started' || timer.getStatus() === 'initialized' && timer2.getStatus() !== 'paused'){
    timer.start(workTime*60);
  } else if (timer.getStatus() === 'started') timer.pause();
  else if(timer.getStatus() === 'paused') timer.start();
  else if(timer2.getStatus() === 'started') timer2.pause();
  else if(timer2.getStatus() === 'paused') timer2.start();
}

document.getElementById('reset').onclick = function(){
 location.reload();
}










