function ShowHelloMessage() {
    var name = document.getElementById("myname");
    var year=document.getElementById("myage");
    var age=2020-year.value;
   
    var result="Hello, " + name.value+". Your Age is " + age;
    console.log(typeof(result));
    if (result){
        alert(result);
    }

}
document.getElementById("mybutton").onclick = ShowHelloMessage;