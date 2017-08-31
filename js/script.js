//Script
//SmoothScroll
$(document).ready(function(){
$("a").on('click', function(x) {
    var headH = $('#head').outerHeight();

if (this.hash !== "") {
    x.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 1200, function(){

    window.location.hash = hash;
    });
} // End if
});
});//Smoothscroll end
//Mobile menu toggle
$(function(){   
    $(".menu-items i").click(function(){
        if ($(this).is('.fa.fa-bars')) {
            $(".menu-items").css(
                'display', 'block'
            );
            $(this).removeClass('fa fa-bars').addClass('fa fa-times');
        } else if($(this).is('.fa.fa-times')){
            $(".menu-items").not(':first-child').css('display', 'none');
            $(this).removeClass('fa fa-times').addClass('fa fa-bars');
        }
    });
});//Mobile Menu Toggle end

//navbar trans
$(document).ready(function(){
    $(window).scroll(function(){
        var headH = $('#head').outerHeight;
        if ($(window).scrollTop() > 100) {
            $('#head').css({
                "background-color": "#fff",
                "transition": "all 1.5s ease-out",
                "box-shadow":"2px 3px 3px rgba(33, 33, 33, .6)",
                "height":"50px"
            }).addClass('head');
            $('.scrollTop').css({
            "opacity": "1",
            "transition": "all 1s linear"    
        });
            $('.menu-bar').css("margin","17px 0");
            $('.brand').css("width", "28px");
        } else {
            $('#head').removeAttr('style').css("transition", "all 1.5s ease-out");
            $('.scrollTop').css("opacity", "0");
            $('.menu-bar').removeAttr('style');
            $('.brand').removeAttr('style');
            
        }
    });
});
