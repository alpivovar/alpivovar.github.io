$(document).ready(function(){
    $('.spoiler-title').click(function(){
        $(this).parent().children('.spoiler-body').slideToggle();
        return false;
    });
});