(() => {
    "use strict";
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerOpen = document.querySelector("#burger-open");
            const burgerCloses = document.querySelectorAll("[data-burger-close]");
            const burgerOverlay = document.querySelector("#burger-overlay");
            const burgerAnchors = burger.querySelectorAll(".anchors a[href^='/#']");
            burgerOverlay.addEventListener("click", handleClose);
            burgerOpen.addEventListener("click", () => {
                handleOpen();
            });
            burgerCloses.forEach(btn => btn.addEventListener("click", handleClose));
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            function handleOpen() {
                document.body.classList.add("body-hidden");
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                updateHeightBurger();
            }
            function handleClose() {
                document.body.classList.remove("body-hidden");
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
        const burgerTabBtns = burger.querySelectorAll("[data-burger-tab-btn]");
        if (burgerTabBtns.length) {
            const allTabs = burger.querySelectorAll(".burger__tab");
            burgerTabBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.burgerTabBtn;
                    const tab = burger.querySelector(`[data-burger-tab="${id}"]`);
                    if (tab) {
                        allTabs.forEach(t => {
                            t.classList.remove("_show");
                            setTimeout(() => {
                                t.classList.remove("_active");
                            }, 150);
                        });
                        setTimeout(() => {
                            tab.classList.add("_active");
                            setTimeout(() => {
                                tab.classList.add("_show");
                            }, 150);
                        }, 150);
                    }
                });
            });
        }
    }
    function heroScroll() {
        const hero = document.querySelector(".s-hero");
        const production = document.querySelector(".s-production");
        if (hero) {
            const frameStart = hero.querySelector("#hero-frame-start");
            const logo = hero.querySelector(".s-hero__frame-logo");
            const text = hero.querySelector(".s-hero__frame-text");
            const centerSeparator = hero.querySelector(".s-hero__frame-center .separator");
            const frameSecond = hero.querySelector("#hero-frame-second");
            const content = hero.querySelector(".s-hero__frame-content");
            const btn = hero.querySelector(".s-hero__frame-btn");
            gsap.to(frameStart, {
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "center center",
                    end: "center center",
                    scrub: 1
                }
            });
            gsap.to(logo, {
                x: -300,
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "center center",
                    scrub: 1
                }
            });
            gsap.to(text, {
                x: 300,
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "center center",
                    scrub: 1
                }
            });
            gsap.to(centerSeparator, {
                y: -100,
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "center center",
                    scrub: 1
                }
            });
            gsap.set(frameSecond, {
                opacity: 0
            });
            gsap.set(content, {
                opacity: 0,
                x: -100
            });
            gsap.set(btn, {
                opacity: 0,
                y: 50
            });
            gsap.to(frameSecond, {
                opacity: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
            gsap.to(content, {
                opacity: 1,
                x: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
            gsap.to(btn, {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: hero,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
            return () => {
                ScrollTrigger.getAll().forEach(st => st.kill());
            };
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function scrollVideo() {
        const heroVideo = document.querySelector("#hero-video");
        if (heroVideo) {
            new ScrollyVideo({
                scrollyVideoContainer: "hero-video",
                src: heroVideo.dataset.src
            });
        }
    }
    function scrollWrap() {
        const wrap = document.querySelector(".scroll-wrap");
        if (wrap) {
            const items = wrap.querySelectorAll(".scroll-wrap-item");
            if (items.length) {
                items.forEach((item, index) => {
                    item.style.zIndex = index + 1;
                });
            }
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        burger();
        inputmask();
        scrollVideo();
        heroScroll();
        scrollWrap();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false,
            on: {
                destroy: instance => {
                    const id = instance.getSlide().src;
                    if (id.includes("#modal")) {
                        const modal = document.querySelector(id);
                        const inputNote = modal.querySelector(".input-note");
                        const modalTitle = modal.querySelector(".modal__title[data-text]");
                        if (inputNote) inputNote.value = "";
                        if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
                    }
                }
            }
        });
    });
})();