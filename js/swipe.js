// Swiperの初期化：スマホ（768px以下）のみで1枚ずつ自動再生
if (window.innerWidth <= 768) {
  const swiper = new Swiper('.mySwiper', {

    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000
  });
}

