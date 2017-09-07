//Script
//SmoothScroll
$(function(){
$("a").on('click', function(x) {

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

//for tablets and mobile
$(function(){
    if ($(window).width() <= 768  && $(window).width() > 425) {
        $('#head').css({
            "background-color": "#fffff",
            "position": "static"
        });
    } else if($(window).width() <= 425 && $(window).width() > 320){
          $('#head').css({
            "background-color": "#fffff",
            "position": "static"
        });
          $('.menu-items:first-child').css("display","hidden");
    }
});

//navbar trans
$(document).ready(function(){
    $('.scrollTop').css({
            "opacity": "0" 
            });

    $(window).scroll(function(){
        var headH = $('#head').height();
        var top = $(window).scrollTop();
        var w = window.innerWidth ? window.innerWidth : $(window).width();
        if ( top > headH && w > 768) {
            $('#head').css({
                "background-color": "#fff",
                "transition": "all 1s ease-in",
                "box-shadow":"2px 3px 3px rgba(0,0,0, .3)",
                "height":"50px",
                "position": "fixed"
            });
            $('.scrollTop').css({
            "opacity": "1",
            "transition": "all 1s linear"    
            });
            $('.menu-bar').css("margin","17px 0");
            $('.brand').css({
                "width": "28px",
                "margin-left": "30px",
                "margin-top": "10px"
            });
        }else if(w <= 768){
            $('#head').css({
                "background-color": "#fff",
                "transition": "all 1s ease-in",
                "box-shadow":"2px 3px 3px rgba(0,0,0, .3)",
                "position": "static"
            });
            $('.menu-bar').css({
                "position": "-webkit-sticky",
                "top": "0",
                "left": "0",
                "right": "0"
            });
        }else if(top > 80 && w <= 768 && w > 425){
            $('#head').css({
                "background-color": "#fff",
                "transition": "all 1s ease-in",
                "box-shadow":"2px 3px 3px rgba(0,0,0, .3)",
                "position": "static"
            });
            $('.menu-bar').css({
                "position": "sticky",
                "top": "0",
            });
        }else{
            $('#head').removeAttr('style').css({
                "transition": "all 1s ease-out",
                "position": "fixed"
            });
            $('.scrollTop').css("opacity", "0");
            $('.menu-bar').removeAttr('style');
            $('.brand').removeAttr('style');
            
        }
    });
    
});;

//scrollspy

$(function(){
    if($(window).outerWidth() > 768){
        // Cache selectors
var lastId,
    topMenu = $(".menu-bar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
    }
});