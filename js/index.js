const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// let doc = document
// let tour = doc.querySelector('.number_bl h1')

// function countFromZero() {
//   for (let i = 0; i <= 450; i++) {
//     tour =  tour = i
//     setTimeout(function() {
//       console.log(i);
//     }, i * 10)
//   }
// }
