/** 
 * jQuery plugin to detect font being used to render an element.
 * 
 * Inspired by and extended from the answer at:
 * http://stackoverflow.com/questions/15664759/jquery-how-to-get-assigned-font-to-element
 */

// Strips quotes from start and end of string
String.prototype.unquoted = function() {
    return this.replace(/(^("|'))|(("|')$)/g, '');
};

(function($) {
    $.fn.detectFont = function() {
        var fonts = $(this).css('font-family').split(',');
        if (fonts.length === 1) {
            return fonts[0].unquoted();
        }
        
        var element = $('<div />');
        $('body').append(element);
        element
            .css({
                'clear':'both',
                'display':'inline-block',
                'font-family':$(this).css('font-family'),
                'font-size':$(this).css('font-size'),
                'font-weight':$(this).css('font-weight'),
                'white-space':'nowrap'
            })
            .html($(this).html());
        
        var detectedFont = null;
        
        for (var f in fonts) {
            var clone = element.clone().css({
                'visibility': 'visible', 
                'font-family': fonts[f].unquoted()
            }).appendTo('body');
            if (element.width() === clone.width()) {
                clone.remove();
                detectedFont = fonts[f].unquoted();
                break;
            }
            clone.remove();
        }
        element.remove();

        return detectedFont;
    };
})(jQuery);