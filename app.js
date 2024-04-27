let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");
let startButton = document.querySelector(".start-but");
let stopButton = document.querySelector(".stop-but");
let resetButton = document.querySelector(".reset-but");
stopButton.style.display = 'none';
resetButton.style.display = 'none';
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
    startButton.style.display = 'none';
    stopButton.style.display = 'inline';
    resetButton.style.display = 'none';
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
        if (hours > 23) {
            hours = 0;
            hourHand.innerHTML = '00';
        }
    }, 1000)
    // seconds += 1;
}
function stopWatch() {
    startButton.innerHTML = 'Resume';
    startButton.style.display = 'inline';
    stopButton.style.display = 'none';
    resetButton.style.display = 'inline';
    clearInterval(startInterval)
}
function resetWatch() {
    startButton.innerHTML = 'Start';
    startButton.style.display = 'inline';
    stopButton.style.display = 'none';
    resetButton.style.display = 'none';
    clearInterval(startInterval)
    seconds = 0;
    secondHand.innerHTML = 0;
}