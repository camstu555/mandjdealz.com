(function() {

    "use strict";

    var $preload = $("#preload"),
        $loader = $(".loader"),
        $mainNav = $(".main-nav"),
        $logo = $(".logo");

    TweenLite.to($loader, .5, {
        css: {
            marginTop: 100,
            opacity: 1
        },
        onComplete: function() {

            TweenLite.to($loader, .5, {

                css: {
                    marginTop: -100,
                    opacity: 0
                },
                onComplete: function() {

                    $preload
                        .fadeOut(function() {
                            
                            $(this).remove();

                            TweenLite.to($logo, 1, {
                            	css: {
                            		marginTop: 20,
                            		opacity: 1
                            	}
                            });

                            TweenLite.to($mainNav, 2, {
                            	css: {
                            		opacity: 1,
                            		marginTop: 0
                            	}
                            });

                        });

                }, 
                delay: 1.5

            })
        }
    });



})();