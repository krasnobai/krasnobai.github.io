$(document).ready(function() {
  $("#owl-main-page").owlCarousel({
  	items : 4,
  	itemsDesktop:false,
  	singleItem: true,
  	slideSpeed : 800,
  	paginationSpeed : 1000,
  	rewindSpeed : 1500,
  	autoPlay : true,
  	stopOnHover : true,
  	navigation : true,
  	navigationText : ["",""],
  	rewindNav : true,
  	scrollPerPage : false,
  	pagination : true,
  	paginationNumbers: false,
  	responsive: true,
  	responsiveRefreshRate : 200,
  	responsiveBaseWidth: window,
  	// CSS Styles
  	baseClass : "owl-carousel",
  	theme : "owl-theme",
  	lazyLoad : false,
  	lazyFollow : true,
  	lazyEffect : false,
  	autoHeight : false,
  	// Other
  	addClassActive : false

  });

  $("#owl-job-page").owlCarousel({
  	items : 3,
  	itemsDesktop:false,
  	singleItem: false,
  	slideSpeed : 200,
  	paginationSpeed : 800,
  	rewindSpeed : 1000,
  	autoPlay : true,
  	stopOnHover : true,
  	navigation : true,
  	navigationText : ["",""],
  	rewindNav : true,
  	scrollPerPage : false,
  	pagination : false,
  	paginationNumbers: false,
  	responsive: true,
  	responsiveRefreshRate : 200,
  	responsiveBaseWidth: window,
  	// CSS Styles
  	baseClass : "owl-carousel",
  	theme : "owl-theme",
  	lazyLoad : false,
  	lazyFollow : true,
  	lazyEffect : false,
  	autoHeight : false,
  	// Other
  	addClassActive : false

  });

    

    $('.least-gallery').least({
    	random: false
    });

    function setHeaderHeight(){
      var newHeight = $(window).height()*3/4;
      $('.setHeight').css({
          height: newHeight + 'px'
        });
    }
    setHeaderHeight();
    $(window).resize(setHeaderHeight);


    
  $('#scrollup').mouseover( function(){
    $( this ).animate({opacity: 0.65},100);})
             .mouseout( function(){
                $( this ).animate({opacity: 1},100);})
                .click( function(){
                          window.scroll(0 ,0); 
                          return false;
                        });

  $(window).scroll(function(){
    if ( $(document).scrollTop() > 0 ) {
      $('#scrollup').fadeIn('fast');
    } else {
      $('#scrollup').fadeOut('fast');
    }
  });




});
