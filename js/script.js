$(document).ready(function() {
	var $starSet = $(".star-raking").find("img");
	var $tot = $starSet.length;
	$activated = 0;
	$(function () {
		$starSet.mouseenter(function () {
			$(this).attr("src", "img/staricon.gif");	//change the image at the star under mouseover
			var $n = $starSet.index(this);
			for (var i = 0; i < $tot; i++) {	//set the images of the other stars as selected if before the current star, unselected if after
				var $element = $starSet.toArray()[i];
				if (i <= $n) {
					$($element).attr("src", "img/staricon.gif");
				}
				else {
					$($element).attr("src", "img/unstaricon.png");
				}
			}
		});
  });

	$starSet.click(function () {
		$(this).attr("active", "yes");	//Set the attribute "active", useful for other uses
		$activated = ($starSet.index(this) + 1);
		console.log("You voted " + $activated);
	})

	$(".class3").mouseleave(function () {
		if ($activated > 0) {
			console.log("clikkete!!!");	// :D
			for (var i = 0; i < $tot; i++) {	//based on the attribute "active", it made the memory effect on the stars
				var $element = $starSet.toArray()[i];
					if ((i + 1) <= $activated) {
						$($element).attr("src", "img/staricon.gif");
					}
					else {
						$($element).attr("src", "img/unstaricon.png");
					}
			}
		}
		else {
			$starSet.attr("src", "img/unstaricon.png");
		}
	})
});
