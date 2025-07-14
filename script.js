const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');
const cv = document.querySelector('.cv');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    cv.classList.toggle('active');
});

gsap.from('.autore', {
  opacity: 0,
  delay: 1,
  x: 20,
});

const logo = document.querySelector('.logo-img')
gsap.utils.toArray(logo).forEach(logo => {
  gsap.fromTo(logo, {
    opacity: 0,
    x: -100,
    rotation: 350,
  }, {  
    opacity: 1,
    x: 0,
    rotation: 0,
    duration: 0.8,
    delay: 0.5,
  })
});

gsap.utils.toArray('.nome').forEach(nome => {
  gsap.fromTo(nome, {
    letterSpacing: '10px',
    x: 300,
    opacity: 0,
    skewX: 65,
  }, {  
    opacity: 1,
    x: 0,
    letterSpacing: '0', 
    skewX: 0,
    duration: 0.8,
    delay: 0.5,
    scrollTrigger: nome,
  })
});

gsap.utils.toArray('.descrizione').forEach(descrizione => { 
  gsap.fromTo(descrizione, {
    x: 150,
    opacity: 0,
    skewX: 30,
  }, {  
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 0.6,
    delay: 0.5,
    scrollTrigger: descrizione,
  })
});

gsap.from('.citta', {
  opacity: 0,
  y: 100,
  scale: .8,
  duration: 1,
  delay: 0.5,
});




const sr = ScrollReveal({
  distance: "65px",
  delay: 450,
});

sr.reveal(".menu", { delay: 450, origin: "top" });
sr.reveal("i", { delay: 500, origin: "right" });
