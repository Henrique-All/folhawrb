let clickCount = 0; // Inicializa o contador de cliques

// Seleciona os elementos
const button = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const div = document.getElementById("modal");

// Adiciona o evento de clique ao botão
button.addEventListener("click", () => {
  div.classList.add("active");
});

closeModal.addEventListener("click", () => {
  div.classList.remove("active");
});
