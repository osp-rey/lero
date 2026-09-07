export default function formFiles() {
  const wraps = document.querySelectorAll(".file-wrapper");

  if (wraps.length) {
    wraps.forEach((wrap) => {
      const btn = wrap.querySelector(".file-btn");
      const btnName = btn.querySelector(".file-name");
      const input = wrap.querySelector("input[type='file']");

      input.addEventListener("change", (e) => {
        const files = e.target.files;

        if (files.length) {
          const file = files[0];
          btnName.textContent = file.name;
        }
      });
    });
  }
}
