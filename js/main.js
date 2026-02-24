$(function($){
    $('.first-view').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 7000,
        loop: true,
    });

    $(window).scroll(function(){
    $(".fadein").each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight=$(window).height();
    if(scroll>targetElement-windowHeight+200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
    }
     });
    });

    $('.slider').slick({
        arrows: true,
        autoplay: false,
        dots: true,
        slidesToShow: 4,   // 一度に表示する枚数
        slidesToScroll: 1,
    });

    $('nav a[href^="#"]').click(function(){
        var adjust=0;
        var speed=400;
        var href=$(this).attr("href");
        var target=$(href=="#" || href=="" ? 'html':href);
        var position=target.offset().top-adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

});
