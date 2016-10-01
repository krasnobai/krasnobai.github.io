jQuery(function(){
	jQuery('.burger-btn').on('click', function(){
		if(!jQuery('.mobile-menu').hasClass('active')){
			jQuery('.mobile-menu').addClass('active');
			jQuery(this).addClass('active');
			jQuery('.mobile-menu').slideDown('fast');
		} else {
			jQuery('.mobile-menu').slideUp('fast');
			jQuery('.mobile-menu').removeClass('active');
			jQuery(this).removeClass('active');
		}
	});
});