// Funzione principale per lo scroll smooth
function initSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);
  
  const isMobile = window.innerWidth <= 768;
  const mainElement = document.querySelector("#main");
  
  if (!isMobile && mainElement) {
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
    // Configurazione per mobile e fallback
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
  });
  element.innerHTML = breaker;

  const isMobile = window.innerWidth <= 768;
  
  gsap.to(`${selector}>span`, {
    scrollTrigger: {
      trigger: element,
      start: `top 80%`,
      end: `bottom 20%`,
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

  // Dimensioni responsive
  function setCanvasSize() {
    if (isMobile) {
      canvas.width = window.innerWidth * 0.95;
      canvas.height = window.innerHeight * 0.8;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    if (typeof render === 'function') render();
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  const images = [];
  const imageSeq = { frame: 1 };

  // Carica le immagini con gestione errori
  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render(); // Rende la prima immagine caricata
    };
    img.onerror = () => {
      console.warn(`Impossibile caricare immagine: ${imageFiles[i]}`);
    };
    img.src = imageFiles[i];
    images.push(img);
  }

  function render() {
    const currentImage = images[Math.floor(imageSeq.frame)];
    if (!currentImage || !currentImage.complete) return;
    
    const img = currentImage;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const hRatio = canvasWidth / img.width;
    const vRatio = canvasHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvasWidth - img.width * ratio) / 2;
    const centerShift_y = (canvasHeight - img.height * ratio) / 2;
    
    context.clearRect(0, 0, canvasWidth, canvasHeight);
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

  // Animazione delle immagini
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      trigger: canvas,
      start: "top top",
      end: isMobile ? "150% top" : "250% top",
      scroller: isMobile ? window : "#main",
    },
    onUpdate: render,
  });

  // Pin dell'elemento
  ScrollTrigger.create({
    trigger: canvas,
    pin: true,
    scroller: isMobile ? window : "#main",
    start: "top top",
    end: isMobile ? "150% top" : "250% top",
  });
}

// Animazioni per il cerchio nella pagina 7
function initCircleAnimations() {
  const isMobile = window.innerWidth <= 768;
  const circle = document.querySelector('.page7-cir');
  const innerCircle = document.querySelector('.page7-inner-cir');
  const counter = document.querySelector(".page7-inner-cir>.counter");
  const innerText = document.querySelector(".page7-inner-cir-text");
  
  if (circle) {
    gsap.to('.page7-cir', {
      scrollTrigger: {
        trigger: circle,
        start: "center center",
        end: "bottom top",
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      width: isMobile ? "20rem" : "50rem",
      height: isMobile ? "20rem" : "50rem",
    });
  }

  if (innerCircle) {
    gsap.to('.page7-inner-cir', {
      scrollTrigger: {
        trigger: circle,
        start: "center center",
        end: "bottom top",
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      backgroundColor: "#0a3bce91"
    });
  }

  // Animazione del contatore
  if (counter) {
    const counterAnimation = gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: "center center",
        end: "bottom top",
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      innerHTML: 60,
      duration: 2,
      roundProps: "innerHTML",
      onUpdate: function() {
        counter.textContent = `${Math.round(counter.innerHTML)}%`;
      },
    });

    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: "center center",
        end: "bottom top",
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      fontSize: isMobile ? "1.5rem" : "3rem",
    });
  }

  // Testo dentro il cerchio
  if (innerText) {
    gsap.to(".page7-inner-cir-text", {
      scrollTrigger: {
        trigger: innerText,
        start: "center center",
        end: "bottom top",
        scroller: isMobile ? window : "#main",
        scrub: 0.5,
      },
      fontSize: isMobile ? "0.8rem" : "1.5rem",
    });
  }
}

// Funzione di debounce per il resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Inizializzazione dopo il caricamento del DOM
document.addEventListener('DOMContentLoaded', function() {
  // Attendi un po' prima di inizializzare per assicurarti che tutto sia caricato
  setTimeout(() => {
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
  }, 100);
});

// Ricarica ScrollTrigger quando la finestra viene ridimensionata con debounce
window.addEventListener('resize', debounce(function() {
  ScrollTrigger.refresh();
}, 250));
