
var fixWidows = function() {

	var viewport = window.innerWidth;

	wt.fix({

		elements: "p, aside",
		chars: 25,
		method: "nbsp",
		event: "resize"

	});

	if (viewport<755) {

		wt.fix({

			elements: ".educational-background>ul>li",
			chars: 15,
			method: "padding-right",
			event: "resize"

		});

	} else {

		wt.fix({

			elements: ".educational-background>ul>li",
			chars: 15,
			method: "padding-left",
			event: "resize"

		});

	};

};

var initialize = function() {

	var h3_tags = document.getElementsByTagName("h3");

	for (var i = 0; i < h3_tags.length; i++) {

		lettering.splitter(h3_tags[i]);
	};

	fixWidows();

};


window.load = initialize();

window.onresize = fixWidows();