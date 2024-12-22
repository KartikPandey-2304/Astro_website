// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Add logo dynamically
// const logo = document.createElement("a");
// logo.href = "#home";
// logo.id = "logo";
// const logoImg = document.createElement("img");
// logoImg.src = "logo_travel.jpg"; // Path to your logo image
// logoImg.alt = "Suresh Pandey Travels Logo";
// logo.appendChild(logoImg);

// // Insert the logo at the beginning of the nav
// nav.insertBefore(logo, toggleButton);


// Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errorMessage = "";

    if (name === "") {
        errorMessage += "Please enter your name.\n";
    }
    if (email === "" || !validateEmail(email)) {
        errorMessage += "Please enter a valid email.\n";
    }
    if (message === "") {
        errorMessage += "Please enter your message.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Thank you for contacting us! We will respond shortly.");
        this.reset(); // Reset form fields after submission
    }
});

// Email Validation Helper Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Dynamic Year for Footer
document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Suresh Pandey Travels - Jaunpur Travel Agency`;

// Responsive Navigation Toggle with JavaScript-only Toggle Button
const nav = document.querySelector("nav");
const menu = document.querySelector("nav ul");

// Create the toggle button
const toggleButton = document.createElement("button");
toggleButton.id = "menu-toggle";
toggleButton.innerText = "☰"; // "Hamburger" icon for the button
toggleButton.style.fontSize = "1.5rem";
toggleButton.style.color = "#fff";
toggleButton.style.background = "none";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";

// Insert the toggle button into the nav
nav.insertBefore(toggleButton, menu);

// Add event listener for the toggle button
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});
