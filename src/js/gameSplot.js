let clickCount = 0; // Inicializa o contador de cliques

// Seleciona os elementos
const button = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const div = document.getElementById("modal");

// Adiciona o evento de clique ao botão
button.addEventListener("click", () => {
  clickCount++; // Incrementa o contador
  if (clickCount === 7) {
    div.classList.add("active"); // Remove a classe 'hidden' da div
    alert("Parabens :D! Agora se diverta-se!"); // Mensagem opcional
  }
});

closeModal.addEventListener("click", () => {
  div.classList.remove("active");
  clickCount = 0;
});
