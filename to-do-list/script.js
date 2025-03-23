const inputBox = document.querySelector('#input-box');
// const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write somthing!");
    }
    else{
        let li = document.createElement('li');
        let div = document.createElement('div');
        div.classList.add('check');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        li.appendChild(div);
        let span = document.createElement("span");
        span.innerHTML= '\u00d7' ;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();