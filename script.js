// Menu for mobile
const menu = document.querySelector('.nav__menu');

menu.addEventListener('click', (e) => {
    document.querySelector('.nav__list').classList.toggle('show');
});

// Home page
const h1Span = document.querySelector('.header__animated');
const companyName = 'Adwave.'.split('');
let currentCompanyNameIndex = 0;

h1Span.textContent = '';

function animateCompanyName() {
    if (currentCompanyNameIndex < companyName.length) {
        h1Span.textContent += companyName[currentCompanyNameIndex];
        currentCompanyNameIndex++;
        setTimeout(animateCompanyName, 500);
    } else {
        // Reset the index and clear the text after the full name is displayed
        currentCompanyNameIndex = 0;
        setTimeout(() => {
            h1Span.textContent = '';
            animateCompanyName();
        }, 1000); // Delay before restarting the animation
    }
}

// Start the animation
animateCompanyName();
