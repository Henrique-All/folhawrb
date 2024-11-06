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

  // Renderizar prefeituras
  document.getElementById("prefeituras").innerHTML = prefeiturasFiltradas
    .map((prefeitura) => {
      return `
        <a class="card" href="${prefeitura.url}" target="_blank">
          <div class="card-header">
            <p>GESTÂO PUBLICA</p>
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
            <p>GESTÂO PUBLICA</p>
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
            <p>GESTÂO PUBLICA</p>
          </div>
          <p class="name">${outros.nome}</p>
        </a>
      `;
    })
    .join("");

  document.getElementById("contabil").innerHTML = contabilFiltrados
    .map((contabil) => {
      return `
        <a class="card" href="${contabil.url}" target="_blank">
          <div class="card-header">
            <p>GESTÂO PUBLICA</p>
          </div>
          <p class="name">${contabil.nome}</p>
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
