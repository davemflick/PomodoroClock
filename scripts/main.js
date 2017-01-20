 var workTime = document.getElementById('workTime').value;
var breakTime = document.getElementById('breakTime').value;
// var timer = document.getElementById('timer').innerHTML;
// var startStop = document.getElementById('startStop');
// var curDate = new Date();
// var sec = curDate.getSeconds();
// var min = curDate.getMinutes();
// var hour = curDate.getHours();
// var curTime = new Object({});

//Allows the Work Time and Break Time to be manipulated by 1.
document.getElementById('workUp').onclick = function(){
document.getElementById('workTime').stepUp();
workTime++;
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
var timer2 = new Timer({
    tick : 1,
    ontick : function (sec) {
        document.getElementById('timer').innerHTML = Math.round(sec/1000);;
    },
    onstart : function() {
        document.getElementById('timer').innerHTML = breakTime;
    }
});

timer2.on('end', function () {
    document.getElementById('endNotice').innerHTML = 'Break time ended';
    document.getElementById('timer').innerHTML = 0;
    timer2.off();
});

var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        document.getElementById('timer').innerHTML = Math.round(sec/1000);;
    },
    onstart : function() {
        document.getElementById('timer').innerHTML = workTime;
    }
});

timer.on('end', function () {
    document.getElementById('endNotice').innerHTML = 'Work time ended, break time starts';
    timer2.start(breakTime);
});



document.getElementById('startStop').onclick = function(){
  timer.start(workTime);
};



// BASIC FRAMEWORK FROM API

// var timer = new Timer({
//     tick : 1,
//     ontick : function (sec) {
//         console.log('interval', sec);
//     },
//     onstart : function() {
//         console.log('timer started');
//     }
// });



// defining options using on
// timer.on('end', function () {
//     console.log('timer ended');
//     this.start(4).off('end');
// });
















