function addTask(){
    let taskInput=document.getElementById("taskInput");
    let  taskText=taskInput.value.trim();


if (taskText===""){
    alert("Enter your task")
    return;
}
let  li=document.createElement("li");
li.textContent=taskText;

let button=document.createElement("button");
button.textContent="delete";
button.onclick=function(){
    li.remove();
};

li.appendChild(button);
document.getElementById("taskList").appendChild(li);
taskInput.value="";

} ;



// function addTask(){
//     let taskInput=document.getElementById("taskInput");
//     let tasktext=taskInput.value.trim();


//     if(tasktext===""){
//         alert("please, Enter your task.")
//         return;
//     }


//     let li=document.createElement("li");
//     li.textContent=tasktask;

//     let deletebtn=document.createElement("button");
//     deletebtn.textContent="delete";
//     button.onclick=function(){
//         li.remove;
//     };
//     li.appendChild(button);
//     document.getElementById("taskList").appendChild(li);
//     taskInput.value="";

// };