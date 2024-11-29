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

const abaContainer = document.getElementById("aba-container");
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

function addTabButton(tabName) {
  // Verifica se o botão já existe
  let button = document.getElementById(`btn-${tabName}`);
  if (!button) {
    // Cria o botão principal
    button = document.createElement("div");
    button.id = `btn-${tabName}`;
    button.className = "tab-button"; // Classe para estilização
    button.textContent =
      tabName.charAt(0).toUpperCase() + tabName.slice(1).toLowerCase(); // Primeira letra maiúscula e o resto minúsculo

    // Cria o botão de fechar (ícone ou texto)
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "×"; // Ícone de fechar
    closeButton.title = "Fechar"; // Texto ao passar o mouse

    // Adiciona o evento para fechar o botão e a aba correspondente
    closeButton.addEventListener("click", (e) => {
      e.preventDefault(); // Evita comportamentos padrão
      e.stopPropagation(); // Impede conflitos de eventos
      button.remove(); // Remove o botão
      const relatedDiv = document.getElementById(`h-${tabName.toLowerCase()}`);
      if (relatedDiv) relatedDiv.classList.add("hidden"); // Oculta a aba correspondente

      // Verifica se ainda existem botões de tab
      const remainingTabs = document.querySelectorAll(".tab-button");

      // Se não houver mais botões de tab, exibe a tela Home
      if (remainingTabs.length === 0) {
        showTab("home"); // Exibe a tela Home
      }
    });

    // Adiciona o botão de fechar ao botão principal
    button.appendChild(closeButton);

    // Adiciona um evento ao botão principal para alternar para a aba correspondente
    button.addEventListener("click", () => {
      showTab(`h-${tabName.toLowerCase()}`);
    });

    // Adiciona o botão ao contêiner
    abaContainer.appendChild(button);
  }

  // Define o botão como ativo
  setActiveButton(button);
}

// Função para exibir a Home (caso não haja mais botões de tab)
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
  if (tab === "home") {
    divHome.classList.remove("hidden");
  } else {
    // Exibe a aba correspondente ao tab
    const divToShow = document.getElementById(tab);
    if (divToShow) {
      divToShow.classList.remove("hidden");
      addTabButton(tab.replace("h-", "").toUpperCase()); // Adiciona o botão correspondente à aba
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

function setActiveButton(button) {
  // Remove a classe "active" de todos os botões
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Adiciona a classe "active" ao botão atual
  button.classList.add("active");
}
