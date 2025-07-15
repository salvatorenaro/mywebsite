// Funzione principale per lo scroll smooth
function initSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);
  
  const isMobile = window.innerWidth <= 768;
  const mainElement = document.querySelector("#main");
  
  if (!isMobile) {
    // Usa LocomotiveScroll solo su desktop
    const locoScroll = new LocomotiveScroll({
      el: mainElement,
      smooth: true,
      smartphone: { smooth: false },
      tablet: { smooth: false }
    });

    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: mainElement.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  } else {
    // Configurazione semplificata per mobile
    ScrollTrigger.defaults({
      scroller: window
    });
  }

  ScrollTrigger.refresh();
}

// Funzione per animare il testo carattere per carattere
function initTextAnimation(selector) {
  const element = document.querySelector(selector);
  if (!element) return;
  
  let breaker = "";
  element.textContent.split("").forEach(function(breakword) {
    breaker += `<span>${breakword}</span>`;
    element.innerHTML = breaker;
  });

  const isMobile = window.innerWidth <= 768;
  
  gsap.to(`${selector}>span`, {
    scrollTrigger: {
      trigger: `${selector}>span`,
      start: `top bottom`,
      end: `bottom top`,
      scroller: isMobile ? window : "#main",
      scrub: 0.5
    },
    stagger: 0.2,
    color: `#ffff`
  });
}

// Funzione per gestire le animazioni canvas
function initCanvasAnimation(selector, frameCount, imageFiles) {
  const canvas = document.querySelector(selector);
  if (!canvas) return;
  
  const context = canvas.getContext("2d");
  const isMobile = window.innerWidth <= 768;

  // Riduci le dimensioni su mobile per migliorare le performance
  function setCanvasSize() {
    canvas.width = isMobile ? window.innerWidth * 0.95 : window.innerWidth;
    canvas.height = isMobile ? window.innerHeight * 0.8 : window.innerHeight;
    if (render) render();
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  const images = [];
  const imageSeq = { frame: 1 };

  // Carica le immagini
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = imageFiles[i];
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: selector,
      start: `top top`,
      end: isMobile ? `150% top` : `250% top`,
      scroller: isMobile ? window : "#main",
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    if (!images[imageSeq.frame] || !images[imageSeq.frame].complete) return;
    
    const img = images[imageSeq.frame];
    const canvas = context.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: selector,
    pin: true,
    scroller: isMobile ? window : "#main",
    start: `top top`,
    end: isMobile ? `150% top` : `250% top`,
  });
}

// Animazioni per il cerchio nella pagina 7
function initCircleAnimations() {
  const isMobile = window.innerWidth <= 768;
  
  gsap.to('.page7-cir', {
    scrollTrigger: {
      trigger: `.page7-cir`,
      start: `center center`,
      end: `bottom top`,
      scroller: isMobile ? window : "#main",
      scrub: 0.5,
    },
    width: isMobile ? "20rem" : "50rem",
    height: isMobile ? "20rem" : "50rem",
  });

  gsap.to('.page7-inner-cir', {
    scrollTrigger: {
      trigger: `.page7-cir`,
      start: `center center`,
      end: `bottom top`,
      scroller: isMobile ? window : "#main",
      scrub: 0.5,
    },
    backgroundColor: `#0a3bce91`
  });

  // Animazione del contatore
  const counter = document.querySelector(".page7-inner-cir>.counter");
  if (counter) {
    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: `center center`,
        end: `bottom top`,
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      innerHTML: 60,
      duration: 2,
      roundProps: "innerHTML",
      onUpdate: () => counter.textContent = `${Math.round(counter.textContent)}%`,
    });

    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: `center center`,
        end: `bottom top`,
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      fontSize: isMobile ? "1.5rem" : "3rem",
    });
  }

  // Testo dentro il cerchio
  gsap.to(".page7-inner-cir-text", {
    scrollTrigger: {
      trigger: ".page7-inner-cir-text",
      start: `center center`,
      end: `bottom top`,
      scroller: isMobile ? window : "#main",
      scrub: 0.5,
    },
    fontSize: isMobile ? "0.8rem" : "1.5rem",
  });
}

// Inizializzazione dopo il caricamento del DOM
document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  
  // Lista delle immagini per ogni canvas
  const page3Images = [
    "foto1.png.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", 
    "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg",
    "foto11.jpg", "foto12.jpg", "foto13.jpg", "foto14.jpg", "foto15.jpg",
    "foto16.jpg", "foto17.jpg", "foto18.jpg", "foto19.jpg", "foto20.jpg",
    "foto21.jpg", "foto22.jpg", "foto23.jpg", "foto24.jpg", "foto25.jpg",
    "foto26.jpg", "foto27.jpg", "foto28.jpg", "foto29.jpg", "foto30.jpg",
    "foto31.jpg", "foto32.jpg", "foto33.jpg", "foto34.jpg", "foto35.jpg",
    "foto37.jpg", "foto38.jpg", "foto39.jpg", "foto40.jpg"
  ];

  const page5Images = [
    "foto41.jpg", "foto42.jpg", "foto43.jpg", "foto44.jpg", "foto45.jpg",
    "foto46.jpg", "foto47.jpg", "foto48.jpg", "foto49.jpg", "foto50.jpg",
    "foto51.jpg", "foto52.jpg", "foto53.jpg", "foto54.jpg", "foto55.jpg",
    "foto56.jpg", "foto57.jpg", "foto58.jpg", "foto59.jpg", "foto60.jpg",
    "foto61.jpg", "foto62.jpg", "foto63.jpg", "foto64.jpg", "foto65.jpg",
    "foto66.jpg", "foto67.jpg", "foto68.jpg", "foto69.jpg", "foto70.jpg",
    "foto71.jpg", "foto72.jpg"
  ];

  // Inizializza le animazioni del testo
  initTextAnimation('#page2>.page2-content>h1');
  initTextAnimation('#page4>.page4-content>h1');
  initTextAnimation('#page6>.page6-content>h1');

  // Inizializza le animazioni canvas
  initCanvasAnimation("#page3>canvas", 40, page3Images);
  initCanvasAnimation("#page5>canvas", 31, page5Images);
  
  // Inizializza le animazioni del cerchio
  initCircleAnimations();
});

// Ricarica ScrollTrigger quando la finestra viene ridimensionata
window.addEventListener('resize', function() {
  ScrollTrigger.refresh();
});
