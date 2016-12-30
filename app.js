$(function() {

	// $('[data-toggle="tooltip"]').tooltip();

	$('.mask-password').on('click', function () {
	    $(this).toggleClass('active');

	    $('input.password').attr('type', function (index, attr) {
	        return (attr == 'password') ? 'text' : 'password';
	    });
	});

	var strengthClasses = [
	    'progress-bar-danger',
	    'progress-bar-warning',
	    'progress-bar-info',
	    'progress-bar-success',
	    'progress-bar-success'];

	$('input.password').on('keyup', function () {

	    var strength = window.zxcvbn(this.value);

	    var strengthPercentage = 25 * strength.score;

	    strengthPercentage = strengthPercentage || 5;

	    $('#improved-password-strength').width(strengthPercentage + '%').attr('aria-valuenow', strengthPercentage);

	    //Remove old classes
	    for (var i = 0; i < strengthClasses.length; i++) {
	        $('#improved-password-strength').removeClass(strengthClasses[i]);
	    }

	    $('#improved-password-strength').addClass(strengthClasses[strength.score]);
	});

});
