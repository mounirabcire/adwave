// Menu for mobile
const menu = document.querySelector('.nav__menu');

menu.addEventListener('click', (e) => {
    document.querySelector('.nav__list').classList.toggle('show');
});

// Home page
const h1Span = document.querySelector('.header__animated');
const companyName = 'Adwave.'.split('');
let currentCompanyNameIndex = 0;

function animateCompanyName() {
    if (!h1Span) return;  

    if (currentCompanyNameIndex < companyName.length) {
        h1Span.textContent += companyName[currentCompanyNameIndex];
        currentCompanyNameIndex++;
        setTimeout(animateCompanyName, 500);
    } else {
        currentCompanyNameIndex = 0;
        setTimeout(() => {
            h1Span.textContent = '';
            animateCompanyName();
        }, 1000);
    }
}

if (h1Span) {
    h1Span.textContent = '';
    animateCompanyName();
}

// Slider
const tracks = document.querySelectorAll('.slider-track');
console.log(1);

tracks.forEach((track) => {
    track.addEventListener('mousedown', (e) => {
        track.dataset.mouseDownAt = e.clientX;
        track.dataset.prevPercentage = track.dataset.percentage || 0;
        track.classList.add('dragging');
    });

    track.addEventListener('mouseup', () => {
        track.dataset.mouseDownAt = 0;
        track.dataset.prevPercentage = track.dataset.percentage;
        track.classList.remove('dragging');
    });

    track.addEventListener('mousemove', (e) => {
        if (track.dataset.mouseDownAt == 0) return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained =
            parseFloat(track.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -100
        );
        track.dataset.percentage = nextPercentage;
        track.style.transform = `translateX(${nextPercentage}%)`;
    });
});
