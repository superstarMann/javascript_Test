const ToDoForm = document.querySelector(".js-toDoForm");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.querySelector(".js-toDoList");

const ToDos_LS="toDos";

let toDos = [];


function deleteToDo(){
   const btn = event.target;
   const li = btn.parentNode;
   ToDoList.removeChild(li);
   const cleanToDos = toDos.filter(function(toDo){
       return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos
   saveToDos();
}

function saveToDos() {
    localStorage.setItem(ToDos_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length +1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text
  ToDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  const toDoObj = {
      text: text,
      id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}


function handleSubmit (event) {
    event.preventDefault();
    const currentValue = ToDoInput.value;
    paintToDo(currentValue);
    ToDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(ToDos_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }
        );
        
    }
}

function init () {
    loadToDos();
    ToDoForm.addEventListener("submit", handleSubmit)
}

init();