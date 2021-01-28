/**
 * Flatpickr wrapper.
 *
 * @author Htmlstream
 * @version 2.0
 *
 */
;(function ($) {
	'use strict';

	$.HSCore.components.HSDaterangepicker = {
		defaults: {},

		init: function (el, options, cb) {
			if (!el.length) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-daterangepicker-options') ? JSON.parse(el.attr('data-hs-daterangepicker-options')) : {},
				settings = {};
			settings = $.extend(true, defaults, dataSettings, settings, options, cb);

			/* Start : Init */

			var newDaterangepicker = el.daterangepicker(settings, cb);

			/* End : Init */

			return newDaterangepicker;
		}

	};

})(jQuery);
