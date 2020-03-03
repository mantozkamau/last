$(document).ready(function () {
    $("#continue").click(function () {
        $("#close").slideToggle();
    });
});
function myFunction(name,location,number){
var name=document.getElementById("name").value
var location=document.getElementById('location').value
var number=document.getElementById("number").value
event.preventDefault();
alert(" hae " + name + " we've received your order it will be processed and deliverd to " +location)
};

function myPrice(){
    var crust=document.getElementById("crust").text
    var topping=document.getElementById("topping").value
    var size=document.getElementById("size").value
    var quantity=document.getElementById("quantity").value
    var final=(crust + topping +size ) *quantity;
    alert("your order of " + crust + " , " + topping+ " , " + size + " Has been received and is being processed " + "  total price  is " + final );
 };
