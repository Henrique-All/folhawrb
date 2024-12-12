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

  document.getElementById("home").innerHTML = `
  <div class="home">
     <div class="content"> 
       <img src="./src/images/logo.png" alt="" />
       <p>SIGEP</p>
     </div>
     <h1>Bem Vindo ao Portal Sigep <p>4.0<i class='bx bx-check-double' style="color: rgb(0, 255, 0); font-size: 15px;"></i></p></h1>
     <h3>Tudo em um só lugar, de maneira prática e rápida, feito para facilitar e agilizar.</h3>
   </div>`;

  // Renderizar prefeituras
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
      const tag = test.tag;

      return `
        <a class="card" href="${tag === tags[0].on ? test.url : "#"}" target="${
        tag === tags[0].on ? "_blank" : "_self"
      }" style="width: 350px; background: ${test.color}">
      ${
        tag === tags[0].on
          ? `<div class="card-header" style="background: ${test.color}">
           <img src="./src/images/logo.png" />`
          : ""
      }
            <p>${tag === tags[0].on ? "SIGEP" : ""}</p>
          </div>
          <p class="name" style="margin: 0 0 0 10px">${
            tag === tags[0].on ? test.nome : "Offline"
          }</p>
          <div class="tags">
           ${test.tag3 ? `<p class="tags-test">${test.tag3}</p>` : ""}
            ${
              tag === tags[0].on
                ? `<p class="tags-stts on">${tags[0].on}</p>`
                : ""
            }
          ${
            tag === tags[0].off
              ? `<p class="tags-stts off">${tags[0].off}</p>`
              : ""
          }
           
            
          </div>
          <p class="card-footer">${test.url}</p>
        </a>
      `;
    })
    .join("");
}

// Chamar renderLinks
renderLinks("");

document.getElementById("buscar-nome").addEventListener("input", (e) => {
  renderLinks(e.target.value); // Atualiza a renderização conforme o valor digitado
});

function limparInput() {
  const input = document.getElementById("buscar-nome");
  input.value = ""; // Limpa o valor do campo
  renderLinks(""); // Atualiza a renderização com valor vazio
}

// Adicionar um botão para acionar a função de limpar
document.getElementById("limpar-busca").addEventListener("click", limparInput);

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
