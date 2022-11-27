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

ScrollReveal({
  origin: 'right',
  distance: '90%',
  duration: 2000,
}).reveal(`
  #main #first, 
  #main #second,

  #about #first,
  #about #second
`);