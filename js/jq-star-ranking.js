/*
CREDITS
This JQuery plugin is created by Duilio Pastorelli and Andrea Sonny
IcoMoon fonts are used in this project - https://icomoon.io/
*/

$(function( $ ) {

	//Set the default options
	$.fn.jqStarRanking = function( options ) {
		var settings = $.extend({
			starNumber: 5,
			size: 24,
			color: "yellow"
		}, options);

		return this.each( function() {
			var elem = $( this );
			$.fn.replaceStarRanking( elem, settings );
		});
	};

	$.fn.replaceStarRanking = function( item, settings ) {
		var output	= '<div class="jq-star-container">',
			star	= '<span class="jq-star-ranking-empty"></span>';

		for ( var i = 0; i < settings.starNumber; i++ ) {
			$( item ).append( star );
		}

		$( item ).css({
			"font-size":	settings.size,
			"color":		settings.color,
		});

		//Change the star icon on mouse over, either the stars previous the selected one
		var star = $( item ).find( "span" );

		$( star ).mouseenter( function () {
			$( this ).addClass("jq-star-ranking-full").removeClass("jq-star-ranking-empty");
			var $n = star.index( this );
			for ( var i = 0; i < star.length; i++ ) {
				var element = star.toArray()[i];
				if ( i <= $n ) {
					$( element ).addClass( "jq-star-ranking-full" ).removeClass( "jq-star-ranking-empty" );
				}
				else {
					$( element ).addClass( "jq-star-ranking-empty" ).removeClass( "jq-star-ranking-full" );
				}
			}
		});

		//Check the data->active value on mouse leave and set the stars' icon consequently
		star.mouseleave( function () {
			if ( ( $( item ).data( "active" ) ) > 0 ) {
				for ( var i = 0; i < star.length; i++ ) {
					var element = star.toArray()[i];
						if ( (i + 1) <= ( $( item ).data( "active" ) ) ) {
							$( element ).addClass( "jq-star-ranking-full" ).removeClass( "jq-star-ranking-empty" );
						}
						else {
							$( element ).addClass( "jq-star-ranking-empty" ).removeClass( "jq-star-ranking-full" );
						}
				}
			}
			else {
				star.addClass( "jq-star-ranking-empty" ).removeClass( "jq-star-ranking-full" );
			}
		})

		//Set the container's data attribute
		star.click( function () {
			$( item ).data( "active", ( star.index( this ) + 1 ) );
			console.log( "You voted " + $( item ).data( "active" ) ); //dev
		})

	};

}(jQuery));
