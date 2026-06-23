const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");
const navButtons = Array.from(document.querySelectorAll(".nav-button"));
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroDots = Array.from(document.querySelectorAll(".hero-dot"));
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const miniTabs = Array.from(document.querySelectorAll(".mini-tab"));
const appTrack = document.querySelector("#appTrack");
const prevApp = document.querySelector("#prevApp");
const nextApp = document.querySelector("#nextApp");
const searchForm = document.querySelector("#siteSearch");
const searchInput = document.querySelector("#searchInput");
const newsDialog = document.querySelector("#newsDialog");
const viewNewsDetails = document.querySelector("#viewNewsDetails");
const closeNewsDialog = document.querySelector("#closeNewsDialog");
const tickerTrack = document.querySelector("#tickerTrack");

function updateClock() {
  const now = new Date();
  const dayName = document.querySelector("#dayName");
  const fullDate = document.querySelector("#fullDate");
  const liveTime = document.querySelector("#liveTime");

  if (!dayName || !fullDate || !liveTime) {
    return;
  }

  dayName.textContent = now.toLocaleDateString("en-IN", { weekday: "long" });
  fullDate.textContent = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  liveTime.textContent = now.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}

updateClock();
setInterval(updateClock, 1000);

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menuId = button.dataset.menu;
    const menu = document.querySelector(`#${menuId}`);

    document.querySelectorAll(".nav-menu").forEach((item) => {
      if (item !== menu) {
        item.classList.remove("is-open");
      }
    });

    navButtons.forEach((item) => item.classList.toggle("is-active", item === button));

    if (menu) {
      menu.classList.toggle("is-open");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-item")) {
    document.querySelectorAll(".nav-menu").forEach((menu) => menu.classList.remove("is-open"));
  }
});

let activeSlide = 0;
let slideTimer;

function showHeroSlide(index) {
  activeSlide = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
  });
}

function startHeroSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showHeroSlide(activeSlide + 1), 5500);
}

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showHeroSlide(Number(dot.dataset.slideTarget));
    startHeroSlider();
  });
});

if (heroSlides.length) {
  startHeroSlider();
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.tab}`);

    tabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel === target);
    });
  });
});

miniTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.special}`);

    miniTabs.forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll(".special-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel === target);
    });
  });
});

let appIndex = 0;

function updateAppCarousel() {
  if (!appTrack) {
    return;
  }

  const tile = appTrack.querySelector(".app-tile");
  if (!tile) {
    return;
  }

  const step = tile.getBoundingClientRect().width + 12;
  const visibleTiles = Math.max(1, Math.round(appTrack.parentElement.getBoundingClientRect().width / step));
  const maxIndex = Math.max(0, appTrack.children.length - visibleTiles);
  appIndex = Math.max(0, Math.min(appIndex, maxIndex));
  appTrack.style.transform = `translateX(${-appIndex * step}px)`;
}

if (prevApp && nextApp) {
  prevApp.addEventListener("click", () => {
    appIndex -= 1;
    updateAppCarousel();
  });

  nextApp.addEventListener("click", () => {
    appIndex += 1;
    updateAppCarousel();
  });

  window.addEventListener("resize", updateAppCarousel);
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const searchableItems = Array.from(document.querySelectorAll(".app-tile, .tab-button, .nav-menu a, .nav-direct"));

    searchableItems.forEach((item) => {
      const matches = !query || item.textContent.toLowerCase().includes(query);
      item.classList.toggle("is-search-hidden", !matches);
    });
  });

  searchInput.addEventListener("input", () => {
    if (!searchInput.value.trim()) {
      document.querySelectorAll(".is-search-hidden").forEach((item) => item.classList.remove("is-search-hidden"));
    }
  });
}

if (viewNewsDetails && newsDialog) {
  viewNewsDetails.addEventListener("click", () => {
    if (typeof newsDialog.showModal === "function") {
      newsDialog.showModal();
    }
  });
}

if (closeNewsDialog && newsDialog) {
  closeNewsDialog.addEventListener("click", () => newsDialog.close());
}

if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}
