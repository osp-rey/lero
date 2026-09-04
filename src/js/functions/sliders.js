export default function sliders() {
  const portfolioSlider = document.querySelector(".s-portfolio__slider");

  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 900,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        prevEl: ".s-portfolio__nav-wrap .slider-arrow._prev",
        nextEl: ".s-portfolio__nav-wrap .slider-arrow._next",
      },
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
      });
    });
  }
}
