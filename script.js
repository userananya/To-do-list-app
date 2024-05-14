const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("you must write something! ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
    }

},false);

// when we refresh the browser our task will remove so ,to store the tasks on the browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//display the data when we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();