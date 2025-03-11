// Navigationsmenü-Element
const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav p'); // Die Links im Menü

// Button für das mobile Menü (Icon)
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-icon'); // Klasse hinzufügen
menuToggle.classList.add('fa', 'fa-bars'); // Hamburger-Menü-Symbol (fa-bars)


// Funktion zum Umschalten der Links und des Icons
function toggleMenu() {
    const isMenuOpen = navLinks.style.display === 'block';

    if (isMenuOpen) {
        navLinks.style.display = 'none'; // Verstecke die Links
        menuToggle.classList.remove('fa-times'); // Entferne das Schließen-Symbol
        menuToggle.classList.add('fa-bars'); // Zeige das Hamburger-Menü-Symbol an
    } else {
        navLinks.style.display = 'block'; // Zeige die Links
        menuToggle.classList.remove('fa-bars'); // Entferne das Hamburger-Menü-Symbol
        menuToggle.classList.add('fa-times'); // Zeige das Schließen-Symbol an
    }
}

// Event-Listener für das Menü-Icon
menuToggle.addEventListener('click', toggleMenu);

// Füge das Menü-Icon zum nav-Element hinzu
nav.appendChild(menuToggle);

// Funktion zum Anpassen der Ansicht bei Bildschirmgrößenänderung
function adjustMenuForMobile() {
    if (window.innerWidth <= 480) {
        navLinks.style.display = 'none'; // Links sind standardmäßig versteckt
        menuToggle.style.display = 'block'; // Menü-Icon wird angezeigt
    } else {
        navLinks.style.display = 'block'; // Links immer sichtbar bei größeren Bildschirmen
        menuToggle.style.display = 'none'; // Menü-Icon ausblenden
    }
}

// Initiales Anpassen der Ansicht
adjustMenuForMobile();

// Event-Listener für Größenänderung
window.addEventListener('resize', adjustMenuForMobile);
