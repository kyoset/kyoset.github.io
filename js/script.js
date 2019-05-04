// Event
$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});﻿

// Parallax
     // About Text
     $(window).on('load', function() {
     	$('.pleft').addClass('pshow');
     	$('.pright').addClass('pshow');
     });

$(window).scroll(function(){
	var iScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ iScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ iScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ iScroll/1.2 +'%)'
	});

	// Portfolio
	if( iScroll > $('.portfolio').offset().top -250 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('foto');
			}, 300 * (i+1));
		});
}

});