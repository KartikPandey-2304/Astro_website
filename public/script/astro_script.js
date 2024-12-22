
// // Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    )

}
);

// Mobile Menu Toggle
const navMenu = document.querySelector('.nav-menu');
const mobileMenuButton = document.createElement('button');
mobileMenuButton.textContent = 'Menu';
mobileMenuButton.classList.add('mobile-menu-button');
document.querySelector('nav').appendChild(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll-to-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.classList.add('scroll-top-button');
scrollTopButton.innerHTML = '↑';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    scrollTopButton.classList.toggle('visible', window.scrollY > 200);
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Testimonial Carousel
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialInterval = 5000; // 5 seconds

    function showNextTestimonial() {
        // Hide current testimonial
        testimonials[currentTestimonial].classList.remove('active');
        testimonials[currentTestimonial].style.opacity = '0'; // Fade out

        // Update the current testimonial index
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;

        // Show next testimonial
        testimonials[currentTestimonial].classList.add('active');
        testimonials[currentTestimonial].style.opacity = '1'; // Fade in
    }

    // Show the first testimonial immediately
    if (testimonials.length > 0) {
        testimonials[0].style.opacity = '1'; // Show the first testimonial
        testimonials[0].classList.add('active'); // Mark the first as active
    }

    // Start the interval to rotate testimonials
    setInterval(showNextTestimonial, testimonialInterval);
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data

    fetch('/contact', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            this.reset(); // Reset form fields
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}); 
