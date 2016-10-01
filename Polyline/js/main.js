jQuery(window).on('load', function(){ 
				jQuery('.bx-slider').bxSlider({ 
				  pager: false,
				  captions: true,
				  prevSelector: jQuery('.bx-prev'),
				  nextSelector: jQuery('.bx-next'),
				  prevText: '',
				  nextText:'',
				 });
			});
			jQuery(window).on('load', function(){ 
				jQuery('.bxslider').bxSlider({ 
				  pager: false,
				  captions: true,
				  mode: 'fade',
				  prevText: '',
				  nextText:'',
				 });
			});
			jQuery(document).ready(function() {
		 		jQuery(".products-list-scroll").jScrollPane({
		    		showArrows: "true",
		    		horizontalDragMaxWidth: 277,
				});
			});
			VK.Widgets.Group("VK-page", {mode: 0, width: "350", height: "450", color1: 'efefee', color2: 'fff', color3: '93182f'},  56773815);