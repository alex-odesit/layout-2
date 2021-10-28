window.onload = function () {
   new Swiper('.swiper-header', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
   new Swiper('.swiper-section', {
      slidesPerView: 4,
      freeMode: true,
      simulateTouch:true,
      breakpoints: {
         1920: {
            slidesPerView: 4
         },
         1850: {
            slidesPerView: 3.8
         },
         1750: {
            slidesPerView: 3.5
         },
         1650: {
            slidesPerView: 3.3
         },
         1550: {
            slidesPerView: 3.1
         },
         1450: {
            slidesPerView: 2.8
         },
         1350: {
            slidesPerView: 2.6
         },
         1250: {
            slidesPerView: 2.4
         },
         1150: {
            slidesPerView: 2.3
         },
         1050: {
            slidesPerView: 2.2
         },
         992: {
            slidesPerView: 2
         },
         950: {
            slidesPerView: 1.9
         },
         900: {
            slidesPerView: 1.8
         },
         850: {
            slidesPerView: 1.7
         },
         800: {
            slidesPerView: 1.6
         },
         750: {
            slidesPerView: 1.5
         },
         700:{
            slidesPerView: 1.4
         },
         650: {
            slidesPerView: 1.3
         },
         576: {
            slidesPerView: 1.2
         },
         546: {
            slidesPerView: 1.1
         },
         320: {
            slidesPerView: 1
         }
      },
   });

   let burger = document.getElementById('burger'),
       body = document.body,
       menu = document.querySelector('.navigation__menu-wrapper'),
      closeFon = document.querySelector('.burger__close_fon'),
      burgerClose = document.querySelector('.burger__close'),
      socialLinks = document.querySelector('.social-links');
   burger.addEventListener('click',()=>{
      menu.classList.add('left0');
      body.classList.add('overflow-hiden');
      socialLinks.classList.add('left90');
      $('.burger__close_fon').css('display', 'block');
   });
   closeFon.addEventListener('click', () =>{
      burgerClosed();
   });
   burgerClose.addEventListener('click', () => { 
      burgerClosed();
   });
   let burgerClosed = () =>{
      menu.classList.remove('left0');
      body.classList.remove('overflow-hiden');
      socialLinks.classList.remove('left90');
      $('.burger__close_fon').css('display', 'none');
   }
   
   var windowWidth = window.outerWidth;
   var closeFonWidth = windowWidth - 318;
   $('.burger__close_fon').css('width', closeFonWidth + 'px');
   windowWidth = $(window).width();
   $(window).resize(function () {
      var newWindowWidth = $(window).width();
      closeFonWidth = newWindowWidth-318;
      $('.burger__close_fon').css('width', closeFonWidth + 'px');
   });
   window.onscroll = function () {
      if (window.scrollY > 100) {
         $('.navigation').css('background', '#333333d0');
         $(window).resize(function () { 
            var newWindowWidth = $(window).width();
            if (newWindowWidth > 1241 || newWindowWidth <= 768){
               $('.navigation__number').css('display', 'block');
            }else{
               $('.navigation__number').css('display', 'none');
            }
         });
         if (windowWidth <= 1241 && windowWidth>768){
            $('.navigation__number').css('display', 'none');
         }else{
            $('.navigation__number').css('display', 'block');
         }
      }else{
         $('.navigation').css('background', 'none');
         $('.navigation__number').css('display', 'block');
      }
   };



   $(window).resize(function () {
      var newWindowWidth = $(window).width();
      if (newWindowWidth > 1241 || newWindowWidth <= 768) {
         $('.navigation__number').css('display', 'block');
      } else if (window.scrollY>100){
         $('.navigation__number').css('display', 'none');
      }else{
         $('.navigation__number').css('display', 'block');
      }
   });

   new Swiper('.swiper-partners', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true
      },
      spaceBetween: 40,
      slidesPerView: 1,
      breakpoints: {
         1200: {
            slidesPerView: 4
         },
         992: {
            slidesPerView: 3
         },
         576: {
            slidesPerView: 2
         }
      }
   });
}

