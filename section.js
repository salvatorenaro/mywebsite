function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

  if (!isMobile) {
    // Desktop: Use Locomotive Scroll
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
  } else {
    // Mobile: Reset everything for native scroll
    const mainElement = document.querySelector("#main");
    if (mainElement) {
      mainElement.style.transform = "none";
      mainElement.style.height = "auto";
      mainElement.style.overflow = "visible";
      mainElement.style.position = "static";
    }
    
    // Clear any existing ScrollTrigger instances
    ScrollTrigger.killAll();
    
    // Reinitialize ScrollTrigger for mobile
    ScrollTrigger.refresh();
  }
}

const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

// CRITICAL: Always use window for mobile
const scrollerElement = window;

// Initialize locomotive
loco();

// Wait for everything to load on mobile
if (isMobile) {
  // Force mobile viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
  }
  
  // Disable any smooth scrolling that might interfere
  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  
  setTimeout(() => {
    initAnimations();
  }, 100);
} else {
  setTimeout(() => {
    initAnimations();
  }, 500);
}

function initAnimations() {
  // Text animation 1
  let breaker_1 = "";
  const h1_page2 = document.querySelector('#page2>.page2-content>h1');
  if (h1_page2) {
    h1_page2.textContent.split("").forEach(function (breakword_1) {
      breaker_1 += `<span>${breakword_1}</span>`;
    });
    h1_page2.innerHTML = breaker_1;

    gsap.to('#page2>.page2-content>h1>span', {
      scrollTrigger: {
        trigger: `#page2>.page2-content>h1`,
        start: `top 80%`,
        end: `bottom 20%`,
        scroller: scrollerElement,
        scrub: isMobile ? 1 : 0.5,
        markers: false
      },
      stagger: .2,
      color: `#ffff`
    });
  }

  // Canvas 1
  canvas();

  // Text animation 2
  let breaker_2 = "";
  const h1_page4 = document.querySelector('#page4>.page4-content>h1');
  if (h1_page4) {
    h1_page4.textContent.split("").forEach(function (breakword_2) {
      breaker_2 += `<span>${breakword_2}</span>`;
    });
    h1_page4.innerHTML = breaker_2;

    gsap.to('#page4>.page4-content>h1>span', {
      scrollTrigger: {
        trigger: `#page4>.page4-content>h1`,
        start: `top 80%`,
        end: `bottom 20%`,
        scroller: scrollerElement,
        scrub: isMobile ? 1 : 0.5
      },
      stagger: .2,
      color: `#ffff`
    });
  }

  // Canvas 2
  canvas1();

  // Text animation 3
  let breaker_3 = "";
  const h1_page6 = document.querySelector('#page6>.page6-content>h1');
  if (h1_page6) {
    h1_page6.textContent.split("").forEach(function (breakword_3) {
      breaker_3 += `<span>${breakword_3}</span>`;
    });
    h1_page6.innerHTML = breaker_3;

    gsap.to('#page6>.page6-content>h1>span', {
      scrollTrigger: {
        trigger: `#page6>.page6-content>h1`,
        start: `top 80%`,
        end: `bottom 20%`,
        scroller: scrollerElement,
        scrub: isMobile ? 1 : 0.5
      },
      stagger: .2,
      color: `#ffff`
    });
  }

  // Final refresh
  ScrollTrigger.refresh();
}

function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  if (!canvas) return;
  
  const context = canvas.getContext("2d");
  
  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2); // Limit pixel ratio for mobile
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    canvas.width = displayWidth * pixelRatio;
    canvas.height = displayHeight * pixelRatio;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    context.scale(pixelRatio, pixelRatio);
  }
  
  resizeCanvas();

  window.addEventListener("resize", function () {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
      resizeCanvas();
      render();
      ScrollTrigger.refresh();
    }, 300);
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

  let loadedImages = 0;
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) render();
    };
    img.onerror = () => {
      console.warn(`Failed to load image: ${files(i)}`);
    };
    img.src = files(i);
    images.push(img);
  }

  const tl = gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "300% top",
      scroller: scrollerElement,
      scrub: isMobile ? 2 : 1,
      pin: true,
      anticipatePin: 1,
      refreshPriority: 1
    },
    onUpdate: render,
  });

  function render() {
    const currentFrame = Math.round(imageSeq.frame);
    if (images[currentFrame] && images[currentFrame].complete) {
      scaleImage(images[currentFrame], context);
    }
  }

  function scaleImage(img, ctx) {
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
}

function canvas1() {
  const canvas = document.querySelector("#page5>canvas");
  if (!canvas) return;
  
  const context = canvas.getContext("2d");

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    canvas.width = displayWidth * pixelRatio;
    canvas.height = displayHeight * pixelRatio;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    context.scale(pixelRatio, pixelRatio);
  }
  
  resizeCanvas();

  window.addEventListener("resize", function () {
    clearTimeout(window.resizeTimeout1);
    window.resizeTimeout1 = setTimeout(() => {
      resizeCanvas();
      render();
      ScrollTrigger.refresh();
    }, 300);
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
    img.onerror = () => {
      console.warn(`Failed to load image: ${files(i)}`);
    };
    img.src = files(i);
    images.push(img);
  }

  const tl2 = gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#page5",
      start: "top top",
      end: "300% top",
      scroller: scrollerElement,
      scrub: isMobile ? 2 : 1,
      pin: true,
      anticipatePin: 1,
      refreshPriority: 1
    },
    onUpdate: render,
  });

  function render() {
    const currentFrame = Math.round(imageSeq.frame);
    if (images[currentFrame] && images[currentFrame].complete) {
      scaleImage(images[currentFrame], context);
    }
  }

  function scaleImage(img, ctx) {
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
}

// Mobile specific optimizations
if (isMobile) {
  console.log("Mobile mode active");
  
  // Prevent iOS bounce scroll
  document.addEventListener('touchmove', function(e) {
    if (e.target.tagName !== 'CANVAS') {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Handle orientation change
  window.addEventListener('orientationchange', function() {
    setTimeout(() => {
      ScrollTrigger.killAll();
      initAnimations();
    }, 500);
  });
  
  // Optimize touch scrolling
  let isScrolling = false;
  window.addEventListener('scroll', function() {
    if (!isScrolling) {
      window.requestAnimationFrame(function() {
        ScrollTrigger.update();
        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });
}
