const inputBox = document.getElementById("input-box");    
const listCotainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }               
    else{       
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  
        listCotainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}
listCotainer.addEventListener("click", function(e){ 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
} , false);

function savedata(){
    localStorage.setItem("data", listCotainer.innerHTML);
}
function showTask(){
    listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();