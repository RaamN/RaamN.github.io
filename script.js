// This was taken from stack overflow, link here: https://stackoverflow.com/questions/15301356/how-can-i-highlight-a-selected-list-item-with-jquery
//highlights navbar section
$(document).ready(function () {
    $("nav li").hover(function () {
        var theColorIs = $(this).css("color");
        $(this).css("background-color", "#525252");
    }, function () {
        $(this).css("background-color", "#222");
    });
});
//highlights skill sections, link here: https://stackoverflow.com/questions/15301356/how-can-i-highlight-a-selected-list-item-with-jquery
$(document).ready(function () {
    $(".container li").hover(function () {
        var theColorIs = $(this).css("color");
        $(this).css("background-color", "#c5cdd9");
    }, function () {
        $(this).css("background-color", "#FFFFFF");
    });
});

//Taken from w3 schools, link here: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle
$(document).ready(function(){
    $(".card-img-top").hover(function(){
        $(this).fadeTo(1000, 0.4);
        $(this).fadeTo(1000, 1.0);
    });
});


