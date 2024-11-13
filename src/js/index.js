function filtrarPorNome(criterio) {
  return (array) =>
    array.filter((item) =>
      item.nome.toLowerCase().includes(criterio.toLowerCase())
    );
}

// Função para renderizar
function renderLinks(filtro) {
  // Filtrar os dados
  const prefeiturasFiltradas = filtrarPorNome(filtro)(prefeituras);
  const camarasFiltradas = filtrarPorNome(filtro)(camaras);
  const outrosFiltrados = filtrarPorNome(filtro)(outros);
  const contabilFiltrados = filtrarPorNome(filtro)(contabil);
  const patrimonioFiltrados = filtrarPorNome(filtro)(patrimonio);
  const saudeFiltrados = filtrarPorNome(filtro)(saude);
  const painelFiltrados = filtrarPorNome(filtro)(painel);
  const ferramentasFiltrados = filtrarPorNome(filtro)(ferramentas);
  const testFiltrados = filtrarPorNome(filtro)(test);

  // Renderizar prefeituras
  document.getElementById("prefeituras").innerHTML = prefeiturasFiltradas
    .map((prefeitura) => {
      return `
        <a class="card" href="${prefeitura.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${prefeitura.nome}</p>
        </a>`;
    })
    .join("");

  // Renderizar câmaras
  document.getElementById("camaras").innerHTML = camarasFiltradas
    .map((camara) => {
      return `
        <a class="card" href="${camara.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${camara.nome}</p>
        </a>`;
    })
    .join("");

  // Renderizar outros
  document.getElementById("outros").innerHTML = outrosFiltrados
    .map((outros) => {
      return `
        <a class="card" href="${outros.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${outros.nome}</p>
        </a>
      `;
    })
    .join("");

  // Renderizar Contabil
  document.getElementById("contabil").innerHTML = contabilFiltrados
    .map((contabil) => {
      return `
        <a class="card" href="${contabil.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${contabil.nome}</p>
        </a>
      `;
    })
    .join("");

  // Renderizar Patrimonio
  document.getElementById("patrimonio").innerHTML = patrimonioFiltrados
    .map((patrimonio) => {
      return `
        <a class="card" href="${patrimonio.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${patrimonio.nome}</p>
        </a>
      `;
    })
    .join("");

  // Renderizar Saúde
  document.getElementById("saude").innerHTML = saudeFiltrados
    .map((saude) => {
      return `
        <a class="card" href="${saude.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${saude.nome}</p>
        </a>
      `;
    })
    .join("");

  // Renderizar Dashboard de paciente
  document.getElementById("painel").innerHTML = painelFiltrados
    .map((painel) => {
      return `
        <a class="card" href="${painel.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${painel.nome}</p>
        </a>
      `;
    })
    .join("");

  // Renderizar ferramentas
  document.getElementById("ferramentas").innerHTML = ferramentasFiltrados
    .map((ferramentas) => {
      return `
        <a class="card" href="${ferramentas.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${ferramentas.nome}</p>
        </a>
      `;
    })
    .join("");

  document.getElementById("test").innerHTML = testFiltrados
    .map((test) => {
      // Define as classes diretamente para tag1 e tag2
      const tag1 = test.tag1; // tag1 sempre recebe 'on'
      const tag2 = test.tag2; // tag2 sempre recebe 'off'

      return `
        <a class="card" href="${test.url}" target="_blank" style="width: 350px">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name" style="margin: 0 0 0 10px">${test.nome}</p>
          <div class="tags">
            ${tag1 ? `<p class="tags-stts on">${tag1}</p>` : ""}
            ${tag2 ? `<p class="tags-stts off">${tag2}</p>` : ""}
            ${test.tag3 ? `<p class="tags-test">${test.tag3}</p>` : ""}
          </div>
        </a>
      `;
    })
    .join("");
}

// Chamar renderLinks
renderLinks("");

// Adicionar evento de input
document.getElementById("buscar-nome").addEventListener("input", (e) => {
  renderLinks(e.target.value); // Atualiza a renderização
});

// menu script
document
  .getElementById("btn-municipios")
  .addEventListener("click", function () {
    var acessDiv = document.querySelector(".acess");
    // Alterna a visibilidade do div com a classe 'acess'
    if (acessDiv.style.display === "none" || acessDiv.style.display === "") {
      acessDiv.style.display = "block"; // Exibe a div
    } else {
      acessDiv.style.display = "none"; // Esconde a div
    }
  });

document.getElementById("btn-contabil").addEventListener("click", function () {
  var acessDiv = document.querySelector(".tabscontabil");
  // Alterna a visibilidade do div com a classe 'acess'
  if (acessDiv.style.display === "none" || acessDiv.style.display === "") {
    acessDiv.style.display = "block"; // Exibe a div
  } else {
    acessDiv.style.display = "none"; // Esconde a div
  }
});
document.getElementById("btn-saude").addEventListener("click", function () {
  var acessDiv = document.querySelector(".acess-saude");
  // Alterna a visibilidade do div com a classe 'acess'
  if (acessDiv.style.display === "none" || acessDiv.style.display === "") {
    acessDiv.style.display = "block"; // Exibe a div
  } else {
    acessDiv.style.display = "none"; // Esconde a div
  }
});
