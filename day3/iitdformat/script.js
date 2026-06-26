// Clock functionality
function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', second:'2-digit' };
    const datetimeStr = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = datetimeStr;
}
setInterval(updateClock, 1000);
updateClock();

// Slider functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if(slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    slides[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Auto slide every 5 seconds
if(slides.length > 0) {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Tab Functionality
function setupTabs(tabBtnsSelector, tabPanesSelector) {
    const btns = document.querySelectorAll(tabBtnsSelector);
    const panes = document.querySelectorAll(tabPanesSelector);
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all btns and panes in this group
            btns.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked btn
            btn.classList.add('active');
            
            // Show target pane
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Initialize Tabs
setupTabs('.tab-btn', '.tab-pane');
setupTabs('.s-tab-btn', '.s-tab-pane');

// Applications Slider
let currentAppSlide = 0;
function moveAppSlide(direction) {
    const slidesContainer = document.getElementById('app-slides-container');
    if(!slidesContainer) return;
    
    currentAppSlide += direction;
    
    if (currentAppSlide > 1) {
        currentAppSlide = 0;
    } else if (currentAppSlide < 0) {
        currentAppSlide = 1;
    }
    
    const transformValue = -(currentAppSlide * 50);
    slidesContainer.style.transform = `translateX(${transformValue}%)`;
}

// Air Pollution (PM2.5) Indicator
// Barauni Refinery, Begusarai, Bihar coordinates
const BARAUNI_LAT = 25.46;
const BARAUNI_LON = 86.01;

// Map a PM2.5 concentration (µg/m³, CPCB bands) to a heart colour + label
function pm25Band(pm25) {
    if (pm25 <= 30)  return { color: '#21c55d', label: 'Good' };          // green
    if (pm25 <= 60)  return { color: '#a3c61a', label: 'Satisfactory' };  // light green
    if (pm25 <= 90)  return { color: '#f6c513', label: 'Moderate' };      // yellow
    if (pm25 <= 120) return { color: '#f97316', label: 'Poor' };          // orange
    if (pm25 <= 250) return { color: '#ef4444', label: 'Very Poor' };     // red
    return { color: '#7e22ce', label: 'Severe' };                         // purple
}

function renderAirPollution(pm25, isLive) {
    const heart = document.getElementById('pm25-heart');
    const valueEl = document.getElementById('pm25-value');
    if (!heart || !valueEl) return;

    const rounded = Math.round(pm25);
    const band = pm25Band(rounded);

    heart.style.color = band.color;
    heart.title = band.label + ' (PM2.5: ' + rounded + ' µg/m³)'
        + (isLive ? '' : ' — cached value, live data unavailable');
    valueEl.textContent = rounded + ' µg/m³ · ' + band.label;
}

// Fetch live PM2.5 from Open-Meteo Air Quality API (free, no API key)
function updateAirPollution() {
    const url = 'https://air-quality-api.open-meteo.com/v1/air-quality'
        + '?latitude=' + BARAUNI_LAT
        + '&longitude=' + BARAUNI_LON
        + '&current=pm2_5';

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(data => {
            const pm25 = data && data.current && data.current.pm2_5;
            if (typeof pm25 !== 'number') throw new Error('No PM2.5 in response');
            renderAirPollution(pm25, true);
        })
        .catch(err => {
            console.warn('Live air quality fetch failed, using fallback:', err);
            renderAirPollution(38, false); // fallback value
        });
}

updateAirPollution();
// Refresh every 30 minutes (Open-Meteo updates hourly)
setInterval(updateAirPollution, 30 * 60 * 1000);
