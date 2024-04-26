let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");
let seconds = 0;
let minutes = 0;
let hours = 0;
let startInterval;
let abc = setInterval(function () {
    if (seconds <= 9) {
        secondHand.innerHTML = '0' + seconds;
    }
    if (minutes <=9) {
        minuteHand.innerHTML = '0' + minutes;
    }
    if (hours <=9) {
        hourHand.innerHTML = '0' + hours;
    }
    if (seconds <= 9) {
        secondHand.innerHTML = '0' + seconds;
    }
}, 10);
function startWatch() {
    startInterval = setInterval(function () {
        seconds += 1;
        secondHand.innerHTML = seconds;
        minuteHand.innerHTML = minutes;
        hourHand.innerHTML = hours;
        if (seconds <= 9) {
            secondHand.innerHTML = '0' + seconds;
        }
        if (minutes <=9) {
            minuteHand.innerHTML = '0' + minutes;
        }
        if (hours <=9) {
            hourHand.innerHTML = '0' + hours;
        }
        if (seconds <= 9) {
            secondHand.innerHTML = '0' + seconds;
        }
        if (seconds > 59) {
            seconds = 0;
            secondHand.innerHTML = '00';
            minutes += 1;
            minuteHand.innerHTML = minutes;
        }
        if (minutes > 59) {
            minutes = 0;
            minuteHand.innerHTML = '00';
            hours += 1;
            hours.innerHTML = minutes;
        }
    }, 1000)
    // seconds += 1;
}
function stopWatch() {
    clearInterval(startInterval)
}
function resetWatch() {
    clearInterval(startInterval)
    seconds = 0;
    secondHand.innerHTML = 0;
}