$(document).ready(function(){
    $(".titleofcollapsible").click(function (){
        if ($(this).next()[0] != $(".active")[0]){
            $(".active").slideUp("slow", function() {
                $(this).removeClass("active")
            })
            $(this).next().slideDown("slow",function(){
                $(this).addClass("active")
            })
        }
        else{
            $(".active").slideUp("slow",function(){
                $(this).removeClass("active")
            })
        }
    })
})