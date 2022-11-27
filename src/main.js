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

window.addEventListener('scroll', onScroll)

function showNavOnScroll(){
  if(scrollY>0){
    document.querySelector('#nav').classList.add('bg-yellow-900')
  }else{
    document.querySelector('#nav').classList.remove('bg-yellow-900')
  }
}

function onScroll(){
  showNavOnScroll()
  activateMenuAtCurrentSection(main)
  activateMenuAtCurrentSection(catalog)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectonTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndAt = sectionTop + sectionHeight 

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries = sectonTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`nav a[href*=${sectionId}]`) 

  menuElement.classList.add('border-b-transparent')
  if(sectionBoundaries){
    menuElement.classList.remove('border-b-transparent')
    menuElement.classList.add('border-b-white')
  }

}

