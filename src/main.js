slide()
function slide(){
    var preview = 3
    if (467<window.innerWidth<950){
        preview = 2
    }
    if(window.innerWidth<467){
      preview = 1
    }if(window.innerWidth>950){
      preview = 3
    }
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: preview,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  }

  function updateSlide(){
  slide()
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
}).reveal(`
  #nav,
  #main,
  #style,
  #catalog,
  #about
`);
