(() => {
   let slideIndex = 1;
// 
   //****************

   setInterval(() => {
      showSlides((slideIndex += 1));
   }, 2500);

   //****************
   function showSlides(n) {
      let slides = document.getElementsByClassName('mySlides');
      if (n > slides.length) {
         slideIndex = 1;
      }

      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = 'none';
      }

      slides[slideIndex - 1].style.display = 'block';

      window.onscroll = function() {
         if (window.scrollY == 0) {
            document.querySelector('nav').style.height = '70px';
            document.querySelector('nav').style.opacity = '1';
            document.querySelector('.header__topnav').style.lineHeight = '50px';
         } else {
            document.querySelector('nav').style.height = '50px';
            document.querySelector('nav').style.opacity = '.7';
            document.querySelector('nav').style.backgroundColor = 'white';
            document.querySelector('.header__topnav').style.lineHeight = '30px';
         }
      };
   }
})();
/*===========> About Us animation <=========== */
// get the element to animate
var element = document.getElementsByClassName('box');
var elementHeight = element[0].clientHeight - 500;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
   // get window height
   var windowHeight = window.innerHeight;
   // get number of pixels that the document is scrolled
   var scrollY = window.scrollY || window.pageYOffset;

   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
   var scrollPosition = scrollY + windowHeight;
   // get element position (distance from the top of the page to the bottom of the element)
   var elementPosition =
      element[3].getBoundingClientRect().top + scrollY + elementHeight;

   // is scroll position greater than element position? (is element in view?)
   if (scrollPosition > elementPosition) {
      console.log('dasdasd');
      return true;
   }

   return false;
}

// animate element when it is in view
function animate() {
   // is element in view?
   if (inView()) {
      // element is in view, add class to element
      for (let i = 0; i < element.length; ++i) {
         element[i].classList.add(
            'animated',
            'animatedFadeInUp',
            'fadeInUp',
            'opacity-1'
         );
      }
   }
}
/*===========> End of About Us animation <=========== */
/*===========> Scroll to Top <=========== */
var timeOut;
function scrollToTop() {
   if (
      document.body.scrollTop != 0 ||
      document.documentElement.scrollTop != 0
   ) {
      window.scrollBy(0, -50);
      timeOut = setTimeout('scrollToTop()', 10);
   } else clearTimeout(timeOut);
}
/*===========> End of Scroll to Top <=========== */
