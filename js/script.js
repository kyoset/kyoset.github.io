// Event
$('.page-scroll').on('click', function(e){
	// Ambil isi href
	var tujuan = $(this).attr('href');
	// Ambil Elemen href
	var elemenTujuan = $(tujuan);

	// Pindahkan Nyekrol
	$('body').animate({
	scrollTop: elemenTujuan.offset().top -50
	}, 1250, 'easeInOuExpo');

	e.preventDefault();

});
