// Toggle dark mode
document.getElementById('themeToggle').addEventListener('click', function() {
    const darkModeStyle = document.getElementById('darkModeStyle');
    if (darkModeStyle.disabled) {
        darkModeStyle.disabled = false;
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeStyle.disabled = true;
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.getElementById('darkModeStyle').disabled = false;
    document.body.classList.add('dark-mode');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (for smaller screens)
function setupMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    document.querySelector('.header-content').prepend(menuToggle);
    
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            nav.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            nav.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize mobile menu if on a page with navigation
if (document.querySelector('nav')) {
    setupMobileMenu();
}