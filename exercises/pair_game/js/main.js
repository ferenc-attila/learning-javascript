'use strict';

import { randomizeCards, showCurrentTime } from './modules.js';

let points = 0;
let timerIsRunning = false;
let currentTime = 0;
let cards = null;
const row1 = document.querySelector('.card-row:nth-child(2)');
const row2 = document.querySelector('.card-row:nth-child(3)');
const row3 = document.querySelector('.card-row:nth-child(4)');
const row4 = document.querySelector('.card-row:nth-child(5)');
let i = 0;
let blockClicks = false;
let clickNum = 0;

setInterval( () => {
    if (!timerIsRunning) {
        return;
    }

    currentTime++;
    showCurrentTime();
}, 1000 );