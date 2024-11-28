// Variáveis para as tabs
const tabPrefeituras = document.getElementById("tab-prefeituras");
const tabCamaras = document.getElementById("tab-camaras");
const tabOutros = document.getElementById("tab-outros");
const tabContabil = document.getElementById("tab-contabil");
const tabPatrimonio = document.getElementById("tab-patrimonio");
const tabSaude = document.getElementById("tab-saude");
const tabPainel = document.getElementById("tab-painel");
const tabFerramentas = document.getElementById("tab-ferramentas");
const tabTcm = document.getElementById("tab-tcm");
const tabTest = document.getElementById("tab-test");
const tabJson = document.getElementById("tab-json");
const tabTcmFiscaliza = document.getElementById("tab-tcmfiscaliza");
const tabVoip = document.getElementById("tab-voip");

// Variáveis para as divs
const divHome = document.getElementById("home");
const divPrefeituras = document.getElementById("h-prefeituras");
const divCamaras = document.getElementById("h-camaras");
const divOutros = document.getElementById("h-outros");
const divContabil = document.getElementById("h-contabil");
const divPatrimonio = document.getElementById("h-patrimonio");
const divSaude = document.getElementById("h-saude");
const divPainel = document.getElementById("h-painel");
const divFerramentas = document.getElementById("h-ferramentas");
const divTcm = document.getElementById("h-tcm");
const divTest = document.getElementById("h-test");
const divJson = document.getElementById("h-json");
const divTcmFiscaliza = document.getElementById("h-tcmfiscaliza");
const divVoip = document.getElementById("h-voip");

// Função para esconder todas as divs e mostrar apenas a selecionada
function showTab(tab) {
  // Esconde todas as divs
  divPrefeituras.classList.add("hidden");
  divCamaras.classList.add("hidden");
  divOutros.classList.add("hidden");
  divContabil.classList.add("hidden");
  divPatrimonio.classList.add("hidden");
  divSaude.classList.add("hidden");
  divPainel.classList.add("hidden");
  divFerramentas.classList.add("hidden");
  divTcm.classList.add("hidden");
  divTest.classList.add("hidden");
  divJson.classList.add("hidden");
  divTcmFiscaliza.classList.add("hidden");
  divHome.classList.add("hidden");
  divVoip.classList.add("hidden");

  // Exibe a div correspondente à tab
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
  } else if (tab === "h-tcm") {
    divTcm.classList.remove("hidden");
  } else if (tab === "h-test") {
    divTest.classList.remove("hidden");
  } else if (tab === "h-json") {
    divJson.classList.remove("hidden");
  } else if (tab === "h-tcmfiscaliza") {
    divTcmFiscaliza.classList.remove("hidden");
  } else if (tab === "home") {
    divHome.classList.remove("hidden");
  } else if (tab === "h-voip") {
    divVoip.classList.remove("hidden");
  }

  // Fecha o menu se ele estiver aberto
  if (window.innerWidth <= 400) {
    // Fecha o menu se ele estiver aberto
    const menu = document.getElementById("tabs");
    const toggle = document.getElementById("menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.classList.remove("active");
    }
  }
}

// Event listeners para cada botão de tab
tabPrefeituras.addEventListener("click", () => showTab("h-prefeituras"));
tabCamaras.addEventListener("click", () => showTab("h-camaras"));
tabOutros.addEventListener("click", () => showTab("h-outros"));
tabContabil.addEventListener("click", () => showTab("h-contabil"));
tabPatrimonio.addEventListener("click", () => showTab("h-patrimonio"));
tabSaude.addEventListener("click", () => showTab("h-saude"));
tabPainel.addEventListener("click", () => showTab("h-painel"));
tabFerramentas.addEventListener("click", () => showTab("h-ferramentas"));
tabTcm.addEventListener("click", () => showTab("h-tcm"));
tabTest.addEventListener("click", () => showTab("h-test"));
tabJson.addEventListener("click", () => showTab("h-json"));
tabTcmFiscaliza.addEventListener("click", () => showTab("h-tcmfiscaliza"));
tabVoip.addEventListener("click", () => showTab("h-voip"));

// Exibe a primeira aba por padrão
showTab("home");

// Função para alternar o menu (abrir e fechar)
const toggle = document.getElementById("menu");
const menu = document.getElementById("tabs");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

// Fechar o menu ao clicar no botão de fechar
const closeToggle = document.getElementById("menu-close");

closeToggle.addEventListener("click", () => {
  menu.classList.remove("active");
  toggle.classList.remove("active");
});
