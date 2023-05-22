/*---------------Sticky navigation which changes when page is moved down ------------*/
$('.js-section-features').waypoint(function(direction){

    if(direction=="down"){
     $('nav').addClass('sticky-nav');
    }else{
      $('nav').removeClass('sticky-nav');
    }
},{
    offset: '60px;'
});

/*-------------------Multiple buttons when clicked will scroll us to their respective section----------------------*/
$('.js-scroll-to-plans').click(function(){
     $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
});

$('.js-scroll-to-features').click(function(){
    $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
});

/*-------------------------------Top menu's when clicked will scroll us to their respective section-----------------------*/

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
               event.preventDefault();
              $('html, body').animate({
                    scrollTop: target.offset().top
                 }, 1000, function() {
                       var $target = $(target);
                          $target.focus();
                            if ($target.is(":focus")) { 
                                 return false;
                             }  else {
                                  $target.attr('tabindex','-1'); 
                                  $target.focus(); 
                                };
                      });
            }
        }
  });

/*--- --------------------Fade In Animation------------------------------------------------------*/
$('.js-fade-effect1').waypoint(function(direction){

    $('.js-fade-effect1').addClass('animated fadeIn')
},{
    offset: '50%'
});

$('.js-fade-effect2').waypoint(function(direction){

    $('.js-fade-effect2').addClass('animated fadeInUp')
},{
    offset: '50%'
});

$('.js-fade-effect3').waypoint(function(direction){

    $('.js-fade-effect3').addClass('animated fadeIn')
},{
    offset: '50%'
});

/*---------------------Mobile navigation icon and functions-------------------------*/
$('.js-nav-icon').click(function(){
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')){
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close-round');  

    }else{
        icon.removeClass('ion-close-round');
        icon.addClass('ion-navicon-round');
        
    }
});