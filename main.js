import './style.scss'

import "./node_modules/scrollreveal/dist/scrollreveal"
// import "./node_modules/jquery/dist/jquery";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./node_modules/waypoints/lib/noframework.waypoints";
import counterUp from 'counterup2'
import Typed from 'typed.js';



// ScrollReveal({
//   origin: 'top',
//   distance: '50px',
//   duration: 3000,
//   // reset: true,
// }).reveal('.srtop',{
//   interval: 5,
//   delay : 200
// });

// ScrollReveal({
//   origin: 'bottom',
//   distance: '50px',
//   duration: 2000,
//   // reset: true,
// }).reveal('.srbottom',{
//   interval: 200
// });

// ScrollReveal({
//   origin: 'left',
//   distance: '50px',
//   duration: 3000,
//   // reset: true,
// }).reveal('.srleft',{
//   interval: 200
// });

// ScrollReveal({
//   origin: 'right',
//   distance: '50px',
//   duration: 3000,
//   // reset: true,
// }).reveal('.srright',{
//   interval: 200
// });


const slideLeft = {
  distance: "90px",
  origin: "left",
  duration: 600,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".srleft", slideLeft);

const slideRight = {
  distance: "90px",
  origin: "right",
  duration: 600,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".srright", slideRight);

const slideTop = {
  distance: "90px",
  origin: "top",
  duration: 600,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".srtop", slideTop);


const slideBottom = {
  distance: "90px",
  origin: "bottom",
  duration: 800,
  cleanup: true,
  easing: "ease-in",
  delay: 200,
};
ScrollReveal().reveal(".srbottom", slideBottom);


const preBtn = document.querySelector(".btn-left");
const nextBtn =document.querySelector(".btn-right");
const carousel1 =document.querySelector("#carousel1");
const carousel2=document.querySelector("#carousel2");


const myCarousel = new bootstrap.Carousel(carousel1);
const myCarousel2 =new bootstrap.Carousel(carousel2);

preBtn.addEventListener("click",function(){
  myCarousel.prev();
  myCarousel2.prev();
})
 nextBtn.addEventListener("click",function(){
   myCarousel.next();
   myCarousel2.next();
 })




//counter

const counter =document.querySelectorAll(".counter");
console.log(counter);

counter.forEach((cur)=>{
   new Waypoint({
    element: cur,
    handler: function() {
      counterUp( cur, {
        duration: 1000,
        delay: 16,
    } )
    },
    offset :"bottom-in-view",
  })
});


//type js

var options = {
  strings: ["founders.","developers.","designers."],
  typeSpeed: 40,
  backDelay :1000,
  backSpeed :40,
  loop : true,
  smartBackSpace : false,

}; new Typed(".type",options);



