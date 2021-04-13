function init() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: {

    }
  });
  let headers = document.querySelectorAll("section h3")

  tl
    .to(".logo-bg", {
      scale: 1,
      duration: 0.3
    })
    .to(".logo", {
      opacity: 1, duration: .7, delay: .5
    })
    .to(".logo-bg", {
      scale: 0, duration: .7
    }, "-=.5")
    .from(".intro__tagline .line span", {
      y: 80,
      duration: 1.2,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    }, "-=.5").from(".intro__description", {
      y: 40,
      duration: 2,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 1
      }
    }, "-=.2").from(".brands", {
      y: -20,
      duration: 2,
      opacity: 0,
      ease: "power3.out"
    }, "-=1").from(".main-nav", {
      y: -16,
      opacity: 0,
      duration: 1.5,
      ease: "power0.inOut"
    }, "-=.8").from(".scroll", {
      delay: 0,
      opacity: 0,
      ease: "power0.out",
    }, "-=1")


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
        start: "center 70%"
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
      start: "center 70%",
    }
  });

  gsap.from(".card", {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    },
    scrollTrigger: {
      trigger: ".favorites",
      start: "center 70%"
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
      start: "center 70%"
    }
  });
}


window.addEventListener("load", function () {
  init()
})