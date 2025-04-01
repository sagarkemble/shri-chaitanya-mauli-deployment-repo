const expandableLinks = document.querySelector(".expandable-links");
const expandableLinksToggleButton =
  document.querySelector(".hamburger-wrapper");
// const subLinkToggleButton = document.querySelector(".sub-link-toggle-btn");
// const subLinks = document.querySelector(".sub-links");
expandableLinksToggleButton.addEventListener("click", () => {
  expandableLinks.classList.toggle("opacity-100");
  expandableLinks.classList.toggle("max-h-96");
  expandableLinks.classList.toggle("py-4");
});
// subLinkToggleButton.addEventListener("click", () => {
//   subLinks.classList.toggle("max-h-96");
//   subLinks.classList.toggle("pt-3");
// });
const swiper = new Swiper("#swiper-1", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  loop: true,

  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper2 = new Swiper("#swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.1,
  spaceBetween: 13,
  breakpoints: {
    768: {
      spaceBetween: 10,
      slidesPerView: "1.9",
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: "auto",
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper3 = new Swiper("#swiper-3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.1,
  spaceBetween: 13,
  breakpoints: {
    768: {
      spaceBetween: 10,
      slidesPerView: "1.9",
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: "auto",
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper4 = new Swiper("#swiper-4", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
