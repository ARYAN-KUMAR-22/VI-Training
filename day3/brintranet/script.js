// Date and Time Update
function updateDateTime() {
    const now = new Date();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    const datetimeElement = document.getElementById('datetime');
    if(datetimeElement) {
        datetimeElement.innerHTML = `
            <div>${dayName}</div>
            <div style="font-size: 0.85em; font-weight: normal;">${date} ${monthName} ${year}</div>
            <div class="time">${timeString}</div>
        `;
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Slider Functionality
let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateSliderPosition();
}

function updateSliderPosition() {
    const slideWidth = 100 / totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Tab Functionality
function setupTabs(tabGroupClass, contentPaneClass) {
    const tabs = document.querySelectorAll(tabGroupClass);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs in this group
            const siblingTabs = tab.parentElement.querySelectorAll('.tab, .tab-small');
            siblingTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all content panes for this group
            const targetId = tab.getAttribute('data-target');
            const parentSection = tab.closest('.card'); // Assuming tabs are within a card
            
            if (parentSection) {
                const panes = parentSection.querySelectorAll(contentPaneClass);
                panes.forEach(pane => {
                    pane.style.display = 'none';
                    pane.classList.remove('active');
                });
                
                // Show target pane
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.style.display = 'block';
                }
            }
        });
    });
}

// Initialize tabs on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Center main tabs
    setupTabs('.center-tabs .tab', '.tab-pane');
    
    // Right sidebar special events tabs
    setupTabs('.right-tabs .tab-small', '.event-pane');
});

// Applications Slider Functionality
let currentAppSlide = 0;
function moveAppSlide(direction) {
    const appSlidesContainer = document.querySelector('.app-slides');
    const totalAppSlides = document.querySelectorAll('.app-slide').length;
    
    if (!appSlidesContainer || totalAppSlides === 0) return;
    
    currentAppSlide += direction;
    
    if (currentAppSlide < 0) {
        currentAppSlide = totalAppSlides - 1;
    } else if (currentAppSlide >= totalAppSlides) {
        currentAppSlide = 0;
    }
    
    const slideWidth = 100 / totalAppSlides;
    appSlidesContainer.style.transform = `translateX(-${currentAppSlide * slideWidth}%)`;
}
