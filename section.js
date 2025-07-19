function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const isMobileOrTablet = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 1024;

  if (isMobileOrTablet) {
    document.body.innerHTML = `
      <div style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex; justify-content: center; align-items: center;
        color: white; text-align: center; font-family: Arial; z-index: 9999;
      ">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 20px;">Il sito web non è ancora disponibile da mobile</h1>
          <p>Per favore, visita il sito da desktop</p>
        </div>
      </div>
    `;
    return; // Stop execution for mobile
  }

  // Desktop code continues here
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

const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
const scrollerElement = isMobile ? window : "#main";

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
    scroller: scrollerElement,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");
  
  // Improved canvas sizing for mobile
  function resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    canvas.width = displayWidth * pixelRatio;
    canvas.height = displayHeight * pixelRatio;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    context.scale(pixelRatio, pixelRatio);
  }
  
  resizeCanvas();

  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      render();
    }, 100);
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

  // Preload images with better mobile handling
  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render(); // Render first frame immediately
    };
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: isMobile ? 1 : .5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: scrollerElement,
    },
    onUpdate: render,
  });

  function render() {
    if (images[imageSeq.frame] && images[imageSeq.frame].complete) {
      requestAnimationFrame(() => {
        scaleImage(images[imageSeq.frame], context);
      });
    }
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    const hRatio = displayWidth / img.width;
    const vRatio = displayHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (displayWidth - img.width * ratio) / 2;
    const centerShift_y = (displayHeight - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y,
      img.width * ratio, img.height * ratio
    );
  }
  
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    scroller: scrollerElement,
    start: `top top`,
    end: `250% top`,
  });
}

canvas();

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
    scroller: scrollerElement,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

function canvas1() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  function resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    canvas.width = displayWidth * pixelRatio;
    canvas.height = displayHeight * pixelRatio;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    context.scale(pixelRatio, pixelRatio);
  }
  
  resizeCanvas();

  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      render();
    }, 100);
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

  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render();
    };
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: isMobile ? 1 : .5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: scrollerElement,
    },
    onUpdate: render,
  });

  function render() {
    if (images[imageSeq.frame] && images[imageSeq.frame].complete) {
      requestAnimationFrame(() => {
        scaleImage(images[imageSeq.frame], context);
      });
    }
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    const hRatio = displayWidth / img.width;
    const vRatio = displayHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (displayWidth - img.width * ratio) / 2;
    const centerShift_y = (displayHeight - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y,
      img.width * ratio, img.height * ratio
    );
  }
  
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: scrollerElement,
    start: `top top`,
    end: `250% top`,
  });
}

canvas1();

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
    scroller: scrollerElement,
    scrub: .5
  },
  stagger: .2,
  color: `#ffff`
})

if (isMobile) {
  console.log("Mobile detected - using native scroll");
  // Force refresh after a short delay to ensure everything is loaded
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
}
