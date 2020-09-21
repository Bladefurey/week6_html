document.getElementById("ics1").onclick= () =>{
    var onecolor="red";
    var onecolor=document.getElementById("ics1").style.color;
    if (onecolor=="red"){
        document.getElementById("ics1").style.removeProperty("color");
        document.getElementById("ics1").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("ics1").style.removeProperty("color");
        document.getElementById("ics1").style.color="red";
        onecolor="red";
    }
}
document.getElementById("ics2").addEventListener("click",function(){
    var twocolor="red";
    var twocolor=document.getElementById("ics2").style.color;
    if (twocolor=="red"){
        document.getElementById("ics2").style.removeProperty("color");
        document.getElementById("ics2").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("ics2").style.removeProperty("color");
        document.getElementById("ics2").style.color="red";
        onecolor="red";
    }
})
document.addEventListener("DOMContentLoaded",function(){
    var list=['ics1','ics2','ics3','ics4','ics5'];
    list.forEach(function(element){
        document.getElementById(element).onclick=()=>{
            var cls=document.getElementById(element).className;
            console.log(cls);
            if(cls.includes("check"))
            {
                document.getElementById(element).classList.remove("check");
                document.getElementById(element).classList.add("unckeck");
            }
            else if(cls.includes("uncheck")){
                document.getElementById(element).classList.remove("uncheck");
                document.getElementById(element).classList.add("ckeck");
            }
        }
    })

})


