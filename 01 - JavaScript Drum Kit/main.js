function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const $key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio !== null) {
    audio.currentTime = 0;
    audio.play();
  }
  if ($key !== null) {
    $key.classList.add("playing");
  }
}

function stopTransition(e) {
  if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
  }
}

window.addEventListener("keydown", playSound);

const $keys = document.querySelectorAll("div[data-key]");
$keys.forEach($key => $key.addEventListener("transitionend", stopTransition));