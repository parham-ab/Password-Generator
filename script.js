// variables
let Input = document.querySelector(".input");
let len = 18;
const generate = document.querySelector(".generate");
const copyClipBoard = document.querySelector(".copy");
const clearInput = document.querySelector(".clear");
// chars
let chars =
  "0123456789abcdefghijklmnopqrstuvweyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Generate Password
generate.addEventListener("click", function () {
  let randomPass = Array(len)
    .fill(chars)
    .map(function (e) {
      return e[Math.floor(Math.random() * e.length)];
    })
    .join("");
  Input.value = randomPass;
});
// copy button
copyClipBoard.addEventListener("click", function () {
  if (Input.value.trim() || Input.value.length) {
    Input.select();
    Input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(Input.value);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Password Copied 😉 !",
    });
  }
});
// clear button
clearInput.addEventListener("click", function () {
  Input.value = "";
});
// particle js
particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});