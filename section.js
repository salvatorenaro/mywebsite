function loco() {
  gsap.registerPlugin(ScrollTrigger);

  //The website was created by Salvatore Naro, , do not use the website for purposes other than educational ones.-

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
loco();

let breaker_1 = "";
document.querySelector('#page2>.page2-content>h1').textContent.split("").forEach(function (breakword_1) {
  breaker_1 += `<span>${breakword_1}</span>`;
  document.querySelector('#page2>.page2-content>h1').innerHTML = breaker_1;
});

gsap.to('#page2>.page2-content>h1>span', {
  scrollTrigger: {
    trigger: `#page2>.page2-content>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  // FISSA LE DIMENSIONI SENZA PIXEL RATIO
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let isResizing = false;
  window.addEventListener("resize", function () {
    if (!isResizing) {
      isResizing = true;
      setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
        isResizing = false;
      }, 50);
    }
  });

  function files(index) {
    var data = `
    foto1.png.jpg
    foto2.jpg 
    foto3.jpg
    foto4.jpg  
    foto5.jpg  
    foto6.jpg  
    foto7.jpg  
    foto8.jpg  
    foto9.jpg  
    foto10.jpg  
    foto11.jpg  
    foto12.jpg  
    foto13.jpg  
    foto14.jpg  
    foto15.jpg 
    foto16.jpg  
    foto17.jpg 
    foto18.jpg 
    foto18.jpg  
    foto19.jpg  
    foto20.jpg  
    foto21.jpg  
    foto22.jpg  
    foto23.jpg  
    foto24.jpg  
    foto25.jpg  
    foto26.jpg  
    foto27.jpg  
    foto28.jpg  
    foto29.jpg  
    foto30.jpg  
    foto31.jpg  
    foto32.jpg  
    foto33.jpg   
    foto34.jpg
    foto35.jpg
    foto37.jpg
    foto38.jpg
    foto39.jpg
    foto40.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 40;
  const images = [];
  const imageSeq = { frame: 1 };

  // PRECARICA TUTTE LE IMMAGINI
  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render(); // Renderizza appena la prima è caricata
    };
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  function render() {
    const currentImage = images[imageSeq.frame];
    if (!currentImage || !currentImage.complete) return;
    
    scaleImage(currentImage, context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
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
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas()

let breaker_2 = "";
document.querySelector('#page4>.page4-content>h1').textContent.split("").forEach(function (breakword_2) {
  breaker_2 += `<span>${breakword_2}</span>`;
  document.querySelector('#page4>.page4-content>h1').innerHTML = breaker_2;
});

gsap.to('#page4>.page4-content>h1>span', {
  scrollTrigger: {
    trigger: `#page4>.page4-content>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

function canvas1() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  // FISSA LE DIMENSIONI SENZA PIXEL RATIO
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let isResizing = false;
  window.addEventListener("resize", function () {
    if (!isResizing) {
      isResizing = true;
      setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
        isResizing = false;
      }, 50);
    }
  });

  function files(index) {
    var data = `
    foto41.jpg  
    foto42.jpg  
    foto43.jpg  
    foto44.jpg  
    foto45.jpg  
    foto46.jpg  
    foto47.jpg  
    foto48.jpg  
    foto49.jpg  
    foto50.jpg  
    foto51.jpg  
    foto52.jpg  
    foto53.jpg  
    foto54.jpg  
    foto55.jpg  
    foto56.jpg  
    foto57.jpg  
    foto58.jpg  
    foto59.jpg  
    foto60.jpg  
    foto61.jpg  
    foto62.jpg  
    foto63.jpg  
    foto64.jpg  
    foto65.jpg  
    foto66.jpg  
    foto67.jpg  
    foto68.jpg  
    foto69.jpg  
    foto70.jpg  
    foto71.jpg  
    foto72.jpg  
    `;
    return data.split("\n")[index];
  }

  const frameCount = 31;
  const images = [];
  const imageSeq = { frame: 1 };

  // PRECARICA TUTTE LE IMMAGINI
  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render(); // Renderizza appena la prima è caricata
    };
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  function render() {
    const currentImage = images[imageSeq.frame];
    if (!currentImage || !currentImage.complete) return;
    
    scaleImage(currentImage, context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
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
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas1()

let breaker_3 = "";
document.querySelector('#page6>.page6-content>h1').textContent.split("").forEach(function (breakword_3) {
  breaker_3 += `<span>${breakword_3}</span>`;
  document.querySelector('#page6>.page6-content>h1').innerHTML = breaker_3;
});

gsap.to('#page6>.page6-content>h1>span', {
  scrollTrigger: {
    trigger: `#page6>.page6-content>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

function canvas2() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  // FISSA LE DIMENSIONI SENZA PIXEL RATIO
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let isResizing = false;
  window.addEventListener("resize", function () {
    if (!isResizing) {
      isResizing = true;
      setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
        isResizing = false;
      }, 50);
    }
  });

  function files(index) {
    // Genero i nomi delle immagini in sequenza
    return `foto${73 + index}.jpg`;
  }

  const frameCount = 136;
  const images = [];
  const imageSeq = { frame: 1 };

  // PRECARICA TUTTE LE IMMAGINI
  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render(); // Renderizza appena la prima è caricata
    };
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  function render() {
    const currentImage = images[imageSeq.frame];
    if (!currentImage || !currentImage.complete) return;
    
    scaleImage(currentImage, context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
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
    trigger: "#page7",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas2()

gsap.to('.page7-cir', {
  scrollTrigger: {
    trigger: `.page7-cir`,
    start: `center center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  width: "50rem",
  height: "50rem",
})

gsap.to('.page7-inner-cir', {
  scrollTrigger: {
    trigger: `.page7-cir`,
    start: `center center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  backgroundColor: `#0a3bce91`
})

const counter = document.querySelector(".page7-inner-cir>.counter");

function animateCounter() {
  gsap.to(counter, {
    scrollTrigger: {
      trigger: counter,
      start: `center center`,
      end: `bottom top`,
      scroller: `#main`,
      scrub: .5,
    },
    innerHTML: 60,
    duration: 2,
    roundProps: "innerHTML",
    onUpdate: () => counter.textContent = `${Math.round(counter.textContent)}%`,
  });
}

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: counter,
  start: `center center`,
  end: `bottom top`,
  scroller: `#main`,
  scrub: .5,
  onEnter: animateCounter,
});

gsap.to(counter, {
  scrollTrigger: {
    trigger: counter,
    start: `center center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  fontSize: "3rem",
})

gsap.to(".page7-inner-cir-text", {
  scrollTrigger: {
    trigger: ".page7-inner-cir-text",
    start: `center center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  fontSize: "1.5rem",
})

// FORZA IL REFRESH SU MOBILE
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}

// ASSICURATI CHE IL TOUCH FUNZIONI
document.addEventListener('touchstart', function() {}, { passive: true });
document.addEventListener('touchmove', function() {}, { passive: true });
