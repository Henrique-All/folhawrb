const tabPrefeituras = document.getElementById("tab-prefeituras");
const tabCamaras = document.getElementById("tab-camaras");
const tabOutros = document.getElementById("tab-outros");

const divPrefeituras = document.getElementById("h-prefeituras");
const divCamaras = document.getElementById("h-camaras");
const divOutros = document.getElementById("h-outros");

// Função para esconder todas as divs e mostrar apenas a selecionada
function showTab(tab) {
  divPrefeituras.classList.add("hidden");
  divCamaras.classList.add("hidden");
  divOutros.classList.add("hidden");

  if (tab === "h-prefeituras") {
    divPrefeituras.classList.remove("hidden");
  } else if (tab === "h-camaras") {
    divCamaras.classList.remove("hidden");
  } else if (tab === "h-outros") {
    divOutros.classList.remove("hidden");
  }
}

// Event listeners para cada botão
tabPrefeituras.addEventListener("click", () => showTab("h-prefeituras"));
tabCamaras.addEventListener("click", () => showTab("h-camaras"));
tabOutros.addEventListener("click", () => showTab("h-outros"));

// Exibe a primeira aba por padrão
showTab("h-prefeituras");
