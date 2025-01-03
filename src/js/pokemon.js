// Carregar a imagem salva no localStorage, se houver
window.onload = function () {
  const imagemSalva = localStorage.getItem("imagemSelecionada");
  if (imagemSalva) {
    document.getElementById("imagemSelecionada").src = imagemSalva;
    const select = document.getElementById("selectImagens");
    select.value = imagemSalva; // Atualiza o valor do select para refletir a imagem salva
  }
};

// Alterar a imagem ao selecionar uma nova
document
  .getElementById("selectImagens")
  .addEventListener("change", function () {
    const imagemSelecionada = this.value;
    document.getElementById("imagemSelecionada").src = imagemSelecionada;

    // Salvar a escolha no localStorage
    localStorage.setItem("imagemSelecionada", imagemSelecionada);
  });

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body; // Seleciona o elemento body
  const temaSelector = document.getElementById("tema-selector"); // Seleciona o select

  // Verifica o tema salvo no localStorage e aplica no body
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme); // Adiciona a classe salva
    temaSelector.value = savedTheme; // Seleciona o valor correspondente no select
  }

  // Adiciona um listener para mudanças no select
  temaSelector.addEventListener("change", function () {
    const selectedClass = this.value;

    // Remove qualquer classe atual do body
    body.className = "";

    if (selectedClass === "padrao") {
      localStorage.removeItem("theme"); // Remove o tema do localStorage se for o padrão
    } else if (selectedClass) {
      body.classList.add(selectedClass); // Adiciona a classe do tema selecionado
      localStorage.setItem("theme", selectedClass); // Salva a classe no localStorage
    }
  });
});
