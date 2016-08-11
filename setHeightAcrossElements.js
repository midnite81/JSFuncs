/*
 * This script will check the height of each element in 
 * the $elements definition and then set each element as 
 * defined with that height. This is useful when using 
 * floated elements. 
 *
 */

function HeightElements() {

    var __construct = function() {
        if (! window.jQuery) {
            alert('jQuery is needed to set Element Heights');
            return false;
        }
    }();

    var heightElementsGroup = new Array();

    $('[same-height-as-others]').each(function() {
        var attr = $(this).attr('same-height-as-others');
        if ($.inArray(attr, heightElementsGroup) < 0) {
            heightElementsGroup.push(attr);
        }
    });

    $(heightElementsGroup).each(function(key, value) {
        setHeightOnElements(value);
    });

    $(window).resize(function() {
        $(heightElementsGroup).each(function(key, value) {
            setHeightOnElements(value);
        });
    });

    function setHeightOnElements(attribute) {
        var $elements = $("[same-height-as-others="+attribute+"]");

        var heights = $elements.map(function ()
        {
            return $(this).height();
        }).get();

        maxHeight = Math.max.apply(null, heights);
        $elements.css('min-height',maxHeight);
    }
}







