/* ==========================================================================
   VOLKSWAGEN SALES CONSULTANT & LEAD TRACKING DASHBOARD LOGIC (app.js)
   ========================================================================== */

// Consultora Configuration
const CONSULTANT_CONFIG = {
  name: "Miriane Alves",
  role: "Consultora VIP Volkswagen",
  phone: "5561984420541", // WhatsApp DDI + DDD + Número
  dealership: "Volkswagen Premier Autos",
  city: "Brasília - DF"
};

// Database de Veículos Volkswagen 2026
const VEHICLES_DATA = [
  {
    id: "nivus-highline",
    name: "Nivus Highline 200 TSI",
    category: "suvs",
    categoryLabel: "SUV Coupé",
    price: 139990,
    oldPrice: 145990,
    minInstallment: 1290,
    image: "./assets/vw_nivus.jpg",
    badge: "Mais Vendido 🏆",
    specs: {
      engine: "1.0 Turbo 128cv",
      transmission: "Automático 6v",
      trunk: "415 Litros"
    },
    description: "O SUV Coupé com design moderno, cockpit digital de 10.25' e central VW Play."
  },
  {
    id: "tcross-highline",
    name: "T-Cross Highline 250 TSI",
    category: "suvs",
    categoryLabel: "SUV Premium",
    price: 149990,
    oldPrice: 157990,
    minInstallment: 1490,
    image: "./assets/vw_tcross.jpg",
    badge: "Taxa Zero ⚡",
    specs: {
      engine: "1.4 Turbo 150cv",
      transmission: "Automático 6v",
      trunk: "420 Litros"
    },
    description: "Espaço interno exemplar, teto solar panorâmico Sky View e som Beats."
  },
  {
    id: "polo-gts",
    name: "Polo GTS 250 TSI",
    category: "hatches",
    categoryLabel: "Hatch Esportivo",
    price: 101990,
    oldPrice: 108990,
    minInstallment: 890,
    image: "./assets/vw_polo.jpg",
    badge: "Esportivo 🔥",
    specs: {
      engine: "1.4 Turbo 150cv",
      transmission: "Automático 6v",
      trunk: "300 Litros"
    },
    description: "Faróis IQ.Light Matrix, seletor de modos de condução e bancos esportivos GTS."
  },
  {
    id: "amarok-v6",
    name: "Amarok V6 Extreme 258cv",
    category: "pickups",
    categoryLabel: "Pick-up V6",
    price: 299990,
    oldPrice: 315990,
    minInstallment: 2990,
    image: "./assets/vw_amarok.jpg",
    badge: "Super Força 💪",
    specs: {
      engine: "3.0 V6 Turbo 258cv",
      transmission: "4MOTION 8v",
      trunk: "1.280 kg Carga"
    },
    description: "A picape com motor V6 mais potente da categoria e tração integral 4MOTION."
  },
  {
    id: "taos-highline",
    name: "Novo Volkswagen Taos Highline",
    category: "suvs",
    categoryLabel: "SUV Família VIP",
    price: 186990,
    oldPrice: 194990,
    minInstallment: 1890,
    image: "./assets/vw_taos.jpg",
    badge: "Nota 5 Estrelas ⭐️",
    specs: {
      engine: "1.4 TSI 150cv",
      transmission: "Automático 6v",
      trunk: "498 Litros"
    },
    description: "Máxima segurança com frenagem autônoma de emergência e piloto automático adaptativo."
  }
];

// ESTRUTURA INICIAL DO TRACKER DE DADOS (STORE)
const DEFAULT_TRACKER_DATA = {
  pageViews: 1420,
  whatsappClicks: 184,
  videoViews: 96,
  simulations: 215,
  period: "all",
  channels: {
    btn_whatsapp_float: { title: "Botão Flutuante Fixo (WhatsApp)", subtitle: "Canto Inferior Direito", count: 78, icon: "fa-brands fa-whatsapp text-whatsapp" },
    btn_simulador_send: { title: "Simulador de Financiamento (Proposta)", subtitle: "Resultado Calculado", count: 42, icon: "fa-solid fa-calculator text-cyan" },
    btn_video_hero: { title: "Card de Vídeo / Apresentação (Hero)", subtitle: "Banner Inicial", count: 28, icon: "fa-solid fa-play text-gold" },
    btn_tradein_send: { title: "Avaliação do Usado na Troca", subtitle: "Formulário de Usado", count: 18, icon: "fa-solid fa-car text-cyan" },
    btn_testdrive_send: { title: "Agendamento de Test Drive VIP", subtitle: "Modal de Agendamento", count: 12, icon: "fa-solid fa-calendar-check text-gold" },
    btn_nav_whatsapp: { title: "CTA WhatsApp Topo / Navbar", subtitle: "Cabeçalho Principal", count: 6, icon: "fa-brands fa-whatsapp text-whatsapp" }
  },
  traffic: {
    mobile: 68,
    desktop: 32,
    whatsapp: 45,
    google: 35,
    meta: 20
  },
  activities: [
    { time: "Há 2 min", text: "Novo clique no Botão Flutuante WhatsApp (Nivus Taxa Zero)" },
    { time: "Há 12 min", text: "Simulação de Financiamento realizada: T-Cross Highline (36x)" },
    { time: "Há 28 min", text: "Visualização completa do vídeo de apresentação da Consultora" },
    { time: "Há 45 min", text: "Solicitação de avaliação de usado: Hyundai HB20 (2021)" },
    { time: "Há 1 hora", text: "Agendamento de Test Drive VIP confirmado: Polo GTS" }
  ]
};

// ESTRUTURA INICIAL DE USUÁRIOS (ESPELHADA NA IMAGEM DE REFERÊNCIA)
const DEFAULT_USERS_DATA = [
  { name: "Cleiton Oliveira", login: "CleitonOliver", pass: "admin2026", role: "SUPER ADMIN", status: "Ativo" },
  { name: "Edmilson", login: "edn", pass: "cliente123", role: "CLIENTE", status: "Ativo" },
  { name: "Miriane Alves", login: "miriane.vw", pass: "consultoravw", role: "CONSULTORA VW", status: "Ativo" }
];

// ESTADO GLOBAL DA APLICAÇÃO
let trackerState = loadTrackerState();
let usersState = loadUsersState();
let selectedVehicleForCalc = VEHICLES_DATA[0];
let selectedPlanType = "sempre-vw";
let hiddenPasswordsState = {};

// INICIALIZAÇÃO AO CARREGAR O DOM
document.addEventListener("DOMContentLoaded", () => {
  // Registrar visualização de página automaticamente ao entrar na Landing (Local + Supabase)
  trackPageView();
  if (typeof trackPageviewSupabase === "function") {
    trackPageviewSupabase();
  }

  // Renderizar a Landing Page
  renderCarsGrid(VEHICLES_DATA);
  populateVehicleSelectOptions();
  setupEventListeners();
  updateCalculator();

  // Renderizar a Dashboard
  renderDashboard();
});

// ALTERNAR ENTRE LANDING PAGE E DASHBOARD
function switchViewMode(mode) {
  const landingSec = document.getElementById("section-landing");
  const dashboardSec = document.getElementById("section-dashboard");
  const btnLanding = document.getElementById("btn-mode-landing");
  const btnDash = document.getElementById("btn-mode-dashboard");

  if (mode === "dashboard") {
    landingSec.classList.remove("active");
    dashboardSec.classList.add("active");
    btnLanding.classList.remove("active");
    btnDash.classList.add("active");
    document.body.className = "view-dashboard";
    renderDashboard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    dashboardSec.classList.remove("active");
    landingSec.classList.add("active");
    btnDash.classList.remove("active");
    btnLanding.classList.add("active");
    document.body.className = "view-landing";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ==========================================================
   RASTREAMENTO DE LEADS & MÉTRICAS (SYSTEM LOGIC)
   ========================================================== */
function loadTrackerState() {
  const stored = localStorage.getItem("VW_TRACKER_STORE");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error(e); }
  }
  return JSON.parse(JSON.stringify(DEFAULT_TRACKER_DATA));
}

function saveTrackerState() {
  localStorage.setItem("VW_TRACKER_STORE", JSON.stringify(trackerState));
  renderDashboard();
}

function trackPageView() {
  trackerState.pageViews += 1;
  saveTrackerState();
}

function trackAction(channelKey, description) {
  // Incrementar contadores
  if (channelKey.includes("whatsapp")) {
    trackerState.whatsappClicks += 1;
  }
  if (channelKey.includes("simulador") || channelKey.includes("simular")) {
    trackerState.simulations += 1;
  }

  // Incrementar canal especifico
  if (trackerState.channels[channelKey]) {
    trackerState.channels[channelKey].count += 1;
  }

  // Adicionar ao feed de atividade
  const now = new Date();
  const timeStr = `Hoje às ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  trackerState.activities.unshift({
    time: timeStr,
    text: description
  });

  // Limitar histórico a 15 itens
  if (trackerState.activities.length > 15) {
    trackerState.activities.pop();
  }

  saveTrackerState();
}

function handleVideoPlay() {
  trackerState.videoViews += 1;
  trackAction("btn_video_hero", "Visualização do Vídeo Sales da Consultora");
  alert("▶️ Iniciando Apresentação Exclusiva da Consultora Mariana Silva (VW 2026).");
}

/* ==========================================================
   LANDING PAGE FUNCTIONS
   ========================================================== */
function setupEventListeners() {
  // Rastrear reprodução do vídeo Taos (reproduzir do início 0:00)
  const taosVideo = document.getElementById("hero-taos-video");
  if (taosVideo) {
    let playedOnce = false;
    taosVideo.addEventListener("play", () => {
      if (!playedOnce) {
        playedOnce = true;
        taosVideo.currentTime = 0; // Garante reprodução do início 0:00
        trackerState.videoViews += 1;
        trackAction("btn_video_hero", "Visualização do Vídeo Taos da Consultora Miriane Alves");
      }
    });
  }

  // Inicializar Popup Flutuante do WhatsApp com atraso de 1 segundo
  initWhatsAppPopup();

  // Filtros de Categoria (Garante filtragem 100% precisa em qualquer elemento filho)
  const filterBtns = document.querySelectorAll(".tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      const targetBtn = e.currentTarget || this;
      filterBtns.forEach(b => b.classList.remove("active"));
      targetBtn.classList.add("active");
      const category = targetBtn.getAttribute("data-category");
      filterCars(category);
    });
  });

  // Calculadora Select
  const carSelect = document.getElementById("calc-car-select");
  if (carSelect) {
    carSelect.addEventListener("change", (e) => {
      const found = VEHICLES_DATA.find(v => v.id === e.target.value);
      if (found) {
        selectedVehicleForCalc = found;
        resetEntrySliderLimits();
        updateCalculator();
      }
    });
  }

  // Sliders e Inputs da Calculadora
  const entrySlider = document.getElementById("entry-slider");
  const entryNumber = document.getElementById("entry-number");
  const termSelect = document.getElementById("term-select");

  if (entrySlider && entryNumber) {
    entrySlider.addEventListener("input", (e) => {
      entryNumber.value = e.target.value;
      updateCalculator();
    });

    entryNumber.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value) || 0;
      entrySlider.value = val;
      updateCalculator();
    });
  }

  if (termSelect) {
    termSelect.addEventListener("change", updateCalculator);
  }

  // Pilulas de Planos
  const planPills = document.querySelectorAll(".plan-pill");
  planPills.forEach(pill => {
    pill.addEventListener("click", () => {
      planPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedPlanType = pill.getAttribute("data-plan");
      updateCalculator();
    });
  });

  // Botão Enviar Calculadora para Zap
  const sendCalcZapBtn = document.getElementById("send-calc-whatsapp");
  if (sendCalcZapBtn) {
    sendCalcZapBtn.addEventListener("click", handleSendCalcToWhatsApp);
  }

  // Accordion FAQ (Garante funcionamento 100% ao clicar na pergunta ou no card)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  // Modais de Agendamento Test Drive
  const modalOverlay = document.getElementById("test-drive-modal");
  const modalClose = document.getElementById("modal-close-btn");

  if (modalClose) {
    modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
  }

  const testDriveForm = document.getElementById("test-drive-form");
  if (testDriveForm) {
    testDriveForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const car = document.getElementById("td-car").value;
      const name = document.getElementById("td-name").value;
      const date = document.getElementById("td-date").value;

      trackAction("btn_testdrive_send", `Agendamento Test Drive VIP: ${car} por ${name}`);

      const message = `Olá ${CONSULTANT_CONFIG.name}! Gostaria de agendar um *Test Drive VIP*:\n\n🚗 *Modelo:* ${car}\n👤 *Nome:* ${name}\n📅 *Data Pretendida:* ${date}\n\nConsegue me confirmar o horário?`;
      openWhatsAppLink(message);
      modalOverlay.classList.remove("active");
    });
  }

  // Máscara de Telefone com DDD (XX) XXXXX-XXXX
  const phoneInput = document.getElementById("trade-phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.substring(0, 11);
      if (v.length > 6) {
        e.target.value = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
      } else if (v.length > 2) {
        e.target.value = `(${v.substring(0, 2)}) ${v.substring(2)}`;
      } else if (v.length > 0) {
        e.target.value = `(${v}`;
      }
    });
  }

function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}

  // Formulario Avaliação do Usado com integração Supabase + FormSubmit + WhatsApp
  const tradeInForm = document.getElementById("trade-in-form");
  if (tradeInForm) {
    tradeInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const model = document.getElementById("trade-model").value;
      const year = document.getElementById("trade-year").value;
      const km = document.getElementById("trade-km").value;
      const targetCar = document.getElementById("trade-target").value;
      const phone = document.getElementById("trade-phone") ? document.getElementById("trade-phone").value : "";
      const installment = document.getElementById("trade-installment") ? document.getElementById("trade-installment").value : "";

      const leadData = {
        model,
        year,
        km,
        targetCar,
        phone,
        installment,
        utmSource: getUrlParam("utm_source"),
        utmMedium: getUrlParam("utm_medium"),
        utmCampaign: getUrlParam("utm_campaign")
      };

      trackAction("btn_tradein_send", `Solicitação de Avaliação do Usado: ${model} (${year}) - Tel: ${phone} - Parcela: ${installment}`);

      // 1. Gravacao em Nuvem no Supabase Miriane Alves
      if (typeof saveLeadToSupabase === "function") {
        saveLeadToSupabase(leadData);
      }

      // 2. Envio automatico de contingencia (FormSubmit)
      const fd = new FormData(tradeInForm);
      fetch("https://formsubmit.co/ajax/cleitonoliveira9577%40gmail.com", {
        method: "POST",
        body: fd,
        headers: { "Accept": "application/json" }
      }).catch(err => console.log("FormSubmit lead enviado:", err));

      // 3. Abertura do WhatsApp da Consultora
      const message = `Olá ${CONSULTANT_CONFIG.name}! Gostaria de *Avaliar meu Veículo Usado na Troca*:\n\n🚙 *Meu Carro Atual:* ${model} (${year})\n🛣️ *Km:* ${km} km\n🎯 *Interesse no VW:* ${targetCar}\n📞 *Meu Telefone/Zap:* ${phone}\n💳 *Parcela Pretendida:* ${installment}\n\nPode fazer uma cotação para mim?`;
      openWhatsAppLink(message);
    });
  }

  // Formulario Modal Usuários
  const userForm = document.getElementById("user-form");
  if (userForm) {
    userForm.addEventListener("submit", handleSaveUser);
  }
}

function renderCarsGrid(vehicles) {
  const container = document.getElementById("cars-grid-container");
  if (!container) return;

  container.innerHTML = vehicles.map(car => `
    <div class="car-card" data-category="${car.category}">
      <div class="car-image-box">
        <img src="${car.image}" alt="${car.name}" loading="lazy" />
        <span class="car-badge">${car.badge}</span>
      </div>
      <div class="car-content">
        <div class="car-header">
          <h3>${car.name}</h3>
          <span class="car-category">${car.categoryLabel}</span>
        </div>
        
        <p style="font-size: 0.85rem; margin-bottom: 14px; color: var(--vw-text-muted);">
          ${car.description}
        </p>

        <div class="car-specs">
          <div class="spec-item">
            <span>Motor</span>
            <strong>${car.specs.engine}</strong>
          </div>
          <div class="spec-item">
            <span>Câmbio</span>
            <strong>${car.specs.transmission}</strong>
          </div>
          <div class="spec-item">
            <span>Porta-malas</span>
            <strong>${car.specs.trunk}</strong>
          </div>
        </div>

        <div class="car-card-actions" style="margin-top: 20px;">
          <a href="#" class="btn btn-whatsapp btn-lg btn-full" onclick="directCarWhatsApp(event, '${car.name}')">
            <i class="fa-brands fa-whatsapp"></i> Consultar Oferta no WhatsApp
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Inicializar auto-slider no mobile
  initMobileCarSlider();
}

/* MOBILE CAROUSEL AUTO-SLIDER (Animação de rolagem horizontal estilo formulário) */
let mobileCarSliderInterval = null;
let currentCarIndex = 0;

function initMobileCarSlider() {
  const container = document.getElementById("cars-grid-container");
  if (!container) return;

  if (mobileCarSliderInterval) {
    clearInterval(mobileCarSliderInterval);
    mobileCarSliderInterval = null;
  }

  const cards = container.querySelectorAll(".car-card");
  if (!cards.length) return;

  if (window.innerWidth > 768) {
    cards.forEach(card => {
      card.style.transform = "none";
    });
    return;
  }

  currentCarIndex = 0;
  cards.forEach(card => {
    card.style.transform = "translateX(0%)";
  });

  mobileCarSliderInterval = setInterval(() => {
    const activeCards = container.querySelectorAll(".car-card");
    if (!activeCards || activeCards.length <= 1) return;

    currentCarIndex = (currentCarIndex + 1) % activeCards.length;

    // Desliza fisicamente todos os cards para a esquerda, trazendo o novo item vindo da direita
    activeCards.forEach(card => {
      card.style.transform = `translateX(-${currentCarIndex * 100}%)`;
    });
  }, 3000); // 3 segundos por card
}

window.addEventListener("resize", () => {
  initMobileCarSlider();
});

function filterCars(category) {
  if (category === "all") {
    renderCarsGrid(VEHICLES_DATA);
  } else {
    const filtered = VEHICLES_DATA.filter(v => v.category === category);
    renderCarsGrid(filtered);
  }
}

function populateVehicleSelectOptions() {
  const select = document.getElementById("calc-car-select");
  if (!select) return;
  select.innerHTML = VEHICLES_DATA.map(v => `
    <option value="${v.id}">${v.name} - ${formatCurrency(v.price)}</option>
  `).join("");
}

function resetEntrySliderLimits() {
  const entrySlider = document.getElementById("entry-slider");
  const entryNumber = document.getElementById("entry-number");
  
  if (entrySlider && entryNumber) {
    const minEntry = Math.round(selectedVehicleForCalc.price * 0.3);
    const maxEntry = Math.round(selectedVehicleForCalc.price * 0.8);
    const defaultEntry = Math.round(selectedVehicleForCalc.price * 0.5);

    entrySlider.min = minEntry;
    entrySlider.max = maxEntry;
    entrySlider.value = defaultEntry;
    entryNumber.value = defaultEntry;
  }
}

function updateCalculator() {
  const entryVal = parseFloat(document.getElementById("entry-number").value) || (selectedVehicleForCalc.price * 0.5);
  const termVal = parseInt(document.getElementById("term-select").value) || 36;
  
  const labelEntry = document.getElementById("entry-val-label");
  if (labelEntry) labelEntry.textContent = formatCurrency(entryVal);

  const financedAmount = Math.max(0, selectedVehicleForCalc.price - entryVal);

  let monthlyRate = 0.0129;
  if (selectedPlanType === "sempre-vw") {
    monthlyRate = 0.0099;
  } else if (selectedPlanType === "taxa-zero") {
    monthlyRate = 0.0015;
  }

  let installment = (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, termVal)) / (Math.pow(1 + monthlyRate, termVal) - 1);

  const priceDisplay = document.getElementById("calc-installment-result");
  const financedDisplay = document.getElementById("calc-financed-amount");
  const carNameDisplay = document.getElementById("calc-selected-car-name");
  const planNameDisplay = document.getElementById("calc-selected-plan-name");

  if (priceDisplay) priceDisplay.innerHTML = `${formatCurrency(installment)} <span>/mês</span>`;
  if (financedDisplay) financedDisplay.textContent = formatCurrency(financedAmount);
  if (carNameDisplay) carNameDisplay.textContent = selectedVehicleForCalc.name;
  if (planNameDisplay) {
    const planNames = { "cdc": "CDC Tradicional VW", "sempre-vw": "Plano Sempre VW", "taxa-zero": "VW Taxa Zero" };
    planNameDisplay.textContent = planNames[selectedPlanType] || "Plano VW";
  }
}

function handleSendCalcToWhatsApp() {
  const entryVal = parseFloat(document.getElementById("entry-number").value) || 0;
  const termVal = document.getElementById("term-select").value;
  const financedAmount = selectedVehicleForCalc.price - entryVal;
  const installmentText = document.getElementById("calc-installment-result").innerText;

  trackAction("btn_simulador_send", `Proposta Simulador: ${selectedVehicleForCalc.name} (${termVal}x)`);

  const message = `Olá ${CONSULTANT_CONFIG.name}! Fiz uma *Simulação no seu Site* e gostaria de liberar a minha *Condição Surpresa*:\n\n🚗 *Veículo:* ${selectedVehicleForCalc.name}\n💰 *Valor Total:* ${formatCurrency(selectedVehicleForCalc.price)}\n💵 *Entrada:* ${formatCurrency(entryVal)}\n📊 *Financiado:* ${formatCurrency(financedAmount)}\n🗓️ *Plano:* ${termVal}x de ${installmentText}\n\nConsegue aprovar essa proposta especial para mim?`;

  openWhatsAppLink(message);
}

function selectCarForCalc(carId) {
  const found = VEHICLES_DATA.find(v => v.id === carId);
  if (found) {
    selectedVehicleForCalc = found;
    const select = document.getElementById("calc-car-select");
    if (select) select.value = carId;
    resetEntrySliderLimits();
    updateCalculator();
    
    const calcSection = document.getElementById("simulador");
    if (calcSection) calcSection.scrollIntoView({ behavior: "smooth" });
  }
}

function directCarWhatsApp(e, carName) {
  e.preventDefault();
  trackAction("btn_car_whatsapp", `Interesse em Veículo do Showroom: ${carName}`);
  const message = `Olá ${CONSULTANT_CONFIG.name}! Vi o *${carName}* no seu site e gostaria de saber mais sobre condições de pagamento e pronta-entrega.`;
  openWhatsAppLink(message);
}

function openWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${CONSULTANT_CONFIG.phone}?text=${encoded}`;
  window.open(url, "_blank");
}


/* ==========================================================
   DASHBOARD FUNCTIONS (RENDERIZAÇÃO E MONITORAMENTO)
   ========================================================== */
async function renderDashboard() {
  // 1. Tentar buscar dados consolidados do Supabase
  if (typeof fetchDashboardDataFromSupabase === "function") {
    const supabaseStats = await fetchDashboardDataFromSupabase();
    if (supabaseStats) {
      if (supabaseStats.totalViews > 0) trackerState.pageViews = supabaseStats.totalViews;
      if (supabaseStats.totalLeads > 0) trackerState.simulations = supabaseStats.totalLeads;
    }
  }

  // 2. Atualizar KPIs principais
  document.getElementById("kpi-page-views").textContent = trackerState.pageViews.toLocaleString("pt-BR");
  document.getElementById("kpi-whatsapp-clicks").textContent = trackerState.whatsappClicks.toLocaleString("pt-BR");
  document.getElementById("kpi-video-views").textContent = trackerState.videoViews.toLocaleString("pt-BR");
  document.getElementById("kpi-simulations").textContent = trackerState.simulations.toLocaleString("pt-BR");

  // 3. Renderizar Tabela de Usuários & Acessos
  renderUsersTable();

  // 4. Renderizar Conversões por Botão de Ação
  renderConversionChannels();

  // 5. Renderizar Dispositivos & Origem do Tráfego
  renderTrafficDistribution();

  // 6. Renderizar Feed de Atividade ao Vivo
  renderLiveActivityFeed();
}

// USER MANAGEMENT STORE & TABLE RENDER
function loadUsersState() {
  const stored = localStorage.getItem("VW_USERS_STORE");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error(e); }
  }
  return JSON.parse(JSON.stringify(DEFAULT_USERS_DATA));
}

function saveUsersState() {
  localStorage.setItem("VW_USERS_STORE", JSON.stringify(usersState));
  renderUsersTable();
}

function renderUsersTable() {
  const tbody = document.getElementById("users-table-body");
  if (!tbody) return;

  tbody.innerHTML = usersState.map((u, idx) => {
    const isPassVisible = hiddenPasswordsState[idx] === true;
    const displayedPass = isPassVisible ? u.pass : "••••••••";

    let roleBadgeClass = "role-consultant";
    if (u.role === "SUPER ADMIN") roleBadgeClass = "role-super";
    if (u.role === "CLIENTE") roleBadgeClass = "role-client";

    return `
      <tr>
        <td style="font-weight: 600; color: var(--vw-text-bright);">${u.name}</td>
        <td><span class="user-login-code">${u.login}</span></td>
        <td>
          <div class="password-box">
            <span class="password-dots">${displayedPass}</span>
            <button class="eye-btn" onclick="togglePasswordView(${idx})" title="Mostrar/Ocultar Senha">
              <i class="fa-solid ${isPassVisible ? 'fa-eye-slash' : 'fa-eye'}"></i>
            </button>
          </div>
        </td>
        <td><span class="role-badge ${roleBadgeClass}">${u.role}</span></td>
        <td><span class="status-active">${u.status}</span></td>
        <td>
          <div class="action-btns-group">
            <button class="tbl-btn tbl-btn-link" onclick="copyUserLink('${u.login}')">
              <i class="fa-solid fa-link"></i> Link
            </button>
            <button class="tbl-btn tbl-btn-edit" onclick="openEditUserModal(${idx})">
              <i class="fa-solid fa-pen-to-square"></i> Editar
            </button>
            ${u.role !== "SUPER ADMIN" ? `
              <button class="tbl-btn tbl-btn-delete" onclick="deleteUser(${idx})">
                <i class="fa-solid fa-trash"></i> Excluir
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function togglePasswordView(idx) {
  hiddenPasswordsState[idx] = !hiddenPasswordsState[idx];
  renderUsersTable();
}

function copyUserLink(login) {
  const url = `${window.location.origin}${window.location.pathname}?ref=${login}`;
  navigator.clipboard.writeText(url).then(() => {
    alert(`🔗 Link exclusivo copiado para a área de transferência:\n${url}`);
  });
}

function openCreateUserModal() {
  document.getElementById("user-modal-title").textContent = "Criar Novo Usuário";
  document.getElementById("user-edit-index").value = "-1";
  document.getElementById("u-name").value = "";
  document.getElementById("u-login").value = "";
  document.getElementById("u-password").value = "";
  document.getElementById("u-role").value = "CONSULTORA VW";
  document.getElementById("user-modal").classList.add("active");
}

function openEditUserModal(idx) {
  const u = usersState[idx];
  if (!u) return;

  document.getElementById("user-modal-title").textContent = "Editar Usuário";
  document.getElementById("user-edit-index").value = idx;
  document.getElementById("u-name").value = u.name;
  document.getElementById("u-login").value = u.login;
  document.getElementById("u-password").value = u.pass;
  document.getElementById("u-role").value = u.role;
  document.getElementById("user-modal").classList.add("active");
}

function closeUserModal() {
  document.getElementById("user-modal").classList.remove("active");
}

function handleSaveUser(e) {
  e.preventDefault();
  const idx = parseInt(document.getElementById("user-edit-index").value);
  const name = document.getElementById("u-name").value.trim();
  const login = document.getElementById("u-login").value.trim();
  const pass = document.getElementById("u-password").value.trim();
  const role = document.getElementById("u-role").value;

  if (idx >= 0) {
    usersState[idx] = { ...usersState[idx], name, login, pass, role };
  } else {
    usersState.push({ name, login, pass, role, status: "Ativo" });
  }

  saveUsersState();
  closeUserModal();
}

function deleteUser(idx) {
  if (confirm(`Tem certeza que deseja excluir o usuário ${usersState[idx].name}?`)) {
    usersState.splice(idx, 1);
    saveUsersState();
  }
}

// RENDER CHANNELS & TRAFFIC
function renderConversionChannels() {
  const container = document.getElementById("conversion-channels-container");
  if (!container) return;

  const totalClicks = Object.values(trackerState.channels).reduce((acc, curr) => acc + curr.count, 0) || 1;

  container.innerHTML = Object.keys(trackerState.channels).map(key => {
    const item = trackerState.channels[key];
    const pct = ((item.count / totalClicks) * 100).toFixed(1);

    return `
      <div class="channel-item">
        <div class="channel-info">
          <div class="channel-icon"><i class="${item.icon}"></i></div>
          <div class="channel-title">
            <strong>${item.title}</strong>
            <span>${item.subtitle}</span>
          </div>
        </div>
        <div class="channel-stats">
          <div class="channel-count">${item.count}</div>
          <div class="channel-percent">${pct}% do total</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderTrafficDistribution() {
  const container = document.getElementById("traffic-distribution-container");
  if (!container) return;

  const t = trackerState.traffic;

  container.innerHTML = `
    <div class="traffic-row">
      <div class="traffic-label-flex">
        <span>Dispositivo Mobile (Smartphones)</span>
        <strong>${t.mobile}%</strong>
      </div>
      <div class="traffic-bar-bg"><div class="traffic-bar-fill" style="width: ${t.mobile}%;"></div></div>
    </div>

    <div class="traffic-row">
      <div class="traffic-label-flex">
        <span>Computadores / Notebooks</span>
        <strong>${t.desktop}%</strong>
      </div>
      <div class="traffic-bar-bg"><div class="traffic-bar-fill" style="width: ${t.desktop}%;"></div></div>
    </div>

    <div class="traffic-row">
      <div class="traffic-label-flex">
        <span>Tráfego WhatsApp / Links Diretos</span>
        <strong>${t.whatsapp}%</strong>
      </div>
      <div class="traffic-bar-bg"><div class="traffic-bar-fill" style="width: ${t.whatsapp}%;"></div></div>
    </div>

    <div class="traffic-row">
      <div class="traffic-label-flex">
        <span>Busca Orgânica Google</span>
        <strong>${t.google}%</strong>
      </div>
      <div class="traffic-bar-bg"><div class="traffic-bar-fill" style="width: ${t.google}%;"></div></div>
    </div>

    <div class="traffic-row">
      <div class="traffic-label-flex">
        <span>Meta Ads (Instagram / Facebook)</span>
        <strong>${t.meta}%</strong>
      </div>
      <div class="traffic-bar-bg"><div class="traffic-bar-fill" style="width: ${t.meta}%;"></div></div>
    </div>
  `;
}

function renderLiveActivityFeed() {
  const container = document.getElementById("live-activity-feed");
  if (!container) return;

  if (trackerState.activities.length === 0) {
    container.innerHTML = `<div class="empty-feed-text">Nenhuma atividade recente registrada.</div>`;
    return;
  }

  container.innerHTML = trackerState.activities.map(act => `
    <div class="feed-item">
      <div class="feed-time">${act.time}</div>
      <div class="feed-text">${act.text}</div>
    </div>
  `).join("");
}

// PERIOD FILTERING & RESET
function filterByPeriod(period, btnEl) {
  const btns = document.querySelectorAll(".time-btn");
  btns.forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  trackerState.period = period;
  renderDashboard();
}

function resetAllMetrics() {
  if (confirm("⚠️ Tem certeza que deseja zerar todas as métricas de acessos e cliques de conversão?")) {
    trackerState.pageViews = 0;
    trackerState.whatsappClicks = 0;
    trackerState.videoViews = 0;
    trackerState.simulations = 0;
    Object.keys(trackerState.channels).forEach(key => trackerState.channels[key].count = 0);
    trackerState.activities = [];
    saveTrackerState();
    alert("✅ Métricas redefinidas com sucesso!");
  }
}

function logoutAdmin() {
  if (confirm("Deseja encerrar a sessão de administração?")) {
    switchViewMode("landing");
  }
}

// EXPORTAR DADOS CSV
function exportDataCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Métrica,Valor\n";
  csvContent += `Total Acessos a Pagina,${trackerState.pageViews}\n`;
  csvContent += `Cliques Conversao WhatsApp,${trackerState.whatsappClicks}\n`;
  csvContent += `Visualizacoes Video Sales,${trackerState.videoViews}\n`;
  csvContent += `Simulacoes Realizadas,${trackerState.simulations}\n\n`;

  csvContent += "Canal,Cliques\n";
  Object.keys(trackerState.channels).forEach(key => {
    csvContent += `"${trackerState.channels[key].title}",${trackerState.channels[key].count}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `relatorio_conversao_vw_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// HELPER MOEDA BRL
function formatCurrency(val) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(val);
}

/* ==========================================================
   FLOATING WHATSAPP POPUP CARD WIDGET
   ========================================================== */
function initWhatsAppPopup() {
  const popupCard = document.getElementById("wa-popup-card");
  const typingIndicator = document.getElementById("wa-typing-indicator");
  const msgContent = document.getElementById("wa-msg-content");
  const badge = document.getElementById("wa-badge");

  if (!popupCard) return;

  setTimeout(() => {
    popupCard.classList.remove("hidden-popup");
    popupCard.classList.add("visible-popup");

    if (typingIndicator && msgContent) {
      setTimeout(() => {
        typingIndicator.style.display = "none";
        msgContent.classList.remove("hidden-bubble");
        msgContent.classList.add("visible-bubble");
        if (badge) badge.style.display = "flex";
      }, 700);
    }
  }, 1000);
}

function closeWAPopup() {
  const popupCard = document.getElementById("wa-popup-card");
  if (popupCard) {
    popupCard.classList.remove("visible-popup");
    popupCard.classList.add("hidden-popup");
  }
}
