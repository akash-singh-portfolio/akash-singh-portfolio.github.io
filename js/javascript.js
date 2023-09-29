var con = document.getElementById("back-panel")
var head = document.getElementById("headings")
var backtop = document.querySelector("#top")

// HERO-SECTION PARALLAX EFFECT
window.addEventListener("scroll", () => {

   const scrollValue = window.scrollY;
   if (scrollY >= 10 && scrollY <= 450) {
      con.style.marginTop = "-" + scrollValue * 0.3 + "px";
      head.style.marginTop = "-" + scrollValue * 1 + "px";
      head.style.opacity = "0.5";
      head.style.transition = "opacity 1s ease";
   } else {
      con.style.marginTop = "-134.64px";
      head.style.opacity = "1";
      head.style.transition = "opacity 1s ease";
   }
   if (scrollY <= 10) {
      con.style.marginTop = "0px";
   } else {}

   if (scrollY > 420) {
      backtop.style.display = "block";
   } else {
      backtop.style.display = "none";
   }
   //   console.log(scrollValue);
});


// NAVIGATION OPEN ANIMATION
var close = document.getElementById("nav-close");
var bg_1 = document.getElementById("bg-one");
var bg_2 = document.getElementById("bg-two");
var NFP = document.getElementById("NFP");


function NavAnimation() {
   if (NFP.style.display = "none") {
      NFP.style.display = "block";
      bg_1.style.animation = "one 0.3s linear 0.1s forwards";
      bg_2.style.animation = "two 0.3s linear 0.5s forwards";
      document.body.style.overflow = "hidden";
   } else {
      NFP.style.display = "none";
   }
}

// NAVIGATION CLOSE
function closeNav() {
   if (NFP.style.display = "block") {

      bg_1.style.animation = "onere 0.3s linear 0.5s backwards";
      bg_2.style.animation = "twore 0.3s linear 0.1s backwards";
      document.body.style.overflow = "visible";


      setTimeout(() => {
         NFP.style.display = "none";
      }, 800);
   } else {
      NFP.style.display = "none";
   }
}


//   WORKS SLIDER JQUERY 
$('.owl-one').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1.5
      },
      1000: {
         items: 2.5
      }
   }
})
//   TESTIMONIALS SLIDER JQUERY 
$('.owl-two').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   responsive: {
      0: {
         items: 1
      },
      1000: {
         items: 2
      }
   }
})