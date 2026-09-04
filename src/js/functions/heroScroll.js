export default function heroScroll() {
  const hero = document.querySelector(".s-hero");
  const production = document.querySelector(".s-production");
  if (hero) {
    const frameStart = hero.querySelector("#hero-frame-start");
    const logo = hero.querySelector(".s-hero__frame-logo");
    const text = hero.querySelector(".s-hero__frame-text");
    const centerSeparator = hero.querySelector(
      ".s-hero__frame-center .separator",
    );

    const frameSecond = hero.querySelector("#hero-frame-second");
    const content = hero.querySelector(".s-hero__frame-content");
    const btn = hero.querySelector(".s-hero__frame-btn");

    const endOption = "center center+=50vh";

    gsap.to(frameStart, {
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "center center",
        end: "center center",
        scrub: 1,
      },
    });
    gsap.to(logo, {
      x: -300,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "center center",
        scrub: 1,
      },
    });
    gsap.to(text, {
      x: 300,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "center center",
        scrub: 1,
      },
    });
    gsap.to(centerSeparator, {
      y: -100,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "center center",
        scrub: 1,
      },
    });

    gsap.set(frameSecond, { opacity: 0 });
    gsap.set(content, { opacity: 0, x: -100 });
    gsap.set(btn, { opacity: 0, y: 50 });

    gsap.to(frameSecond, {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "center center",
        end: endOption,
        scrub: 1,
      },
    });

    gsap.to(content, {
      opacity: 1,
      x: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "center center",
        end: endOption,
        scrub: 1,
      },
    });

    gsap.to(btn, {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "center center",
        end: endOption,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }
}
