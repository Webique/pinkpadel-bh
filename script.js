// Smooth scrolling for menu links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Select the toggle button and menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Function to toggle the menu
function toggleMenu() {
    menu.classList.toggle('active'); // Toggle active class on the menu
}

// Add event listener to the toggle button
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to parent elements
    toggleMenu();
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active'); // Close the menu
    }
});


// Ensure links in the menu work as intended and close the menu on click
menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Close the menu when a link is clicked
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    setTimeout(() => {
        heroTitle.classList.add('active');
    }, 500);
});



// Scroll-based animation for About Us section
window.addEventListener('scroll', () => {
    const aboutContent = document.querySelector('.about-content');
    const rect = aboutContent.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        aboutContent.classList.add('active'); // Trigger animation
    }
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Function to show slides
function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to move to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
    showSlides(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlides(slideIndex);
}

// Event Listeners for Controls
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);


// Initialize the slideshow
showSlides(slideIndex);

// Function to handle scroll-triggered animations
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.courts-section, .coaches-section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('active'); // Trigger animation
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimation);


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".coach-card");

    // Function to check if the screen is within the media section
    const isMediaQueryActive = () => window.innerWidth <= 1024;

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (isMediaQueryActive()) {
                card.classList.toggle("flipped");
            }
        });
    });

    // Optional: Reapply the check on window resize
    window.addEventListener("resize", () => {
        cards.forEach((card) => {
            if (!isMediaQueryActive()) {
                card.classList.remove("flipped"); // Ensure cards reset when resizing to larger screens
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const locationSection = document.querySelector(".location");

    const handleScroll = () => {
        const sectionTop = locationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            locationSection.classList.add("active"); // Add active class when section is in view
        }
    };

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-us");

    const handleScroll = () => {
        const sectionTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            contactSection.classList.add("active"); // Add active class when section is in view
        }
    };

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", () => {
    const pricingSection = document.querySelector(".pricing-section");

    const handleScroll = () => {
        const sectionTop = pricingSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            pricingSection.classList.add("active");
        }
    };

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const eventsSection = document.querySelector(".events-section");

    const handleScroll = () => {
        const sectionTop = eventsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            eventsSection.classList.add("active");
        }
    };

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesSection = document.querySelector(".services-section");

    const handleScroll = () => {
        const sectionTop = servicesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            servicesSection.classList.add("active");
        }
    };

    window.addEventListener("scroll", handleScroll);
});



