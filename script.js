// Sticky Nav
const nav = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// WhatsApp Floating Button
const whatsappBtn = document.querySelector('#whatsapp-btn');
whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/919876543210?text=Hello%2C%20I%20found%20you%20online', '_blank');
});

// Contact Form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const message = document.querySelector('#message').value;

    if (name && phone && message) {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${name}&phone=${phone}&message=${message}`
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else {
        alert('Please fill in all fields.');
    }
});

// Location Map
const locationBtn = document.querySelector('#location-btn');
locationBtn.addEventListener('click', () => {
    const map = L.map('map').setView([21.1556, 79.0842], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);
});

// Fade-in Animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 500);
    });
});