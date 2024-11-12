// dark mode
const $checkbox = document.querySelector("#on");
const $body = document.querySelector("html");

// Adiciona a class quando o checkbox está true e retira quando estiver false
$checkbox.addEventListener("change", () => {
  $body.classList.toggle("dark");
});
