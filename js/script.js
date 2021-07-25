$(window).on("load", function(){

	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
})


$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed",{
		strings:["Student.","Data Analyst.","Web Developer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false,
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

	$("[data-fancybox]").fancybox();

	

	$("#filters a").click(function() {
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions:{
				duration: 1500,
				easing: 'linear',
				queue: false,
				
		}
	});
		return false;



	});

	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetelement = $(this).attr("href");
		var targetposition = $(targetelement).offset().top;
		$("html, body").animate({scrollTop:targetposition - 50},"slow")
	});

	const nav = $("#navigation");
	const navtop = nav.offset().top;

	$(window).on("scroll",stickynavigation);

	function stickynavigation(){

		var body = $("body");
		if($(window).scrollTop()>=navtop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixednav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixednav");
		}
	}

});

