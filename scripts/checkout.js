
let btn=document.getElementById("confirm");
btn.addEventListener("click",myfunc)
function myfunc()
{
    event.preventDefault()
    setTimeout(function(){
        alert("your order is Accepted")
    },);

    setTimeout (function(){
        alert("your order is being prepared")
    },3000) ;
    setTimeout(function(){
        alert("Your order is being packed  ")
    },8000);

    setTimeout(function(){
        alert("Your order is out for delivery  ")
    },10000);
    setTimeout(function(){
        alert("Your order is delivery  ")
    },12000);
}

