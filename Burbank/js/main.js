var Homepage = {
	init: function(){
		var self = this;
		self.slider = jQuery('.bxslider').bxSlider({
			prevSelector: jQuery('.top.prev'),
			nextSelector: jQuery('.top.next'),
			pagerSelector:jQuery('.top.pager'),
			nextText:'',
			prevText:''
		});
		self.slider = jQuery('.bx-slider').bxSlider({
			prevSelector: jQuery('.bottom.prev'),
			nextSelector: jQuery('.bottom.next'),
			pagerSelector:jQuery('.bottom.pager'),
			nextText:'',
			prevText:''
		});
	},
	resize: function(){
		var self = this;
		self.slider = jQuery('.left-slider').bxSlider({
			prevSelector: jQuery('.left.prev'),
			nextSelector: jQuery('.left.next'),
			pagerSelector:jQuery('.left.pager'),
			nextText:'',
			prevText:''
		});
		if(jQuery(window).width()<822 && jQuery(window).width()>736){
			self.slider.destroySlider();
		} else {
			self.slider.reloadSlider();
		}
	},
	accordion: function(){
		var self = this;
		jQuery('.accordion').find('.has-open-part').on('click', function(){ 
			if(!jQuery(this).hasClass('active')){ 
				jQuery('.open-part').slideUp('fast');
				jQuery('.accordion').find('.has-open-part').removeClass('active'); 
				jQuery(this).next().slideDown('fast'); 
				jQuery(this).addClass('active'); 
			} else {
				jQuery(this).next().slideUp('fast');
				jQuery(this).removeClass('active');
			}
		});
	},
	button: function(){
		var self = this;
		if (!jQuery('.mobile-menu').hasClass('active')){
			jQuery('.mobile-menu').addClass('active');
			jQuery(this).addClass('active');
			jQuery('.mobile-menu').slideDown('fast');
		} else {
			jQuery('.mobile-menu').slideUp('fast');
			jQuery('.mobile-menu').removeClass('active');
			jQuery(this).removeClass('active');
		}
	},
}

jQuery(function(){
	Homepage.accordion();
	jQuery('.mobile-btn').on('click', function(){
		Homepage.button();
	});
	jQuery(document).ready(function(){
	  jQuery( '.header .date' ).pickadate();
	});
	jQuery(document).ready(function(){
	  jQuery( '.footer-btn .date' ).pickadate();
	});
});

jQuery(window).on('resize', function(){
	Homepage.resize();
});
jQuery(window).on('load', function(){
	Homepage.init();
	Homepage.resize();
});
