jQuery(document).ready(function($){
	/*адаптивное меню*/

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$("body").click(function() {		
		if($(".toggle-mnu").hasClass("on")){
			$(".toggle-mnu").removeClass("on");
			$(".hor-mnu").fadeOut();
		}
	});

	/*Ajax отправка формы*/

	$(".form form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form form").trigger("reset");
		});
		return false;
	});

	/*Открытие формы по клику*/

	$('.order-call, .footer-call').click(function() {
		$('.popup form, .overlay').fadeIn();
	});

	/*Скрытие всего при клике по overlay или X*/

	$('.close, .overlay').click(function() {
		$('.popup form, .overlay').fadeOut();
	});

	/*Плавный скролл*/

	$('a[href^="#"]').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	/*Добавление лайтбокса*/

	$('#thumbnails a').lightBox();

	/*Активный класс при наведении на дочернее меню*/

	$('.hor-mnu ul ul').mouseover(function(){
		$(this).parent().addClass('active');
	});

	$('.hor-mnu ul ul').mouseout(function(){
		$(this).parent().removeClass('active');
	});

	/*Активный класс при наведении на дочернее меню вертикаольное*/

  $('.vert-mnu ul ul').mouseover(function(){
    $(this).parent().addClass('active');
  });

  $('.vert-mnu ul ul').mouseout(function(){
    $(this).parent().removeClass('active');
  });


	/*Скрытие появление текста*/

	$('.hide-block button').click(function() {

		if(!($('.hide-block__content').hasClass('ha'))) {
			$('.hide-block__content').addClass('ha');
			$('.hide-block button').text('Hide');
		}
		else {
			$('.hide-block__content').removeClass('ha'); 
			$('.hide-block button').text('Show all');
		}
	});

	/*Наверх*/

	var ue = $(".to_top").position();

	var wid = $(window).width();
	var wid = (wid-960)/2;

	var 
	speed = 100,
	$scrollTop = $("<a/>")
	.addClass('scrollTop')
	.attr({href:'#', style:'display:none; z-index:9999; position:fixed;'})
	.appendTo('body');		

	$scrollTop.click(function(e){
		e.preventDefault();
		$( 'html:not(:animated),body:not(:animated)' ).animate({"scrollTop":0},"slow");
	});

	
	function show_scrollTop(){
		( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();

	$('.scrollTop').html('^');

	$('.scrollTop').css({'marginLeft':wid});


}); //ready