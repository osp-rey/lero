export default function scrollWrap() {
  const wrap = document.querySelector(".scroll-wrap");

  if (wrap) {
    const items = wrap.querySelectorAll(".scroll-wrap-item");

    if (items.length) {
      items.forEach((item, index) => {
        item.style.zIndex = index + 1;
      })
    }
  }
}