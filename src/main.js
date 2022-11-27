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

  function atualizar(){
  // console.log(window.innerWidth)
  slide()
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
}).reveal(`
  #nav,
  #main,
  #style,
  #catalog,
  #about
`);

// ScrollReveal({
//   origin: 'right',
//   distance: '90%',
//   duration: 2000,
// }).reveal(`
//   #main #first, 
//   #main #second,
//   #style #first, 
//   #style #second,
//   #about #first,
//   #about #second,
//   #footer
// `, );