const ClockContainer = document.querySelector(".js-clock");
const TitleClock = ClockContainer.querySelector("h1");

function getTime () {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    TitleClock.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init () {
    getTime();
    setInterval (getTime, 1000);
}

init();