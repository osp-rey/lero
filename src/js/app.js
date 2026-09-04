import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import heroScroll from "./functions/heroScroll.js";
import inputmask from "./functions/inputmask.min.js";
import more from "./functions/more.js";
import scrollVideo from "./functions/scrollVideo.js";
import sliders from "./functions/sliders.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  inputmask();
  scrollVideo();
  heroScroll();
  buttonsNote();
  more();
  sliders();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
  // Fancybox.show([{ src: "#modal-feedback", type: "inline" }], {
  //   closeButton: false,
  // });
});
