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
function updateAirPollution() {
    const heart = document.getElementById('pm25-heart');
    const valueEl = document.getElementById('pm25-value');
    if (!heart || !valueEl) return;

    // PM2.5 concentration in µg/m³ (replace with live CERCA feed when available)
    const pm25 = 38;

    // Air quality bands (CPCB style) -> heart colour + label
    let color, label;
    if (pm25 <= 30) {
        color = '#21c55d'; label = 'Good';            // green
    } else if (pm25 <= 60) {
        color = '#a3c61a'; label = 'Satisfactory';    // light green
    } else if (pm25 <= 90) {
        color = '#f6c513'; label = 'Moderate';        // yellow
    } else if (pm25 <= 120) {
        color = '#f97316'; label = 'Poor';            // orange
    } else if (pm25 <= 250) {
        color = '#ef4444'; label = 'Very Poor';       // red
    } else {
        color = '#7e22ce'; label = 'Severe';          // purple
    }

    heart.style.color = color;
    heart.title = label + ' (PM2.5: ' + pm25 + ' µg/m³)';
    valueEl.textContent = pm25 + ' µg/m³ · ' + label;
}
updateAirPollution();
