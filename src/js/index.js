function renderLinks() {
  // Renderizar prefeituras
  document.getElementById("prefeituras").innerHTML = prefeituras
    .map((prefeitura) => {
      return `
        <a class="card" href="${prefeitura.url}" target="_blank">
          <div class="card-header">
            <img src="../images/engrenagem.gif" />
            <p>GESTÂO PUBLICA</p>
          </div>
          <p class="name">${prefeitura.nome}</p>
        </a>`;
    })
    .join("");

  // Renderizar câmaras
  document.getElementById("camaras").innerHTML = camaras
    .map((camara) => {
      return `
        <a class="card" href="${camara.url}" target="_blank">
          <div class="card-header">
            <img src="../images/engrenagem.gif" />
            <p>GESTÂO PUBLICA</p>
          </div>
          <p class="name" >${camara.nome}</p>
        </a>`;
    })
    .join("");

  // Renderizar outros
  document.getElementById("outros").innerHTML = outros
    .map((outros) => {
      return `
        <a class="card" href="${outros.url}" target="_blank">
          <div class="card-header">
            <img src="../images/engrenagem.gif" />
            <p>GESTÂO PUBLICA</p>
          </div>
          <p class="name">${outros.nome}</p>
        </a>
      `;
    })
    .join("");
}

renderLinks();
