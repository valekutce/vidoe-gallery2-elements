$(document).ready(function (){
    
        $(".switch").on('click', function(){
            $(this).toggleClass("active");
            if ($('.span').text() == "ON")
                $('.span').text("OFF")
            else
                $('.span').text("ON");
        });
});