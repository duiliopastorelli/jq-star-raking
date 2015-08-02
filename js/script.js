/*
CREDITS
This JQuery plugin is created by Duilio Pastorelli and Andrea Sonny
IcoMoon fonts are used in this project - https://icomoon.io/
*/

$(function( $ ) {

	//Set the default options
	$.fn.jqStarRanking = function( options ){
		var settings = $.extend({
			starNumber: "5",
			fontSize: "24px",
			color: "yellow"
		}, options );

		//Create the stars by the user or default settings
		for (var i = 0; i < settings.starNumber; i++) {
			$("<span>",{
				class: "jq-star-ranking-empty"
			}).css({
				"font-size": settings.fontSize,
				color: settings.color
			}).appendTo(".jq-star-container");
		}

		//Change the star icon on mouse over, either the stars previous the selected one
		var $star = $(".jq-star-container").find("span");
		$($star).mouseenter(function () {
			$(this).addClass("jq-star-ranking-full").removeClass("jq-star-ranking-empty");
			var $n = $star.index(this);
			for (var i = 0; i < $star.length; i++) {
				var $element = $star.toArray()[i];
				if (i <= $n) {
					$($element).addClass("jq-star-ranking-full").removeClass("jq-star-ranking-empty");
				}
				else {
					$($element).addClass("jq-star-ranking-empty").removeClass("jq-star-ranking-full");
				}
			}
		});

		//Set the container's data attribute
		$star.click(function () {
			$(".jq-star-container").data("active", ($star.index(this) + 1));
			console.log("You voted " + $(".jq-star-container").data("active")); //dev
		})

		//Check the data->active value on mouse leave and set the stars' icon consequently
		$star.mouseleave(function () {
			if (($(".jq-star-container").data("active")) > 0) {
				for (var i = 0; i < $star.length; i++) {	//based on the attribute "active", it made the memory effect on the stars
					var $element = $star.toArray()[i];
						if ((i + 1) <= ($(".jq-star-container").data("active"))) {
							$($element).addClass("jq-star-ranking-full").removeClass("jq-star-ranking-empty");
						}
						else {
							$($element).addClass("jq-star-ranking-empty").removeClass("jq-star-ranking-full");
						}
				}
			}
			else {
				$star.addClass("jq-star-ranking-empty").removeClass("jq-star-ranking-full");
			}
		})

	}; //END

}(jQuery));
