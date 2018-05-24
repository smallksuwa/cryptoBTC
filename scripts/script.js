$(document).ready(function() {
    $(".burger3").click(function() {
        if($(".burger3").attr('datas') == 'off') {     /* появление меню */
            $(".burger4").attr('style', 'visibility: visible; margin-right: 0px;');
            $(".burger3").attr('datas', 'on');
            $(".burger3").removeClass("fa-bars");
            $(".burger3").addClass("fa-times");
        }
        else {                                         /* исчезновение меню */
            $(".burger4").attr('style', 'visibility: hidden; margin-right: -1000px;');
            $(".burger3").attr('datas', 'off');
            $(".burger3").removeClass("fa-times");
            $(".burger3").addClass("fa-bars");
        }
    });
});