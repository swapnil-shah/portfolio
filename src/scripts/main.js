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

  gsap.utils.toArray('.ribbon').forEach((section, index) => {
    const w = section.querySelector('.ribbon__text');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd + 100,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }
    });
  });
}


window.addEventListener("load", function () {
  init()
})