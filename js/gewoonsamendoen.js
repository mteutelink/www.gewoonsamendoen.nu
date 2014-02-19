/**
 * GewoonSamenDoen.NU
 * Copyright 2013 Marc Teutelink                                                      
 */
$(document).ready(function(){
	var $container = $("#basic");

	$container.isotope({
		itemSelector: '.item',
		masonry : {columnWidth : 1},
		itemPositionDataEnabled: true
	});
	
	/*
	if (matchMedia('only screen and (max-width: 480px)').matches) {
		$container.isotope({ filter : ".small" });
		$('html, body').animate({scrollTop: 0}, 0);	
	} else {
	*/
	
		$container.isotope({ filter : "#hans, .hans, .small[data-target!=hans]" });
		$('html, body').animate({scrollTop: 0}, 0);


		if (!matchMedia('only screen and ((max-width: 480px) or (max-width: 1024px))').matches) {
			$(".positie_en_naam").each(function(index) {
				$(this).hide();
			});

			$(".picture").hover(function(event) {
					$(this).children("span").fadeIn();
				},function(event){
					$(this).children("span").fadeOut();
			});
		};

		$(".small[data-target]").click(function(event) {
			var candidate = $(this).attr("data-target")
			
			var filter = "#" + candidate + ", ." + candidate+ ", .small[data-target!=" + candidate + "]";
			$container.isotope({ filter : filter });
			
			$('html, body').animate({scrollTop: $("#" + candidate).data('isotope-item-position').y}, 200);
			return false;
		});			
		
		window.setInterval(function () {
			var remaining = $("#seconds").html();
			remaining = eval(remaining);
			
			if (remaining == 0) {
				$("#verkiezingsprogramma").toggle();
				$("#speerpunten").toggle();
				$("#seconds").html("3");
			} else {
				$("#seconds").html(remaining - 1);
			}
		}, 1000);	
	/*
	};
	*/
});
