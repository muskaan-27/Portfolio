
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    document.getElementById('menu-icon').addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('active');
});

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

// read more
function readMore() {
    var moreText = document.getElementById("more");
    var button = document.getElementById("read-more");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      button.innerHTML = "Read more";
    }
  }

// form reset
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 500,
    // once: true
});

document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.projects h2', { origin: 'top', distance: '15px', duration: 1000, delay: 500 });
  ScrollReveal().reveal('.projects-container .projects-box', { origin: 'bottom', distance: '15px', duration: 1000, delay: 500, interval: 200 });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .about-container, .contact form, .skills-container', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Flutter Developer','Frontend Web Developer','Machine Learning Enthusiast','Computer Science Sophmore','Event Organizer'],
    typeSpeed: 85,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
