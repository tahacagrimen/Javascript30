const keys = document.querySelector(".keys");
const key = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");

console.log(key);

document.addEventListener("keydown", function (e) {
  play(e.code);
  updateBorder(e.code);
});

function play(keycode) {
  let x = document.querySelector(`audio[data-key="${keycode}"]`);
  x.currentTime = 0;
  x.play();
}

function updateBorder(keycode) {
  let x = document.querySelector(`div[data-key="${keycode}"]`);
  let arr = [...key];
  x.classList.add("playing");
  arr = arr
    .filter((item) => item != x)
    .map((item) => item.classList.remove("playing"));
}
