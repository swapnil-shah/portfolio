function init() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: {

    }
  });

  tl.from([".logo", ".main-nav"], {
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  })
    .from(".intro__tagline .line span", {
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      stagger: {
        amount: 0.3
      }
    }).from(".intro__description", {
      y: 40,
      duration: 2,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 1
      }
    }, "-=.5").from(".brands", {
      y: -40,
      duration: 2,
      opacity: 0,
      ease: "power3.out"
    }, "-=1").from(".scroll", {
      opacity: 0,
      ease: "power0.out",
    }, "-=.5")


  gsap.to(".brands__logo", {
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".scroll",
      scrub: true,
      end: "bottom 25%"
    }
  })
  gsap.to(".scroll__animated", {
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".scroll",
      scrub: true,
      end: "bottom 50%",
    },
  })

  // All section headers
  gsap.utils.toArray(".section").forEach(function (section) {
    var header = section.querySelector("h3");
    gsap.from(header, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "powe3.out",
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: section,
        start: "center bottom"
      }
    });
  });


  gsap.from([".featured__image", ".featured__content h4", ".featured__content p", ".featured__content a"], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    },
    scrollTrigger: {
      trigger: ".featured",
      start: "center bottom",
    }
  });

  gsap.from(".card", {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    },
    scrollTrigger: {
      trigger: ".favorites",
      start: "center bottom"
    }
  });


  gsap.from([".design__image", ".design__copy h4", ".design__copy p", ".design__copy a"], {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    },
    scrollTrigger: {
      trigger: ".design",
      start: "center bottom"
    }
  });

  // gsap.utils.toArray('.ribbon').forEach((section, index) => {
  const section = document.querySelector(".ribbon")
  const w = section.querySelector('.ribbon__text');
  // const [x, xEnd] = ['100%', (w.scrollWidth - section.offsetWidth)]
  gsap.fromTo(w, { x: "100%" }, {
    x: 0,
    scrollTrigger: {
      trigger: section,
      scrub: .5,
      start: "center bottom"
    }
  });
  // });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".grid",
      start: "top top",
      end: () => innerHeight * 4,
      scrub: true,
      pin: ".grid__container",
      anticipatePin: 1
    }
  })
    .set(".grid__block:not(.centerBlock)", { autoAlpha: 0 })
    .to(".grid__block:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
    .from(".grid__layer", {
      scale: 3.3333,
      ease: "none",
    });

  // const size = Math.max(innerWidth, innerHeight);
  // gsap.set('.grid__block', { backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})` });

  const bigImg = new Image;
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .grid__block", { autoAlpha: 1, duration: 0.5 });
  });

  bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
}


window.addEventListener("load", function () {
  init()
})