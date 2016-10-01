jQuery(function(){
	jQuery('#countdown').countdown({
		date: '04/30/2017 23:59:59',
		offset: +10
		}, function () {
		  alert('This sale is over!');
		});
});