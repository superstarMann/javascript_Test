

const ToDoForm = document.querySelector(".js-toDoForm");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.querySelector(".js-toDoList");

const ToDos_LS="toDos";

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❤";
  span.innerText = text
  ToDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  
  
}


function handleSubmit (event) {
    event.preventDefault();
    const currentValue = ToDoInput.value;
    paintToDo(currentValue);
    ToDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(ToDos_LS);
    if(toDos !== null){

    }
}

function init () {
    loadToDos();
    ToDoForm.addEventListener("submit", handleSubmit)
}

init();