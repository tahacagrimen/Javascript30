const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  if (e.shifKey && this.checked) {
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
