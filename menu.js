;(function ($) {
	$('nav li ul').hide().removeClass('noJS');
	$('nav li').hover(
	  function () {
		$('ul', this).stop().slideDown(300);
	  },
	  function () {
		$('ul', this).stop().slideUp(300);
	  }
	);
})(jQuery);