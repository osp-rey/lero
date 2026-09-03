export default function heroScroll() {
  const hero = document.querySelector(".s-hero");

  if (hero) {
    const logo = hero.querySelector(".s-hero__frame-logo");

    window.addEventListener("scroll", () => {
      const rect = hero.getBoundingClientRect();
      const rectTop = rect.top + window.scrollY;
      const height = rect.height;

      const scrollY = window.scrollY;
      const start = rectTop - window.innerHeight;
      const end = rectTop + height;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      logo.style.transform = `translateX(${-progress * 300}px)`;
      logo.style.opacity = 1 - progress;
    });
  }
}
