// Variáveis para as abas (tabs) e divs
const tabs = {
  "tab-prefeituras": "h-prefeituras",
  "tab-camaras": "h-camaras",
  "tab-outros": "h-outros",
  "tab-contabil": "h-contabil",
  "tab-patrimonio": "h-patrimonio",
  "tab-saude": "h-saude",
  "tab-painel": "h-painel",
  "tab-ferramentas": "h-ferramentas",
  "tab-tcm": "h-tcm",
  "tab-test": "h-test",
  "tab-json": "h-json",
  "tab-tcmfiscaliza": "h-tcmfiscaliza",
  "tab-voip": "h-voip",
  "tab-home": "home",
};

// Função para esconder todas as divs
function hideAllDivs() {
  Object.values(tabs).forEach((divId) => {
    const div = document.getElementById(divId);
    if (div) div.classList.add("hidden");
  });
}

// Função para mostrar a tab selecionada
function showTab(tabId) {
  hideAllDivs(); // Esconde todas as divs
  const divId = tabs[tabId];
  if (divId) {
    const div = document.getElementById(divId);
    if (div) div.classList.remove("hidden"); // Exibe a div correspondente
  }
}

// Adiciona os event listeners para as abas
Object.keys(tabs).forEach((tabId) => {
  const tab = document.getElementById(tabId);
  if (tab) {
    tab.addEventListener("click", () => showTab(tabId));
  }
});

// Exibe a aba inicial (home)
showTab("tab-home");

// Menu toggle
const toggle = document.getElementById("menu");
const menu = document.getElementById("tabs");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

// Fechar o menu
const closeToggle = document.getElementById("menu-close");
closeToggle.addEventListener("click", () => {
  menu.classList.remove("active");
  toggle.classList.remove("active");
});
