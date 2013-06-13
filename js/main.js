var initialize = function() {

	var h3_tags = document.getElementsByTagName("h3");


	for (var i = 0; i < h3_tags.length; i++) {

		lettering.splitter(h3_tags[i]);
	};

	wt.fix({

		elements: "p, aside",
		chars: 25,
		method: "nbsp",
		event: "resize"

	});

};


window.load = initialize();