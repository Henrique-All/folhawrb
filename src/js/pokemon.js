// Carregar a imagem salva no localStorage, se houver
window.onload = function () {
  const imagemSalva = localStorage.getItem("imagemSelecionada");
  const select = document.getElementById("selectImagens");
  const imagemElement = document.getElementById("imagemSelecionada");

  if (imagemSalva) {
    if (imagemSalva === "remover") {
      imagemElement.style.display = "none"; // Oculta a imagem se a última seleção foi "remover"
    } else {
      imagemElement.src = imagemSalva;
      imagemElement.style.display = "block"; // Garante que a imagem esteja visível
    }
    select.value = imagemSalva; // Atualiza o valor do select para refletir a imagem salva
  }
};

// Alterar a imagem ao selecionar uma nova
document
  .getElementById("selectImagens")
  .addEventListener("change", function () {
    const select = this;
    const imagemSelecionada = select.value;
    const imagemElement = document.getElementById("imagemSelecionada");

    imagemElement.src = imagemSelecionada; // Atualiza o src da imagem

    // Exibe o texto da opção selecionada no select (já automático no HTML)
    const selectedOptionText = select.options[select.selectedIndex].text;

    // Salvar a escolha no localStorage
    localStorage.setItem("imagemSelecionada", imagemSelecionada);

    console.log("Texto selecionado:", selectedOptionText); // Apenas para depuração, se necessário
  });

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const temaSelector = document.getElementById("tema-selector");

  // Verifica o tema salvo no localStorage e aplica no body
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    temaSelector.value = savedTheme;
  }

  // Adiciona um listener para mudanças no select
  temaSelector.addEventListener("change", function () {
    const selectedClass = this.value;

    body.className = ""; // Remove qualquer classe atual do body

    if (selectedClass === "padrao") {
      localStorage.removeItem("theme");
    } else if (selectedClass) {
      body.classList.add(selectedClass);
      localStorage.setItem("theme", selectedClass);
    }
  });
});
