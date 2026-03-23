document.addEventListener("DOMContentLoaded", function() {
// Initialize Leaflet map
let map = L.map('map').setView([21.1458, 79.0842], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Add marker to map
let marker = L.marker([21.1458, 79.0842]).addTo(map);
marker.bindPopup('Sunrise Bakery');

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch('#', {
        method: 'POST',
        body: formData
    })
    .then((response) => response.text())
    .then((message) => {
        alert('Message sent successfully!');
        e.target.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
});