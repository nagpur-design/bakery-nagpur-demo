```javascript
// Smooth scroll and animations
document.addEventListener('DOMContentLoaded', function() {
  const smoothScroll = () => {
    document.querySelector('html').classList.add('smooth-scroll');
  };

  document.querySelector('nav').addEventListener('scroll', function() {
    if (this.scrollTop > 100) {
      this.classList.add('scrolled');
    } else {
      this.classList.remove('scrolled');
    }
  });

  smoothScroll();
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name === '' || phone === '' || message === '') {
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  } else {
    axios.post('https://formspree.io/f/your-formspree-id', {
      name,
      phone,
      message,
    })
    .then((response) => {
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
        contactForm.reset();
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
    });
  }
});

// WhatsApp floating button
const whatsappFab = document.getElementById('whatsapp-fab');
const whatsappLink = whatsappFab.querySelector('a');

whatsappFab.addEventListener('click', function() {
  whatsappLink.click();
});

// UPI QR code
const upiQr = document.getElementById('upi-qr');
const upiId = 'Not available';

if (upiId !== 'Not available') {
  const qrcode = new QRCode(upiQr, {
    text: `upi://pay?pa=${upiId}&pn=Sunrise%20Bakery&cu=INR`,
    width: 100,
    height: 100,
  });
}

// Google Maps initialization
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 21.1454, lng: 79.0842 },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: 21.1454, lng: 79.0842 },
    map: map,
  });
}

// Local Business Schema
const schema = `
  {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Sunrise Bakery",
    "address": {"@type": "PostalAddress", "addressLocality": "Nagpur", "addressCountry": "IN"},
    "telephone": "9876543210",
    "email": "hello@sunrisebakery.in",
    "url": "https://sunrisebakery.in"
  }
`;

document.head.insertAdjacentHTML('beforeend', schema);
```