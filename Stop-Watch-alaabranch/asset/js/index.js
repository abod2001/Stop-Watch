let count = 0;
let min = 0;
let sec = 0;
let millsec = 0;
let interval = 0;
let timeRunning = false;
//start
let startTimer = () => {
  count++;

  min = Math.floor(count / 100 / 60);
  sec = Math.floor(count / 100 - min * 60);
  millsec = Math.floor(count - sec * 100 - min * 6000);

  document.getElementById("min").textContent = leadingZero(min);
  document.getElementById("sec").textContent = leadingZero(sec);
  document.getElementById("m-sec").textContent = leadingZero(millsec);

  if (sec == 0) {
    document.getElementById("sec").style.color = "#09000a";
    document.getElementById("min").style.color = "#09000a";
    document.getElementById("m-sec").style.color = "#09000a";
  } else if (sec == 10) {
    document.getElementById("sec").style.color = "#2c0030";
    document.getElementById("min").style.color = "#2c0030";
    document.getElementById("m-sec").style.color = "#2c0030";
  } else if (sec == 20) {
    document.getElementById("sec").style.color = "#54005c";
    document.getElementById("min").style.color = "#54005c";
    document.getElementById("m-sec").style.color = "#54005c";
  } else if (sec == 30) {
    document.getElementById("sec").style.color = "#62006b";
    document.getElementById("min").style.color = "#62006b";
    document.getElementById("m-sec").style.color = "#62006b";
  } else if (sec == 40) {
    document.getElementById("sec").style.color = "#7c0087";
    document.getElementById("min").style.color = "#7c0087";
    document.getElementById("m-sec").style.color = "#7c0087";
  } else if (sec == 50) {
    document.getElementById("sec").style.color = "#a902b8";
    document.getElementById("min").style.color = "#a902b8";
    document.getElementById("m-sec").style.color = "#a902b8";
  } else if (sec == 60) {
    document.getElementById("sec").style.color = "#c900db";
    document.getElementById("min").style.color = "#c900db";
    document.getElementById("m-sec").style.color = "#c900db";
  }
};

let btnStart = document.getElementById("start-btn");
btnStart.addEventListener("click", function () {
  if (!timeRunning) {
    interval = setInterval(startTimer, 10);
    timeRunning = true;
  } else {
    console.log("The timer has already started");
  }
});

//leading 0
let leadingZero = (time) => {
  if (time <= 9) {
    return "0" + time;
  } else {
    return time;
  }
};

//stop btn

let btnStop = document.getElementById("stop-btn");
btnStop.addEventListener("click", function () {
  clearInterval(interval); //stop the timer
});

//reset btn
let btnReset = document.getElementById("Reset-btn");
btnReset.addEventListener("click", function () {
  clearInterval(interval); //stop the timer
  count = 0;
  min = 0;
  sec = 0;
  millsec = 0;
  interval = 0;
  timeRunning = false;
  document.getElementById("min").textContent = "00";
  document.getElementById("sec").textContent = "00";
  document.getElementById("m-sec").textContent = "00";
});

//timer

function countDown() {
  let startCount = document.getElementById("inputCount").value;
  let time = startCount * 60;
  if (startCount >= 1) {
    let countEl = document.getElementById("countdown");
    if (!timeRunning) {
      interval = setInterval(updateCount, 1000);
      timeRunning = true;
    } else if (interval === 0) {
      timeRunning = false;
    } else {
      console.log("The timer has already started");
    }

    let btnReset = document.getElementById("resetTimerbtn");
    btnReset.addEventListener("click", function () {
      clearInterval(interval); //stop the timer
      count = 0;
      min = 0;
      sec = 0;
      interval = 0;
      timeRunning = false;
      document.getElementById("countdown").textContent = "00:00";
    });

    function updateCount() {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      countEl.textContent = `${minutes}:${seconds}`;
      if (time > 0) {
        time--;
      } else {
        time = 0;
      }
    }
  } else {
    console.log("set value in input");
  }
}
