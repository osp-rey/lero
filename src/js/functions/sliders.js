export default function sliders() {
  const portfolioSliders = document.querySelectorAll(".s-portfolio__slider");

  if (portfolioSliders.length) {
    portfolioSliders.forEach(slider => {
      const parentTab =  slider.closest("[data-tab]");
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
    })
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
}
