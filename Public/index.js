function OPT(op){
    // alert("helloji")
    // alert(op);
    var x = document.getElementsByClassName("fields")[op].selectedIndex;
    if(x==0){document.getElementsByClassName("inp selectedF")[op].setAttribute("placeholder",`${document.getElementsByTagName("option")[x].value}`);}
    else{document.getElementsByClassName("inp selectedF")[op].setAttribute("placeholder",`Enter ${document.getElementsByTagName("option")[x].value}`);}
    document.getElementsByClassName("inp selectedF")[op].setAttribute("name",document.getElementsByTagName("option")[x].value);
}

function load(){            // User creation
    var timer=3;
    setTimeout(()=>{
        window.location.href="/home";
    },4000);
    setInterval(()=>{
        document.getElementById("counter").innerHTML=`Redirecting to previous page in ${timer--}`
    },1000)
}

function greet(){
    var name = document.getElementsByClassName("msg")[0].innerHTML;
    document.getElementsByClassName("msg")[0].innerHTML = name;
}


