function validate ()


{ 
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if (username=="admin"&&password=="user")

{
alert ("Login successfully");

window.open("index1.html")
}
else
{ 
alert ("Login failed");
return false;

}

}
