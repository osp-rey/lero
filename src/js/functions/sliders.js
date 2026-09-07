export default function sliders() {
  const portfolioSliders = document.querySelectorAll(".s-portfolio__slider");

  if (portfolioSliders.length) {
    portfolioSliders.forEach((slider) => {
      const parentTab = slider.closest("[data-tab]");
      const idTab = parentTab.dataset.tab;

      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: `.s-portfolio__nav-wrap [data-tab="${idTab}"] .slider-arrow._prev`,
          nextEl: `.s-portfolio__nav-wrap [data-tab="${idTab}"] .slider-arrow._next`,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
        scrollbar: {
          el: parentTab.querySelector(".slider-scrollbar"),
          draggable: true,
        },
        on: {
          touchStart: function (swiper, event) {
            const isProductSlider = event.target.closest(
              ".card-portfolio__slider",
            );
            if (isProductSlider) {
              swiper.allowTouchMove = false;
            }
          },
          touchEnd: function (swiper) {
            swiper.allowTouchMove = true;
          },
        },
      });
    });
  }

  const cardPortfolioSliders = document.querySelectorAll(
    ".card-portfolio__slider",
  );

  if (cardPortfolioSliders.length) {
    cardPortfolioSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        navigation: {
          prevEl: slider.querySelector(".slider-arrow._prev"),
          nextEl: slider.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: slider.querySelector(".slider-pagination"),
          clickable: true,
        },
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
        delay: 5500,
      },
      scrollbar: {
        el: ".s-team .slider-scrollbar",
        draggable: true,
      },
      navigation: {
        prevEl: ".s-team .slider-arrow._prev",
        nextEl: ".s-team .slider-arrow._next",
      },
      breakpoints: {
        1200: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
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
          slidesPerView: "auto",
        },
      },
    });

    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      autoplay: {
        delay: 5500,
      },
      navigation: {
        prevEl: ".s-gallery .slider-arrow._prev",
        nextEl: ".s-gallery .slider-arrow._next",
      },
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  }

  const videoSlider = document.querySelector(".s-video__slider");

  if (videoSlider) {
    const swiper = new Swiper(videoSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      autoplay: {
        delay: 6000,
      },
      scrollbar: {
        el: ".s-video .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1365: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        480: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
      },
    });
  }
}
