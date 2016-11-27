$(document).ready(function() {

	$(window).scroll(function () {
		if($(this).scrollTop() > 0) {
			$(".header, .header--illusion").addClass("header--micro");
		} else {
			$(".header, .header--illusion").removeClass("header--micro");
		}
	});

	$(".main-slider__container").slick({
		appendArrows: "#main-slider__arrows",
		centerMode: true,
		variableWidth: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					variableWidth: false,
					slidesToShow: 1
				}
			}
		]
	});

	$(".aside-news__items").slick({
		infinite: false,
		appendArrows: ".aside-news__title"
	});

	$(".affiche__items").slick({
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

	$(".aside-social-tabs__list a").click(function() {

		console.log($($(this).attr("href")).addClass("active"));

		$(this).parents(3).find(".active").removeClass("active");

		$(this).parent().addClass("active");
		$($(this).attr("href")).addClass("active");


		return false;
	});

	$(".author__desc-link, .link-more").click(function() {

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

	$(".js-collapse").collapse();

	$(".article__slider").slick({
		asNavFor: ".article__thumb"
	});

	$(".article__thumb").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: ".article__slider",
		focusOnSelect: true
	});

	$(".articles-random__slider").slick({
		asNavFor: ".articles-random__thumb",
		vertical: true,
		verticalSwiping: true,
		arrows: false
	});

	$(".articles-random__thumb").slick({
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

	var menu = $(".dropdown-left").sliiide({
		toggle: ".special-item", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
		exit_selector: ".rubric-detail__close, .rubric-briefly__close", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
		animation_duration: "0.5s", //how long it takes to slide the menu
		place: "left", //where is the menu sliding from, possible options are (left | right | top | bottom)
		// animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
		body_slide: true, //set it to true if you want to use the effect where the entire page slides and not just the div
		no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
		auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
	});

	$(".special-item").click(function() {
		$("body, html").css("overflow", "hidden");
		menu.activate();
	});

	// $(".special-item").bind("click", function() {
	// 	$("body, html").css("overflow", "hidden");
	// });

	$(".rubric-detail__close, .rubric-briefly__close").bind("click", function() {
		$("body, html").css("overflow", "auto");
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


	$(".nav-foo__humburger").click(function() {
		$(".nav-foo__list").toggleClass("nav-foo__list-open");

		return false;
	});

	$(".header__humburger").click(function() {
		$(".header__container").toggleClass("header__container-open");

		return false;
	});

	$(".header__search, .header__inner-close").click(function() {
		$(".header__inner").toggleClass("header__inner-open");

		return false;
	});

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

	$('.responsive-calendar').responsiveCalendar({
		translateMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
	});

	$('.responsive-calendar').responsiveCalendar('edit', {
    "2016-11-30": {"url": "#"},
    "2016-11-26": {},
    "2016-11-30": {"number": 0, "badgeClass": "hidden", "url": "#"},
    "2013-06-12": {}
  })

  $(".distribution__up").scrollUp();
});