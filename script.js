
/*

function add(){



var inputbox = document.getElementById("input");
var list = document.getElementById("list-item")

if(inputbox.value.trim() !== ''){

    let item = document.createElement("li");
    item.innerHTML=`${inputbox.value} <button class="delete-btn" onclick="deleteitem(this)">- </button>`;

    
    list.appendChild(item)
    inputbox.value="";



}
*/

//get the value : input,btn,ul


function add(){
    const box = document.getElementById("inputbox");
    
    
    const listcontainer = document.getElementById("items");

    
if(box.value === ''){

alert("you must write something!");

}else{

    let li = document.createElement("li");
    li.innerHTML=box.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
    saving();
}

box.value="";
saving();

listcontainer.addEventListener("click",function(t){

    if(t.target.tagName === "LI"){
t.target.classList.toggle("pin")
saving();
}
else if(t.target.tagName === "SPAN"){
t.target.parentElement.remove();
saving();

}


}, false);


function saving(){

    localStorage.setItem("data",listcontainer.innerHTML);
    
    }
    
    function show(){
    
        listcontainer.innerHTML = localStorage.getItem("data");
    }
    
show();


}