document.addEventListener("DOMContentLoaded", () => {
  kvSlider();

  function kvSlider() {
    let mySwiper = new Swiper(".kv-wrapper .swiper-container", {
      loop: true,
      // If you need pagination
      pagination: {
        el: ".kv-wrapper .swiper-pagination",
        clickable: true,
      },
      autoplay: {
        autoplayDelay: 3000,
      },
    });
  }
});
