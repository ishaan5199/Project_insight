function OPT(op){
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

// For icon change (Create User and Login Page)
if(window.location.pathname==="/create_user" || window.location.pathname==="/login"){
    window.onload = ()=>{
        var icon = document.getElementById("icon");
        /* console.log(icon);
        console.log(icon.className); */
        icon.addEventListener("click",(e)=>{
                if(icon.className==="fa fa-eye-slash"){
                    document.getElementById("sec").setAttribute("type","text");
                    icon.className="fa fa-eye";
                    // console.log(icon.className);
                }
                else{
                    document.getElementById("sec").setAttribute("type","password");
                    icon.className="fa fa-eye-slash";
                }
        })
    }
} 
