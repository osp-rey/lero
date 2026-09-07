(() => {
    "use strict";
    function anchors_anchors() {
        const containers = document.querySelectorAll(".anchors");
        if (containers.length) {
            containers.forEach(container => {
                const blocks = [];
                const items = container.querySelectorAll("a");
                items.forEach(item => {
                    const block = document.querySelector(`${item.getAttribute("href").replace("/", "")}`);
                    if (block) blocks.push(block);
                    item.addEventListener("click", e => {
                        e.preventDefault();
                        if (block) {
                            block.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    });
                });
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            const id = target.id;
                            const anchorsItems = document.querySelectorAll(`a[href="/#${id}"]`);
                            anchorsItems.forEach(item => {
                                const neighborsItems = item.closest(".anchors").querySelectorAll("a");
                                if (neighborsItems.length) neighborsItems.forEach(i => i?.classList?.remove("_active"));
                                item?.classList?.add("_active");
                            });
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                blocks.forEach(block => {
                    observer.observe(block);
                });
            });
        }
    }
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerOpen = document.querySelector("#burger-open");
            const burgerCloses = document.querySelectorAll("[data-burger-close]");
            const burgerOverlay = document.querySelector("#burger-overlay");
            const burgerAnchors = burger.querySelectorAll("a[href^='/#']");
            burgerAnchors.forEach(anchor => {
                anchor.addEventListener("click", () => {
                    handleClose();
                });
            });
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
    function buttonsNote() {
        const buttons = document.querySelectorAll("[data-btn-note]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const selectorTarget = btn.dataset.targetNote;
                    const target = document.querySelector(selectorTarget);
                    const value = btn.dataset.btnNote;
                    if (target) {
                        target.value = value;
                    }
                });
            });
        }
    }
    function changeModalTitle() {
        const buttons = document.querySelectorAll("[data-fancybox][data-modal-title]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const titleValue = btn.dataset.modalTitle;
                    if (titleValue) {
                        const selector = btn.getAttribute("href") || btn.dataset.src;
                        const modalTitle = document.querySelector(selector).querySelector(".modal__title");
                        if (modalTitle) modalTitle.textContent = titleValue;
                    }
                });
            });
        }
    }
    function formFiles() {
        const wraps = document.querySelectorAll(".file-wrapper");
        if (wraps.length) {
            wraps.forEach(wrap => {
                const btn = wrap.querySelector(".file-btn");
                const btnName = btn.querySelector(".file-name");
                const input = wrap.querySelector("input[type='file']");
                input.addEventListener("change", e => {
                    const files = e.target.files;
                    if (files.length) {
                        const file = files[0];
                        btnName.textContent = file.name;
                    }
                });
            });
        }
    }
    function heroScroll() {
        const hero = document.querySelector(".s-hero");
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
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) {
                resolve(script);
            } else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) {
                    htmlScript.type = type;
                }
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function createEl(tag, classes = "") {
        const item = document.createElement(tag);
        if (classes) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        }
        return item;
    }
    function map() {
        const maps = document.querySelectorAll(".map");
        if (maps.length) {
            maps.forEach(map => {
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => handlerCreateMap(target));
                            observer.unobserve(target);
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                observer.observe(map);
            });
            function handlerCreateMap(map) {
                const center = JSON.parse(map.dataset.center);
                const zoom = Number(map.dataset.zoom);
                const iconHref = map.dataset.icon;
                let iconSize = [ 60, 68 ];
                let iconPosition = [ -30, -68 ];
                let objectMark = {};
                if (iconHref) {
                    objectMark = {
                        iconLayout: "default#image",
                        iconImageHref: iconHref,
                        iconImageSize: iconSize,
                        iconImageOffset: iconPosition
                    };
                }
                function init() {
                    const htmlMap = new ymaps.Map(map, {
                        center,
                        zoom
                    });
                    const placemark = new ymaps.Placemark(center, {}, objectMark);
                    htmlMap.geoObjects.add(placemark);
                    htmlMap.controls.remove("geolocationControl");
                    htmlMap.controls.remove("searchControl");
                    htmlMap.controls.remove("trafficControl");
                    htmlMap.controls.remove("typeSelector");
                    htmlMap.controls.remove("fullscreenControl");
                    htmlMap.controls.remove("rulerControl");
                }
                ymaps.ready(init);
            }
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) {
            containers.forEach(container => {
                const btn = container.querySelector("[data-more-btn]");
                const count = +container.dataset.countShow;
                const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
                if (hideItems.length === 0) btn.remove();
                btn.addEventListener("click", () => {
                    const items = container.querySelectorAll("[data-more-item]");
                    const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                    hideItems.splice(0, count).forEach(item => {
                        item.classList.add("_active");
                        setTimeout(() => {
                            item.classList.add("_show");
                        });
                    });
                    if (hideItems.length <= 0) btn.remove();
                });
            });
        }
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
    function sliders() {
        const portfolioSliders = document.querySelectorAll(".s-portfolio__slider");
        if (portfolioSliders.length) {
            portfolioSliders.forEach(slider => {
                const parentTab = slider.closest("[data-tab]");
                const idTab = parentTab.dataset.tab;
                const swiper = new Swiper(slider, {
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        prevEl: `.s-portfolio__nav-wrap [data-tab="${idTab}"] .slider-arrow._prev`,
                        nextEl: `.s-portfolio__nav-wrap [data-tab="${idTab}"] .slider-arrow._next`
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    },
                    scrollbar: {
                        el: parentTab.querySelector(".slider-scrollbar"),
                        draggable: true
                    },
                    on: {
                        touchStart: function(swiper, event) {
                            const isProductSlider = event.target.closest(".card-portfolio__slider");
                            if (isProductSlider) {
                                swiper.allowTouchMove = false;
                            }
                        },
                        touchEnd: function(swiper) {
                            swiper.allowTouchMove = true;
                        }
                    }
                });
            });
        }
        const cardPortfolioSliders = document.querySelectorAll(".card-portfolio__slider");
        if (cardPortfolioSliders.length) {
            cardPortfolioSliders.forEach(slider => {
                const swiper = new Swiper(slider, {
                    speed: 900,
                    navigation: {
                        prevEl: slider.querySelector(".slider-arrow._prev"),
                        nextEl: slider.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: slider.querySelector(".slider-pagination"),
                        clickable: true
                    }
                });
            });
        }
        const teamSlider = document.querySelector(".s-team__slider");
        if (teamSlider) {
            const swiper = new Swiper(teamSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: 2,
                autoplay: {
                    delay: 5500
                },
                scrollbar: {
                    el: ".s-team .slider-scrollbar",
                    draggable: true
                },
                navigation: {
                    prevEl: ".s-team .slider-arrow._prev",
                    nextEl: ".s-team .slider-arrow._next"
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    }
                }
            });
        }
        const gallerySlider = document.querySelector(".s-gallery__slider");
        if (gallerySlider) {
            const thumbSwiper = new Swiper(".s-gallery__thumb-slider", {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: "auto",
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: "auto"
                    }
                }
            });
            const swiper = new Swiper(gallerySlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: 1,
                autoplay: {
                    delay: 5500
                },
                navigation: {
                    prevEl: ".s-gallery .slider-arrow._prev",
                    nextEl: ".s-gallery .slider-arrow._next"
                },
                thumbs: {
                    swiper: thumbSwiper
                }
            });
        }
        const videoSlider = document.querySelector(".s-video__slider");
        if (videoSlider) {
            const swiper = new Swiper(videoSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: 1,
                autoplay: {
                    delay: 6e3
                },
                scrollbar: {
                    el: ".s-video .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1365: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    480: {
                        spaceBetween: 15,
                        slidesPerView: 2
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) {
                initSpollers(spollersRegular);
            }
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) {
                mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            }
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) {
                document.addEventListener("click", function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) {
                        spollersClose.forEach(spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        });
                    }
                });
            }
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) {
                    return item.dataset[dataSetValue].split(",")[0];
                }
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) {
                                return true;
                            }
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tab() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const container = btn.closest(".tabs");
                    const tabId = btn.dataset.tabBtn;
                    const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                    const allTabs = [];
                    const allTabsContents = container.querySelectorAll(".tabs-content");
                    allTabsContents.forEach(tabsContent => {
                        const tabs = Array.from(tabsContent.children).filter(child => child.hasAttribute("data-tab"));
                        allTabs.push(...tabs);
                    });
                    const currentTabs = container.querySelectorAll(`[data-tab="${tabId}"]`);
                    allTabs.forEach(t => {
                        t.classList.remove("_show");
                        setTimeout(() => {
                            t.classList.remove("_active");
                        }, 150);
                    });
                    setTimeout(() => {
                        currentTabs.forEach(t => {
                            t.classList.add("_active");
                            setTimeout(() => {
                                t.classList.add("_show");
                            }, 150);
                        });
                    }, 150);
                    allButtons.forEach(b => b.classList.remove("_active"));
                    btn.classList.add("_active");
                });
            });
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        burger();
        inputmask();
        scrollVideo();
        heroScroll();
        buttonsNote();
        more();
        sliders();
        changeModalTitle();
        tab();
        formFiles();
        spoller();
        map();
        anchors_anchors();
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