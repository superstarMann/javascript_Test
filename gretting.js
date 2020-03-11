const form = document.querySelector(".js-form");
const input =form.querySelector("input");
const greeting = document.querySelector(".js-grettings");

const USER_LS ="currentUser";
const SHOW_LS = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit (event) {
   event.preventDefault();
   const currentValue = input.value;
   paintgreeting(currentValue);
   saveName(currentValue);
}

function AskForName () {
    form.classList.add(SHOW_LS);
    form.addEventListener("submit", handleSubmit);    

} 

function paintgreeting(text){
    form.classList.remove(SHOW_LS);
    greeting.classList.add(SHOW_LS);
    greeting.innerText = `Hello! ${text}`;
}

function loadName () {
    const currentUser = localStorage.getItem(USER_LS); 
    if(currentUser === null){
        AskForName();
    }else{
        paintgreeting(currentUser);
    }
}


function init () {
    loadName();
}

init();