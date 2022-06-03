const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const color = document.querySelector("#base");
const img = document.querySelector("img");

function newColor() {
  img.style.background = `${this.value}`;
}

function newSpacing() {
  console.log(this.value);
  img.style.padding = `${this.value}px`;
}

function newBlur() {
  img.style.filter = `blur(${this.value}px)`;
}

color.addEventListener("change", newColor);

spacing.addEventListener("input", newSpacing);

blur.addEventListener("input", newBlur);
