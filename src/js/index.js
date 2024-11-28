function filtrarPorNome(criterio) {
  return (array) =>
    array.filter((item) =>
      item.nome
        .normalize("NFD") // Normaliza para a forma decomposicional
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .toLowerCase()
        .includes(
          criterio
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        )
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

  document.getElementById("home").innerHTML = `
     <div class="home">
        <div class="content"> 
          <img src="./src/images/logo.png" alt="" />
          <p>SIGEP</p>
        </div>
        <h1>Bem Vindo ao Portal Sigep <p>v1.3.5 <i class='bx bx-check-double' style="color: rgb(0, 255, 0); font-size: 15px;"></i></p></h1>
        <h3>Tudo em um só lugar, de maneira prática e rápida, feito para facilitar e agilizar.</h3>
        <h2>Versão em React está sendo desenvolvida em breve será lançanda.</h2>
      </div>`;

  document.getElementById("prefeituras").innerHTML = prefeiturasFiltradas
    .map((prefeitura) => {
      return `
        <a class="card" href="${prefeitura.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <p>SIGEP</p>
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
            <img src="${ferramentas.img}" />
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
        <a class="card" href="${
          test.url
        }" target="_blank" style="width: 350px; background: ${test.color}">
          <div class="card-header">
            <img src="./src/images/logo.png" />
            <p>SIGEP</p>
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
// Função para esconder todas as divs
function hideAllDivs() {
  const allDivs = document.querySelectorAll(
    ".acess, .tabscontabil, .acess-saude, .acess-ferramentas"
  );
  allDivs.forEach(function (div) {
    div.style.display = "none";
  });
}

// Evento do botão "bt-municipios"
document.getElementById("bt-municipios").addEventListener("click", function () {
  var acessDiv = document.querySelector(".acess");

  // Se a div já estiver visível, esconda-a; caso contrário, exiba-a e esconda as outras
  if (acessDiv.style.display === "block") {
    acessDiv.style.display = "none"; // Esconde a div se já estiver visível
  } else {
    hideAllDivs(); // Esconde todas as outras divs
    acessDiv.style.display = "block"; // Exibe a div correspondente
  }
});

// Evento do botão "bt-contabil"
document.getElementById("bt-contabil").addEventListener("click", function () {
  var acessDiv = document.querySelector(".tabscontabil");

  // Se a div já estiver visível, esconda-a; caso contrário, exiba-a e esconda as outras
  if (acessDiv.style.display === "block") {
    acessDiv.style.display = "none"; // Esconde a div se já estiver visível
  } else {
    hideAllDivs(); // Esconde todas as outras divs
    acessDiv.style.display = "block"; // Exibe a div correspondente
  }
});

// Evento do botão "bt-saude"
document.getElementById("bt-saude").addEventListener("click", function () {
  var acessDiv = document.querySelector(".acess-saude");

  // Se a div já estiver visível, esconda-a; caso contrário, exiba-a e esconda as outras
  if (acessDiv.style.display === "block") {
    acessDiv.style.display = "none"; // Esconde a div se já estiver visível
  } else {
    hideAllDivs(); // Esconde todas as outras divs
    acessDiv.style.display = "block"; // Exibe a div correspondente
  }
});

// Evento do botão "bt-ferramentas"
document
  .getElementById("bt-ferramentas")
  .addEventListener("click", function () {
    var acessDiv = document.querySelector(".acess-ferramentas");

    // Se a div já estiver visível, esconda-a; caso contrário, exiba-a e esconda as outras
    if (acessDiv.style.display === "block") {
      acessDiv.style.display = "none"; // Esconde a div se já estiver visível
    } else {
      hideAllDivs(); // Esconde todas as outras divs
      acessDiv.style.display = "block"; // Exibe a div correspondente
    }
  });
