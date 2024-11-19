// Função para normalizar o texto
function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .toLowerCase();
}

// Função para filtrar por nome
function filtrarPorNome(criterio) {
  const normalizedCriterio = normalizeText(criterio);
  return (array) =>
    array.filter((item) =>
      normalizeText(item.nome).includes(normalizedCriterio)
    );
}

// Função para renderizar links de uma categoria
function renderLinksDeCategoria(categoria, categoriaFiltrada) {
  document.getElementById(categoria).innerHTML = categoriaFiltrada
    .map((item) => {
      return `
        <a class="card" href="${item.url}" target="_blank">
          <div class="card-header">
            <img src="${item.img || "./src/images/logo.png"}" />
          </div>
          <p class="name">${item.nome}</p>
          ${
            item.tag1 || item.tag2 || item.tag3
              ? `
            <div class="tags">
              ${item.tag1 ? `<p class="tags-stts on">${item.tag1}</p>` : ""}
              ${item.tag2 ? `<p class="tags-stts off">${item.tag2}</p>` : ""}
              ${item.tag3 ? `<p class="tags-test">${item.tag3}</p>` : ""}
            </div>`
              : ""
          }
        </a>`;
    })
    .join("");
}

// Função para renderizar todas as categorias
function renderLinks(filtro) {
  // Definir as categorias e suas listas
  const categorias = [
    { name: "prefeituras", array: prefeituras },
    { name: "camaras", array: camaras },
    { name: "outros", array: outros },
    { name: "contabil", array: contabil },
    { name: "patrimonio", array: patrimonio },
    { name: "saude", array: saude },
    { name: "painel", array: painel },
    { name: "ferramentas", array: ferramentas },
    { name: "test", array: test },
  ];

  // Limpar o conteúdo inicial da página
  document.getElementById("home").innerHTML = `
    <div class="home">
      <img src="./src/images/logo.png" alt="" />
      <p>Portal SIGEP &#128187;</p>
    </div>`;

  // Filtrar e renderizar cada categoria
  categorias.forEach(({ name, array }) => {
    const filteredItems = filtrarPorNome(filtro)(array);
    renderLinksDeCategoria(name, filteredItems);
  });
}

// Adicionar evento de input para buscar por nome
document.getElementById("buscar-nome").addEventListener("input", (e) => {
  renderLinks(e.target.value); // Atualiza a renderização com o filtro aplicado
});

// Chamar renderLinks inicialmente com filtro vazio
renderLinks("");

// menu script
// Função para esconder todas as divs
function hideAllDivs() {
  const allDivs = document.querySelectorAll(
    ".acess, .tabscontabil, .acess-saude, .acess-ferramentas"
  );
  allDivs.forEach(function (div) {
    div.style.display = "none";
  });
}

// Função genérica para alternar a visibilidade das divs
function toggleDivVisibility(buttonId, divClass) {
  document.getElementById(buttonId).addEventListener("click", function () {
    const acessDiv = document.querySelector(divClass);

    // Se a div já estiver visível, esconda-a; caso contrário, exiba-a e esconda as outras
    if (acessDiv.style.display === "block") {
      acessDiv.style.display = "none"; // Esconde a div se já estiver visível
    } else {
      hideAllDivs(); // Esconde todas as outras divs
      acessDiv.style.display = "block"; // Exibe a div correspondente
    }
  });
}

// Adiciona os eventos para cada botão e a div correspondente
toggleDivVisibility("bt-municipios", ".acess");
toggleDivVisibility("bt-contabil", ".tabscontabil");
toggleDivVisibility("bt-saude", ".acess-saude");
toggleDivVisibility("bt-ferramentas", ".acess-ferramentas");
