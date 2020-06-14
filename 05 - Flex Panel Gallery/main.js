const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  e.currentTarget.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    e.currentTarget.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));