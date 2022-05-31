import './style.scss'

import "./node_modules/scrollreveal/dist/scrollreveal"
import "./node_modules/jquery/dist/jquery";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 3000,
  // reset: true,
}).reveal('.srtop',{
  interval: 200
});

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 3000,
  // reset: true,
}).reveal('.srbottom',{
  interval: 200
});

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 3000,
  // reset: true,
}).reveal('.srleft',{
  interval: 200
});

ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 3000,
  // reset: true,
}).reveal('.srright',{
  interval: 200
});










