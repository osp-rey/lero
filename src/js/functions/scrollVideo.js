export default function scrollVideo() {
  const heroVideo = document.querySelector("#hero-video");

  if (heroVideo) {
    new ScrollyVideo({
      scrollyVideoContainer: "hero-video",
      src: heroVideo.dataset.src,
    });
  }
}
