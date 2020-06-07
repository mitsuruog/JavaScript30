function handleUpdate(e) {
  const $input = e.target;
  const {
    name,
    value
  } = $input;
  const suffix = $input.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
}

const $inputs = document.querySelectorAll(".controls input");
$inputs.forEach($input => $input.addEventListener("input", handleUpdate));
$inputs.forEach($input => $input.addEventListener("mousemove", handleUpdate));