let clickCount = 0; // Inicializa o contador de cliques

// Seleciona os elementos
const button = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const closeP = document.getElementById("close-gameP");
const closeV = document.getElementById("close-gameV");
const closeS = document.getElementById("close-gameS");
const div = document.getElementById("modal");
const paciencia = document.getElementById("paciencia");
const velha = document.getElementById("velha");
const snaker = document.getElementById("snake");
const btPaciencia = document.getElementById("bt-paciencia");
const btVelha = document.getElementById("bt-velha");
const btSnaker = document.getElementById("bt-snake");

// Adiciona o evento de clique ao botão
button.addEventListener("click", () => {
  clickCount++; // Incrementa o contador
  if (clickCount === 1) {
    div.classList.add("active"); // Remove a classe 'hidden' da div
  }
});

closeModal.addEventListener("click", () => {
  div.classList.remove("active");
  paciencia.classList.add("hidden");
  snaker.classList.add("hidden");
  velha.classList.add("hidden");
  btVelha.classList.remove("hidden");
  btPaciencia.classList.remove("hidden");
  clickCount = 0;
});

btPaciencia.addEventListener("click", () => {
  paciencia.classList.remove("hidden");
  btVelha.classList.add("hidden");
  btPaciencia.classList.add("hidden");
  btSnaker.classList.add("hidden");
});

btVelha.addEventListener("click", () => {
  velha.classList.remove("hidden");
  btVelha.classList.add("hidden");
  btPaciencia.classList.add("hidden");
  btSnaker.classList.add("hidden");
});

btSnaker.addEventListener("click", () => {
  snaker.classList.remove("hidden");
  btVelha.classList.add("hidden");
  btSnaker.classList.add("hidden");
  btPaciencia.classList.add("hidden");
});

closeP.addEventListener("click", () => {
  paciencia.classList.add("hidden");
  btVelha.classList.remove("hidden");
  btPaciencia.classList.remove("hidden");
  btSnaker.classList.remove("hidden");
});

closeV.addEventListener("click", () => {
  velha.classList.add("hidden");
  btVelha.classList.remove("hidden");
  btPaciencia.classList.remove("hidden");
  btSnaker.classList.remove("hidden");
});

closeS.addEventListener("click", () => {
  snaker.classList.add("hidden");
  btVelha.classList.remove("hidden");
  btPaciencia.classList.remove("hidden");
  btSnaker.classList.remove("hidden");
});
