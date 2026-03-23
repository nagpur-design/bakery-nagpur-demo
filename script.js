// Sticky Nav
window.addEventListener("scroll", function() {
    var nav = document.getElementById("nav");
    var scroll = window.scrollY;
    if (scroll >= 100) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// Floating WhatsApp Button
const whatsappFab = document.querySelector(".whatsapp-fab");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        whatsappFab.style.bottom = "20px";
    } else {
        whatsappFab.style.bottom = "40px";
    }
});

// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (name === "" || phone === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        // Send form data to server-side script
        // Use AJAX or Fetch API to make a POST request
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("message", message);
        fetch("/sendmail", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert("Error sending message. Please try again.");
            }
        })
        .catch(error => console.error(error));
    }
});

// Success/Error Messages
const successMessage = document.createElement("p");
successMessage.style.color = "#25D366";
successMessage.style.fontSize = "18px";
const errorMessage = document.createElement("p");
errorMessage.style.color = "#ff0000";
errorMessage.style.fontSize = "18px";
contactForm.parentNode.appendChild(successMessage);
contactForm.parentNode.appendChild(errorMessage);
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (name === "" || phone === "" || message === "") {
        errorMessage.textContent = "Please fill out all fields.";
    } else {
        successMessage.textContent = "Message sent successfully!";
        errorMessage.textContent = "";
    }
});