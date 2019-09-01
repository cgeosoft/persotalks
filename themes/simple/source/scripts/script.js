var countdownElem = document.getElementById("countdown")
var date = new Date(countdownElem.dataset.date)

var deadline = date.getTime()

setInterval(() => {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    countdownElem.innerText = days + "d " + hours + ":" + minutes + ":" + seconds;
}, 100)
