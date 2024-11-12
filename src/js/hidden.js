const tabPrefeituras = document.getElementById("tab-prefeituras");
const tabCamaras = document.getElementById("tab-camaras");
const tabOutros = document.getElementById("tab-outros");
const tabContabil = document.getElementById("tab-contabil");
const tabPatrimonio = document.getElementById("tab-patrimonio");
const tabSaude = document.getElementById("tab-saude");
const tabPainel = document.getElementById("tab-painel");
const tabFerramentas = document.getElementById("tab-ferramentas");

const divPrefeituras = document.getElementById("h-prefeituras");
const divCamaras = document.getElementById("h-camaras");
const divOutros = document.getElementById("h-outros");
const divContabil = document.getElementById("h-contabil");
const divPatrimonio = document.getElementById("h-patrimonio");
const divSaude = document.getElementById("h-saude");
const divPainel = document.getElementById("h-painel");
const divFerramentas = document.getElementById("h-ferramentas");

// Função para esconder todas as divs e mostrar apenas a selecionada
function showTab(tab) {
  divPrefeituras.classList.add("hidden");
  divCamaras.classList.add("hidden");
  divOutros.classList.add("hidden");
  divContabil.classList.add("hidden");
  divPatrimonio.classList.add("hidden");
  divSaude.classList.add("hidden");
  divPainel.classList.add("hidden");
  divFerramentas.classList.add("hidden");

  if (tab === "h-prefeituras") {
    divPrefeituras.classList.remove("hidden");
  } else if (tab === "h-camaras") {
    divCamaras.classList.remove("hidden");
  } else if (tab === "h-outros") {
    divOutros.classList.remove("hidden");
  } else if (tab === "h-contabil") {
    divContabil.classList.remove("hidden");
  } else if (tab === "h-patrimonio") {
    divPatrimonio.classList.remove("hidden");
  } else if (tab === "h-saude") {
    divSaude.classList.remove("hidden");
  } else if (tab === "h-painel") {
    divPainel.classList.remove("hidden");
  } else if (tab === "h-ferramentas") {
    divFerramentas.classList.remove("hidden");
  }
}

// Event listeners para cada botão
tabPrefeituras.addEventListener("click", () => showTab("h-prefeituras"));
tabCamaras.addEventListener("click", () => showTab("h-camaras"));
tabOutros.addEventListener("click", () => showTab("h-outros"));
tabContabil.addEventListener("click", () => showTab("h-contabil"));
tabPatrimonio.addEventListener("click", () => showTab("h-patrimonio"));
tabSaude.addEventListener("click", () => showTab("h-saude"));
tabPainel.addEventListener("click", () => showTab("h-painel"));
tabFerramentas.addEventListener("click", () => showTab("h-ferramentas"));

// Exibe a primeira aba por padrão
showTab("h-prefeituras");
