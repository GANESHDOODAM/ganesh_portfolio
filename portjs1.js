// Initialize AOS animations
AOS.init();

// Smooth scrolling effect for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Change navbar background color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back-to-Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter Effect
const nameText = "Hi, I'm Ganesh Doodam";
let i = 0;

function typeWriterEffect() {
    if (i < nameText.length) {
        document.getElementById('typewriter-name').innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 100); // Adjust speed as needed
    }
}

window.onload = () => {
    typeWriterEffect();

    // Add initial animation for hero photo
    const heroPhoto = document.querySelector('.hero-photo');
    heroPhoto.style.opacity = 0;
    heroPhoto.style.transform = 'scale(0.8)';

    setTimeout(() => {
        heroPhoto.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        heroPhoto.style.opacity = 1;
        heroPhoto.style.transform = 'scale(1)';
    }, 500);
};

// Animated Progress Bars
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const barPosition = bar.getBoundingClientRect().top;
    if (barPosition < window.innerHeight) {
      bar.style.width = percent + '%';
    }
  });
});

// Header Animation on Scroll
const sectionHeaders = document.querySelectorAll('h2');

window.addEventListener('scroll', () => {
    sectionHeaders.forEach(header => {
        const headerPosition = header.getBoundingClientRect().top;
        if (headerPosition < window.innerHeight - 100) {
            header.classList.add('in-view');
        }
    });
});
