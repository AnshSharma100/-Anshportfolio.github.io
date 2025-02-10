// Light/Dark Mode Toggle
function toggleTheme() {
    const themeButton = document.getElementById("theme-toggle");
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        themeButton.innerText = "🌚"; // Change button icon to Dark Mode
    } else {
        themeButton.innerText = "🌙"; // Change button icon to Light Mode
    }
}

// Detect visible sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
});
