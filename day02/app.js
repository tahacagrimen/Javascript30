const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function handDeg() {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let hourDeg = hour * 30 + (minute * 6) / 10 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  let minDeg = minute * 6 + 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;

  let secDeg = second * 6 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  console.log("hi");
}

setInterval(handDeg, 1000);
