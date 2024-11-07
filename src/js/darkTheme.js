const $checkbox = document.querySelector("#on");
const $body = document.querySelector("html");

$checkbox.addEventListener("change", () => {
  $body.classList.toggle("dark");
});
