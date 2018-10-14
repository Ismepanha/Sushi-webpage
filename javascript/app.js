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
  $('#ul').css("margin-top", "55px");
  $('#logo').css("margin-top", "13px");
  $('#logo').css("margin-bottom", "13px");
  $('nav a').css("padding-bottom", "34px");
});
$('#head').on('sticky-end', function(){
  $('#head').css("background-color", "transparent");
  $('#head').css('display',"block");
  $('#ul').css("margin-top", "75px");
  $('#logo').css("margin-top", "40px");
  $('#logo').css("margin-bottom", "0px");
  $('nav a').css("padding-bottom", "25px");
});