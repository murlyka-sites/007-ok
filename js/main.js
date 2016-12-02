var dropreset;
$(document).ready(function() {

	$(window).scroll(function () {
		if($(this).scrollTop() > 0) {
			$(".header, .header--illusion").addClass("header--micro");
		} else {
			$(".header, .header--illusion").removeClass("header--micro");
		}
	});



	// Слайдеры начало

	$(".js-main-slider").slick({
		appendArrows: "#main-slider__arrows",
		centerMode: true,
		variableWidth: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					centerMode: false,
					variableWidth: false,
					slidesToShow: 1
				}
			}
		]
	});

	$(".js-aside-news-slider").slick({
		infinite: false,
		appendArrows: ".aside-news__title"
	});

	$('.js-affiche-slider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {

	});

	$('.js-affiche-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide ) {
		$(".js-affiche-slider .slick-active-last").removeClass("slick-active-last");
		var $o = $($(".js-affiche-slider .slick-slide.slick-active")[$(".js-affiche-slider .slick-slide.slick-active").length - 1]);
		if(currentSlide + 1 == nextSlide) {
			$o.next().addClass("slick-active-last");
		}	else {
			$o.prev().addClass("slick-active-last");
		}
	})

	$('.js-affiche-slider').on('init breakpoint reInit', function(event, slick, currentSlide, nextSlide ){		
		$(".js-affiche-slider .slick-active-last").removeClass("slick-active-last");
		$($(".js-affiche-slider .slick-slide.slick-active")[$(".js-affiche-slider .slick-slide.slick-active").length - 1]).addClass("slick-active-last")
		$(".js-affiche-slider .slick-hover").removeClass("slick-hover")
	});

	$(".js-affiche-slider").on("mouseenter", ".slick-prev", function () {
			$(".js-affiche-slider").addClass("slick-prev-hover");
	});

	$(".js-affiche-slider").on("mouseleave", ".slick-prev", function () {
			$(".js-affiche-slider").removeClass("slick-prev-hover");
	});

	$(".js-affiche-slider").on("mouseenter", ".slick-next", function () {
			$(".js-affiche-slider").addClass("slick-next-hover");
	});

	$(".js-affiche-slider").on("mouseleave", ".slick-next", function () {
			$(".js-affiche-slider").removeClass("slick-next-hover");
	});

	$(".js-affiche-slider").on("mouseenter", ".slick-current", function () {
			$(".js-affiche-slider").addClass("slick-current-slide-hover");
	});

	$(".js-affiche-slider").on("mouseleave", ".slick-current", function () {
			$(".js-affiche-slider").removeClass("slick-current-slide-hover");
	});

	$(".js-affiche-slider").on("mouseenter", ".slick-active-last", function () {
			$(".js-affiche-slider").addClass("slick-active-last-slide-hover");
	});

	$(".js-affiche-slider").on("mouseleave", ".slick-active-last", function () {
			$(".js-affiche-slider").removeClass("slick-active-last-slide-hover");
	});

	// $(".js-affiche-slider").on("mouseenter", ".slick-current, .slick-prev", function() {
	// 	$(".slick-prev").css("display: block");
	// });

	// $(".js-affiche-slider").on("mouseleave", ".slick-current, .slick-prev", function() {
	// 	$(".slick-prev").css("display: none");
	// });


	$(".js-affiche-slider").slick({
		dots: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});



	$(".js-article-slider").slick({
		asNavFor: ".js-article-thumb"
	});

	$(".js-article-thumb").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: ".js-article-slider",
		focusOnSelect: true
	});

	$(".js-articles-random-slider").slick({
		asNavFor: ".articles-random__thumb",
		vertical: true,
		verticalSwiping: true,
		arrows: false
	});

	$(".js-articles-random-thumb").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".articles-random__slider",
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					verticalSwiping: false
				}
			}
		]
	});

	// Слайдеры конец



	// колапсы
	$(".js-collapse").collapse();

	// Рубрики
	

	var menu = $(".js-dropdown").sliiide({
		// toggle: ".special-item", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
		// exit_selector: ".rubric-detail__close, .rubric-briefly__close", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
		animation_duration: "0.5s", //how long it takes to slide the menu
		place: "left", //where is the menu sliding from, possible options are (left | right | top | bottom)
		// animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
		body_slide: true, //set it to true if you want to use the effect where the entire page slides and not just the div
		no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
		auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
	});

	var menuOpen = false;

	$(".js-open-rubric").click(function() {
		// setTimeout(function() {
			$("body, html").css("overflow", "hidden");
			menu.activate();
			menuOpen = true;
		// }, 200)();
	});

	$(".js-close-rubric").click(function() {
		$("body, html").css("overflow", "auto");
		menu.deactivate();
		menuOpen = false;
		$(".reset").css("transform", "none")
	});


	$(window).resize(function () {
		if (menuOpen) {
			menu.activate();
		}
		// $("body, html").css("overflow", "auto");
		// menu.reset();
		// $(".reset").css("transform", "none")
	});

	$(".rubric-detail__tab:not(.active)").click(function() {
		$(".rubric-briefly").removeClass("rubric-hidden");
		$(".rubric-detail").addClass("rubric-hidden");
		menu.activate();

		return false;
	});

	$(".rubric-briefly__tab:not(.active)").click(function() {
		$(".rubric-detail").removeClass("rubric-hidden");
		$(".rubric-briefly").addClass("rubric-hidden");
		menu.activate();
		
		return false;
	});

	// меню
	$(".js-open-menu").click(function() {
		$(".nav-foo__list").toggleClass("nav-foo__list-open");

		return false;
	});

	$(".js-open-header-menu").click(function() {
		$(".header__container").toggleClass("header__container-open")

		return false;
	});

	// поле поиска
	$(".js-header-open, .js-header-close").click(function() {
		if($(this).hasClass("js-header-open")) {
			$(".js-header-inner").fadeIn();
		} else {
			$(".js-header-inner").fadeOut();
		}

		return false;
	});

	//календарь
	$('.responsive-calendar').responsiveCalendar({
		translateMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
	});


	$('.responsive-calendar').responsiveCalendar('edit', {
    "2016-11-30": {"url": "#"},
    "2016-11-26": {},
    "2013-06-12": {}
  })

	// стрелка вверх
  $(".js-arrow-up").scrollUp();

  // табы
  $(".authors__tab").click(function () {
		var container = $(this).data("container");

		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");

		if(container == "glossary") {
			$(".authors__cards").fadeOut();
			$(".authors__glossary").fadeIn();
		} else {
			$(".authors__glossary").fadeOut();
			$(".authors__cards").fadeIn();
		}

		return false;
	});

	$(".js-filter-tab").click(function () {
		var $container = $($(this).attr("href"));

		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");

		$(".js-filter-filtered .visible").toggleClass("hidden visible");
		$container.toggleClass("hidden visible");

		return false;
	});


	$(".js-social-tab").click(function() {
		$(this).parents(3).find(".active").removeClass("active");

		$(this).parent().addClass("active");
		$($(this).attr("href")).addClass("active");

		return false;
	});

	// подробнее
	$(".js-more").click(function() {

		if($(this).data("open") == false) {
			$(this).data("open", "true");
			$(this).text("Скрыть");
			$(this).prev().fadeIn();			
		} else {
			$(this).data("open", false);
			$(this).text("Подробнее");
			$(this).prev().fadeOut();
		}

		return false;
	});
});