
$ ('button').on('click', function () {

	$('button').toggleClass('off');
		
	if($('button').hasClass('off')) {
		$('body').toggleClass('dark');
		$('.status').text('Hey, who turn off the lights?');
	}

	else { $('body').removeClass('dark');
		$('.status').text('Its so bright in here!');
}
	
});

