/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
        
                $('a').click(function(){
                    event.preventDefault();
                });
        
        
                $( ".readmore" ).click(function() {
                  $( "#show-this-on-click" ).slideDown( [1000], ['easeIn']);
                    $('.readmore').hide();
                    $('.readless').show();
                });
        
                $( ".readless" ).click(function() {
                          $( "#show-this-on-click" ).slideUp( [1000], ['easeOut']);
                            $('.readless').hide();
                            $('.readmore').show();
                });
    
                
                $( ".readmore" ).click(function() {
                  $( "#show-this-on-click" ).slideDown( [1000], ['easeIn']);
                    $('.readmore').hide();
                    $('.readless').show();
                });
        
        
                $( ".learnmore" ).click(function() {
                        $( "#learnmoretext" ).slideDown( [1000], ['easeOut']);
                        $('.learnmore').hide();
                        });
        
        
        
        
        
        
        /* ----- Finish writing your JavaScript here  -----*/
    });
}());