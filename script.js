document.addEventListener("DOMContentLoaded", function() {
// script.js

// Sticky navigation
const nav = document.querySelector('header');
const hero = document.querySelector('#hero');

const sticky = () => {
  if (window.scrollY > hero.offsetHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

sticky();

window.addEventListener('scroll', sticky);

// WhatsApp floating button
const whatsappBtn = document.querySelector('.whatsapp-btn');
const whatsappLink = 'https://wa.me/919876543210?text=Hello%2C%20I%20found%20you%20online';

whatsappBtn.addEventListener('click', () => {
  window.location.href = whatsappLink;
});

// WhatsApp floating button fade-in animation
const whatsappFadeIn = () => {
  whatsappBtn.classList.add('fade-in');
}

const fadeInTimeout = setTimeout(whatsappFadeIn, 1000);

// Contact form submit handler
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const response = fetch('#', {
    method: 'POST',
    body: formData,
  });

  response.then(() => {
    alert('Message sent successfully!');
  });
});
});