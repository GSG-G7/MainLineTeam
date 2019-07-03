(() => {
   let slideIndex = 1;

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
      if (n < 1) {
         slideIndex = slides.length; // 3 for now ===> fix it later
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
            document.querySelector('.header__topnav').style.lineHeight = '30px';
         }
      };
   }
})();
