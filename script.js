/* CODE GOES HERE */

// AFTER LOADING

$(window).on("load", start);

function start(){
    $("#menu").load("menu.html");
    $("#content").load("home.html");
    $("#footer").load("footer.html");
}

// MENU CLICK

$(document).on("click", "#menu a", redirect);

function redirect(e){
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var href = $(this).attr("href");
    $("#content").load(href);

}