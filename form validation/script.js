var nameerr =document.getElementById('nameerror');
let emailerr =document.getElementById("emailerror");
let passerr =document.getElementById("passerror");
let passc =document.getElementById("passc");
let phonerr =document.getElementById("phoneerror");
let suberr =document.getElementById("sub-err");




function namecheck(){
    var name=document.getElementById('name').value;
    if(name.length==0){
        nameerr.innerHTML="Name is required";
        nameerr.style.cssText="color:red";
        return false;
    }

    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameerr.innerHTML="Write fill name";
        nameerr.style.cssText="color:red";
        return false;
    }
    nameerr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    nameerr.style.cssText="color:green";
    return true;

}

function emailvalid(){
    let email=document.getElementById("email").value;

    if(email.length==0){
        emailerr.innerHTML="Email is required";
        emailerr.style.cssText="color:red";
        return false;
    }

    if(!email.match(/^[a-z][a-z0-9]*@[a-z]+\.[a-z]+$/)){
        emailerr.innerHTML="Invalid email ";
        emailerr.style.cssText="color:red";
        return false;
    }
    emailerr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    emailerr.style.cssText="color:green";
    return true;

}


function passvalid(){
    let pass =document.getElementById("password").value;

    if(pass.length==0){
        passerr.innerHTML="Please create password";
        passerr.style.cssText="color:red";
        return false;
    }
    if (pass.match(/^[0-9]/)) {
        passerr.innerHTML = "Cannot start with a number";
        passerr.style.color = "red";
        return false;
    } 

    if(pass.length<8){
        passerr.innerHTML="Atleast 8 characters";
        passerr.style.cssText="color:red";
        return false;
    }

    if(!pass.match(/^[A-Za-z0-9]+$/)){
        passerr.innerHTML="No special characters";
        passerr.style.cssText="color:red";
        return false;
    }

    passerr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    passerr.style.cssText="color:green";
    return true;

}

function confirmp(){
    let confirm =document.getElementById("password-c").value;
    let pass =document.getElementById("password").value;

    if(!confirm.match(pass)){
        passc.innerHTML="password didn't matched";
        passc.style.cssText="color:red";
        return false;
    }

    passc.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    passc.style.cssText="color:green";
    return true;

}

function phonvalid(){
    let phone =document.getElementById("number").value;

    if(phone.length==0){
        phonerr.innerHTML="Phone No. required";
        phonerr.style.cssText="color:red";
        return false;
    }

    if(phone.length<10){
        phonerr.innerHTML="10 Digits required";
        phonerr.style.cssText="color:red";
        return false;
    }
    
    phonerr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    phonerr.style.cssText="color:green";
    return true;
    
}

function verify(){
    if(!namecheck() || !emailvalid() || !passvalid() || !confirmp() || !phonvalid()){
        suberr.style.display='block';
        suberr.innerHTML="Please fix the Error";
        phonerr.style.cssText="color:red";
        setTimeout(function(){suberr.style.display='none';},3000);
        return false;
    }
}