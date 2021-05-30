// $("h1").css("color","red");
// $("h1").css("fontSize","2.5rem");


// $(document).keypress(function(e){
//     $("h1").text(e.key);
// });

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});