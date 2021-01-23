
function addbtn()
{
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var n3=n1+n2

   document.getElementById("result").innerHTML=n3
}

function subbtn(){

    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var n3=n1-n2

   document.getElementById("result").innerHTML=n3

}

function mulbtn(){

var n1=parseInt(document.getElementById("num1").value)
var n2=parseInt(document.getElementById("num2").value)
    var n3=n1*n2
    document.getElementById("result").innerHTML=n3

}

