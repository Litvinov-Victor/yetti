/**
 * Yetti Gallery
 * @version 1.0.0
 * @license The MIT License (MIT)
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
		// AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
		// CommonJS
        module.exports = factory($ || require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {

    'use strict';

    var pluginName = 'yetti',
        defaults = {};

    function Plugin(element, options) {

        this.element = element;
        this.options = $.extend({}, defaults, options);
        
        this.init();
    }

    Plugin.prototype = {

        init: function() {}
    };

    $.fn[pluginName] = function(options) {

        return this.each(function() {
            if (!$.data(this, 'plugin.' + pluginName) ) {
                $.data(this, 'plugin.' + pluginName, new Plugin(this, options));
            }
        });
    };

}));
