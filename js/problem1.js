function colors(){
    var change=document.getElementById("color").value;
    switch(change){
        case "select":
            document.getElementById("ics1").style.color="black";
            document.getElementById("ics2").style.color="black";
            document.getElementById("ics3").style.color="black";
            document.getElementById("ics4").style.color="black";
            document.getElementById("ics5").style.color="black";
            break;
        case "red":
            document.getElementById("ics1").style.color="red";
            document.getElementById("ics2").style.color="red";
            document.getElementById("ics3").style.color="red";
            document.getElementById("ics4").style.color="red";
            document.getElementById("ics5").style.color="red";
            break;
        case "yellow":
            document.getElementById("ics1").style.color="yellow";
            document.getElementById("ics2").style.color="yellow";
            document.getElementById("ics3").style.color="yellow";
            document.getElementById("ics4").style.color="yellow";
            document.getElementById("ics5").style.color="yellow";
            break;
        case "orange":
            document.getElementById("ics1").style.color="orange";
            document.getElementById("ics2").style.color="orange";
            document.getElementById("ics3").style.color="orange";
            document.getElementById("ics4").style.color="orange";
            document.getElementById("ics5").style.color="orange";
            break;

    }
}