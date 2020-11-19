const clock = document.querySelector(".js-Clock"),
      nameForm = document.querySelector(".js-nameForm"),
      nameInput = nameForm.querySelector("input"),
      greeting = document.querySelector(".js-greeting");

const CURRENTUSER_LS = "currentUser";
const GREETING_SS ="showing";

function saveName(name){
    localStorage.setItem(CURRENTUSER_LS, name);
}

function handleNameSubmit(event){
    event.preventDefault();
    const userInput = nameInput.value;
    showGreeting(userInput);
    saveName(userInput);
}

function showGreeting(name){
    nameForm.classList.remove(GREETING_SS);
    greeting.classList.add(GREETING_SS);
    const date = new Date();
    const hour = date.getHours();
   
    if((hour >= 4) && (hour < 12)){
        greeting.innerText = `Good monring, ${name}`;    
    }
    else if ((hour >= 12) && ( hour < 16 )){
        greeting.innerText = `Have a nice day, ${name}`;
    }
    else if ((hour >= 16) && ( hour < 20)){
        greeting.innerText = `Enjoy your evening, ${name}`;
    }
    else{
        greeting.innerText = `Good night, ${name}`;
    }
}


function askForName(){
    nameForm.classList.add(GREETING_SS);
    nameForm.addEventListener("submit", handleNameSubmit);
}


function greetToUser(){
    const currentUser = localStorage.getItem(CURRENTUSER_LS);
    if(currentUser === null){
        askForName();
    }
    else{
      showGreeting(currentUser);
    }
}


// set and get time
function showTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const currentTime = 
    `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;

    clock.innerText = currentTime;
}


function init(){
   // abou time   
    showTime();
    setInterval(showTime, 1000);

   // about name and greeting
     greetToUser();
}

init();