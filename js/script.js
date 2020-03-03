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

function mySize(){
    var size = document.getElementById('size');
    return parseInt(size);
}
function myTopping(topping){
    var topping = document.getElementById("topping");
    return parseInt(topping);

}
function myCrust(crust){
    var crust = document.getElementById("crust");
    return parseInt(crust)
}
function myNumber(){
    var number = document.getElementById("quantity");
    return parseInt(number);
}
function myFinal(){
event.preventDefault();
var total = 0;
var total = (mySize()+ myTopping()+ myCrust()) * myNumber();
console.log(total);
alert("your order is " + total +"your amout is "+ total);
};