document.addEventListener("DOMContentLoaded", function() {
// Add event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('#', {
        method: 'POST',
        body: formData
    })
    .then(() => {
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Initialize the map
const map = L.map('map').setView([21.149813, 79.084142], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Add a marker to the map
const marker = L.marker([21.149813, 79.084142]).addTo(map);
marker.bindPopup('Sunrise Bakery');

// Add event listener to the sticky nav
const nav = document.querySelector('.sticky-nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
});