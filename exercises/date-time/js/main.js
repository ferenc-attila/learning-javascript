'use strict'

// Óra

// 1. Pontos idő megjelenítése magyar nyelvi beállításoknak megfelelően
const getCurrentTime = () => {
    const currentTime = new Date();
    const timeToDisplay = `${currentTime.toLocaleDateString('hu-HU').replaceAll(' ', '')} ${currentTime.toLocaleTimeString('hu-HU')}`;
    return timeToDisplay;
};

// 2. Pillanatnyi idő lekérése 1000 milliszekundumonként, szövek elhelyezése az óra divben
setInterval(() => {
    const time = getCurrentTime();
    const clock = document.querySelector('.clock');
    clock.textContent = time;
}, 1000);

// Stopper

let running = false;
let timer = 0;
const stopperButton = document.querySelector('.start-stop');
const stopperDiv = document.querySelector('.stopper');

const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
} 

const switchRunningStopper = () => {
    if (running) {
        running = false;
    } else {
        running = true;
    }
};

setInterval(() => {
    const seconds = addLeadingZero(timer % 60);
    const minutes = addLeadingZero(Math.floor(timer / 60) % 60);
    const hours = addLeadingZero(Math.floor(timer / 3600));
    if (running) {
        timer++;
    } else {
        timer = 0;
    }
    stopperDiv.textContent = `${[hours, minutes, seconds].join(':')}`;
}, 1000);
