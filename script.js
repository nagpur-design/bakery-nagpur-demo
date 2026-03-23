document.addEventListener("DOMContentLoaded", function() {
const whatsappButton = document.createElement('button');
whatsappButton.textContent = '📱';
whatsappButton.classList.add('whatapp-button');
document.body.appendChild(whatsappButton);

whatsappButton.addEventListener('click', () => {
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello%2C%20I%20found%20you%20online';
  window.open(whatsappUrl, '_blank');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('#', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert('Message sent successfully!');
    })
    .catch((err) => console.error(err));
});
});