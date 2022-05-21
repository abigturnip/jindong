var lis = document.querySelector(".circular").querySelectorAll("li");
var div = document.querySelector(".toopp");
var index = 1;
var Interval;

for (var i = 0; i < lis.length; i++) {

    lis[i].addEventListener("mouseover", function () {
        clearInterval(Interval);
        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "hsla(0,0%,100%,.6)";
        }
        this.style.backgroundColor = "#c82519";
        div.style.backgroundImage = "url(images/" + this.tabIndex + ".jpg)";
        index = this.tabIndex;
    });

    lis[i].addEventListener("mouseout", function () {
        Interval = setInterval(autoloop, 2000);
    })
}

function autoloop() {
    if (index == 3) {
        index = 1;
    } else {
        index++;
    }
    div.style.backgroundImage = "url(images/" + index + ".jpg)";
    for (var j = 0; j < lis.length; j++) {
        lis[j].style.backgroundColor = "hsla(0,0%,100%,.6)";
    }
    lis[index - 1].style.backgroundColor = "#c82519";
}
Interval = setInterval(autoloop, 2000);


// 倒计时

var h = document.querySelector(".h");
var m = document.querySelector(".m");
var s = document.querySelector(".s");
var Time = +new Date("2022/5/22 14:44:00");
countDown();
function countDown() {
    var nowTime = +new Date(); //获得时间戳
    if (Time > nowTime) {
        var inputTime = (Time - nowTime) / 1000; //获得总秒数
        var hours = parseInt((inputTime / 60 / 60) % 24); //时
        hours = hours < 10 ? "0" + hours : hours;
        var min = parseInt((inputTime / 60) % 60); //分
        min = min < 10 ? "0" + min : min;
        var Seconds = parseInt(inputTime % 60); //秒
        Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
        h.innerHTML = hours;
        m.innerHTML = min;
        s.innerHTML = Seconds;
        if (h.innerHTML == 00 && s.innerHTML == 00 && s.innerHTML == 00) {
            clearInterval(CountdownEven);
            console.log("已清除");
        }
        var CountdownEven = setInterval(countDown, 1000);
    }
}