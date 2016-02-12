<script>
/*
 * This script will check the height of each element in 
 * the $elements definition and then set each element as 
 * defined with that height. This is useful when using 
 * floated elements. 
 *
 */
 
$(window).load( function() { 
 
  // Define the elements you want to check
  var $elements = $("#parent > div");
  
   var heights = $elements.map(function ()
       {
           return $(this).height();
       }).get();
   
   maxHeight = Math.max.apply(null, heights) + 10;
   $elements.css('min-height',maxHeight);
   }
)
</script>
