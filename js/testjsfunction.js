function ShowHelloMessage() {
    var name = document.getElementById("myname");
    var year=document.getElementById("myage");
    var age=2020-year.value;
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value+". Your Age is " + age;
    

}
document.getElementById("mybutton").onclick = ShowHelloMessage;