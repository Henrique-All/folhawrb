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
