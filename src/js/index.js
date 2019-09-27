//轮播
let mySwiper = new Swiper('.swiper-container', {
  autoplay:true,//等同于以下设置
 /* autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    reverseDirection: false,
    },*/
  pagination: {
    el: '.swiper-pagination',
  },
});

