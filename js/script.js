$(document).ready(function () {
    $("#continue").click(function () {
        $("#close").slideToggle();
    });
    $(".row").click(function(){
        $(".row img").animate();
    })
});