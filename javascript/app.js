$(document).on('click', 'a[href^="#"]',function(event){
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

$(document).ready(function(){
	$('#logo').addClass("animated fadeInLeft");
	$('#special').addClass("animated bounceInUp");
	$('#button').addClass("animated bounceInUp");
	$('#main-content').addClass("animated fadeInDown");
});


$('.hamburger').click(function() {
	$(this).toggleClass('is-active');
	$(".mobile-menu").toggle();
});
$('#head').sticky();
$('#head').on('sticky-start', function(){
  $('#head').css("background-color", "#242424");
});
$('#head').on('sticky-end', function(){
  $('#head').css("background-color", "transparent");
});