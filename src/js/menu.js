// Função para alternar o menu (abrir e fechar)
const toggle = document.getElementById("menu");
const menu = document.getElementById("tabs");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

// Fechar o menu ao clicar no botão de fechar
const closeToggle = document.getElementById("menu-close");

closeToggle.addEventListener("click", () => {
  menu.classList.remove("active");
  toggle.classList.remove("active");
});
