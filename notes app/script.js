let notescontainer = document.querySelector(".notescontainer");
let notes = document.querySelectorAll(".inputbox");
let createbtn = document.querySelector(".btn");

function display() {
    notescontainer.innerHTML =localStorage.getItem("note");
}
display();

function storage() {
    localStorage.setItem("note", notescontainer.innerHTML);
}

createbtn.addEventListener('click', () => {
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})


notescontainer.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                storage();
            }
        })
    }
}
)