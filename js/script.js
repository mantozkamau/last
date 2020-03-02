$(document).ready(function () {
    $("#continue").click(function () {
        $("#close").slideToggle();
    });
});
function myFunction(name,location,number){
var name=document.getElementById("name").value
var location=document.getElementById('location').value
var number=document.getElementById("number").value
alert(" hae " + name + " we've received your order it will be processed and deliverd to " +location)
};
function myOrder(size,type,topping,crust){
    var size=[small,medium,large]
}