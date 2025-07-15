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
    // Mobile: Disable Locomotive, use native scroll
    document.querySelector("#main").style.height = "auto";
    document.querySelector("#main").style.overflow = "visible";
    ScrollTrigger.refresh();
  }
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
  `;
    return data.split("\n")[index];
  }

  const frameCount = 10;
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
    `;
    return data.split("\n")[index];
  }

  const frameCount = 10;
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
