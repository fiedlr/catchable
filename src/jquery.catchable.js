/*! catchable v0.1.0 <github.com/fiedlr/catchable> | (c) 2016 Adam Fiedler | @license <opensource.org/licenses/MIT> */
;(function ($) {

	var opts = {
		instantiated: false
	};

	var methods = {
		init: function () {
			// Mark the elements
			this.addClass('catchable').each(function () {
				$(this).data('originalOffset', $(this).offset().top);
			});
			// Set the event
			if (!opts.instantiated) {
				$(window).on('scroll.catchable', function () {
					$('.catchable').each(function () {
						if (
							!$(this).hasClass('catchable-caught') &&
							$(window).scrollTop() >= $(this).data('originalOffset') && 
							$(window).scrollTop() + $(this).outerHeight() < $(this).parent().offset().top + $(this).parent().outerHeight()
						) {
							$(this).addClass('catchable-caught').removeClass('catchable-landed');
						} else if (
							!$(this).hasClass('catchable-landed') && 
							$(window).scrollTop() + $(this).outerHeight() >= $(this).parent().offset().top + $(this).parent().outerHeight()
						) {
							$(this).addClass('catchable-landed').removeClass('catchable-caught');
						} else if (
							$(this).hasClass('catchable-caught') &&
							$(window).scrollTop() < $(this).data('originalOffset')
						) {
							$(this).removeClass('catchable-caught').removeClass('catchable-landed');
						}
					});
				});
				opts.instantiated = true;
			}
		},
		destroy: function () {
			this.data('originalOffset', '').removeClass('catchable');
		}
	};

	// Access
	$.fn.catchable = function (options) {
		if (methods[options]) {

			return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));

		} else if (typeof options === 'object' || !options) {

			return methods.init.apply(this, arguments);

		} else {

			$.error('catchable:' + options + ' needs to be an object or a method.');

		}	
	};

}(jQuery));