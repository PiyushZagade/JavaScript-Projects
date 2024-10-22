// let apikey="6d02cca9fa48800f5fd7a08c";


let selectc=document.querySelectorAll(".dropbox select");
let submit=document.querySelector("button");
let amount=document.getElementById("amt");
let msg=document.getElementById("output");

let fromc =document.querySelector(".from select");
let toc =document.querySelector(".to select");


for(let select of selectc){
    for(let code in countryList){
        let option=document.createElement('option');
        option.value=countryList[code];
        option.id=code;
        option.textContent=code;
        select.appendChild(option);
        if(select.name=="from" && option.value=="US"){
            option.selected=true;
        }
        if(select.name=="to" && option.value=="IN"){
            option.selected=true;
        }
    }   

    select.addEventListener('change',(e)=>{
        let code=e.target.value;
        let newimg=`https://flagsapi.com/${code}/flat/64.png`;
        window.addEventListener('load',()=>{
            let newimg=`https://flagsapi.com/${code}/flat/64.png`;
        })
        let img =e.target.parentElement.querySelector('img');
        img.src=newimg;    
    })
}



submit.addEventListener('click',async (e)=>{
    e.preventDefault();
    let amt = amount.value;

    if(amt==""){
        msg.textContent="Please Enter Amount";
        msg.style.background="lightsteelblue"; 
    }

    if(amt<0){
        msg.textContent="Amount cannot be negative";
        msg.style.background="rgb(255, 150, 150)";
    }

    let fromval =fromc.options[fromc.selectedIndex].id;
    let toval=toc.options[toc.selectedIndex].id;




   let api=`https://v6.exchangerate-api.com/v6/6d02cca9fa48800f5fd7a08c/pair/${fromval}/${toval}/${amt}`

   let url=await fetch(api);
   let data = await url.json();
   let round= data.conversion_result
    msg.textContent=`${amt} ${fromval} = ${round.toFixed(2)} ${toval}`;
    msg.style.background="lightsteelblue"; 
    

})







