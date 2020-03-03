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
    var size = document.getElementById('size').value;
    return parseInt(size);
}
function myTopping(topping){
    var topping = document.getElementById("topping").value;
    return parseInt(topping);

}
function myCrust(crust){
    var crust = document.getElementById("crust").value;
    return parseInt(crust)
}
function myNumber(){
    var number = document.getElementById("quantity").value;
    return parseInt(number);
}
function myFinal(){
event.preventDefault();
var total = 0;
var total = (mySize()+ myTopping()+ myCrust()) * myNumber();
console.log(total);
alert("your order is " + total +"  your amount is " + total);
};