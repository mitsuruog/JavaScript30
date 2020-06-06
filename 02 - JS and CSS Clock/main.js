const $secondHand = document.querySelector(".second-hand");
const $minHand = document.querySelector(".min-hand");
const $hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const secounds = now.getSeconds();
  const secoundsDegree = ((secounds / 60) * 360) + 90;
  $secondHand.style.transform = `rotate(${secoundsDegree}deg)`

  const mins = now.getMinutes();
  const minssDegree = ((mins / 60) * 360) + 90;
  $minHand.style.transform = `rotate(${minssDegree}deg)`

  const hours = now.getHours();
  const hoursDegree = ((hours / 60) * 360) + 90;
  $hourHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(() => setDate(), 1000);