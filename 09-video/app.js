const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
    if (!btn.classList.contains("slider")) {
      btn.classList.add("slider");
      video.pause();
    } else {
      btn.classList.remove("slider");
      video.play();
    }
  });

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
  });
