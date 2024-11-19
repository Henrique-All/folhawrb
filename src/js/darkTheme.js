// Seleciona o checkbox e o elemento body (html)
const $checkbox = document.querySelector("#on");
const $body = document.querySelector("html");

// Verifica o estado atual armazenado no localStorage
const currentMode = localStorage.getItem("theme");

// Se já houver uma preferência salva, aplica a classe correspondente
if (currentMode === "dark") {
  $body.classList.add("light");
  $checkbox.checked = true;
} else {
  $body.classList.remove("light");
  $checkbox.checked = false;
}

// Adiciona o evento de mudança do checkbox
$checkbox.addEventListener("change", () => {
  // Alterna entre os modos claro e escuro
  if ($checkbox.checked) {
    $body.classList.add("light");
    localStorage.setItem("theme", "dark"); // Armazena a escolha no localStorage
  } else {
    $body.classList.remove("light");
    localStorage.setItem("theme", "light"); // Armazena a escolha no localStorage
  }
});
