let add=document.getElementById("add");

function display() {
    if (localStorage.getItem("store")) {
        document.body.innerHTML += localStorage.getItem("store");
        document.querySelectorAll('.added button').forEach(button => {
            button.addEventListener('click', function() {
                button.parentElement.remove();
                setstorage();
            });
        });
    }
}
display();

function setstorage() {
    let taskHTML = Array.from(document.querySelectorAll('.added')).map(el => el.outerHTML).join('');
    localStorage.setItem("store", taskHTML);
}

add.addEventListener('click',()=>{

let todo =document.querySelector("#todo").value;
let when =document.querySelector("#when").value;


   if(todo.length!=0 && when.length!=0){
    let addcontainer=document.createElement("div");
    let task=document.createElement("p");
    let date=document.createElement("p");
    let button=document.createElement("button");
    
    addcontainer.className="added";
    task.id="task";
    date.id="date";

    task.innerHTML=todo;
    date.innerHTML=when;

    button.innerHTML="Delete";
    addcontainer.appendChild(task);
    addcontainer.appendChild(date);
    addcontainer.appendChild(button);

   document.body.appendChild(addcontainer);

   document.querySelector("#todo").value = "";
   document.querySelector("#when").value="";



    button.addEventListener('click',()=>{
        document.body.removeChild(addcontainer);
     
      setstorage();
    })
   }

   setstorage();
   
});



