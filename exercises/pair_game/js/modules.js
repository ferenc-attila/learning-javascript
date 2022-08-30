'use strict';

let timerIsRunning = false;
let currentTime = 0;
let blockClicks = false;
let clickNum = 0;
let points = 0;

const cardIcons = [
    'fa-truck-monster',
    'fa-bus',
    'fa-car-side',
    'fa-taxi',
    'fa-igloo',
    'fa-landmark',
    'fa-monument',
    'fa-mosque',
    'fa-tents',
    'fa-church'
];


const showCurrentTime = () => {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector('.current-time').textContent = `${minutes}:${seconds}`;
};

setInterval(() => {
    if (!timerIsRunning) {
        return;
    }
    currentTime++;
    showCurrentTime();
}, 1000);

const startGame = () => {
    const cardRows = document.querySelectorAll('.card-row');
    cardRows.forEach((row) => { row.innerHTML = '' });
    const cardIcons = randomizeCards();
    console.log(cardIcons);
    for (let i = 0; i < cardIcons.length; i++) {
        const card = createOneCard(cardIcons[i]);
        for (let index in cardRows) {
            if (i >= (index * 5) && i < (index + 1) * 5 ) {
                cardRows[index].appendChild(card);
            }
        }
    }
    const deck = document.querySelectorAll('.card');
    deck.forEach(card => {
        card.addEventListener('click', cardClick);
    });
};

const cardClick = (event) => {
    if (blockClicks) {
        return;
    }
    if (event.currentTarget.classList.contains('found')) {
        return;
    }
    clickNum++;
    if (clickNum === 1) {
        timerIsRunning = true;
    }
    event.currentTarget.classList.toggle('flipped');
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (flippedCards.length > 1) {
        blockClicks = true;
        const waitForMemorize = setTimeout(() => {
            clearTimeout(waitForMemorize);
            blockClicks = false;
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('flipped');
            });
        }, 2000);
        checkPair();
    }
};

const checkPair = () => {
    const firstCardIcon = document.querySelector(',card.flipped i');
    if (firstCardIcon) {
        const firstCardIconClass = firstCardIcon.className.split(' ');
        const pair = document.querySelectorAll(`.card.flipped .${firstCardIconClass.pop()}`);
        if (pair.length == 2) {
            points++;
            showPoints();
            document.querySelectorAll('.card.flipped').forEach(card =>
                card.classList.add('found')
            );
            if (points === cardIcons.length) {
                timerIsRunning = false;
                const showResults = setTimeout(() => {
                    c
                }, 5000);
            }
        }
    }
};

const showPoints = () => {
    document.querySelector('.user-points').textContent = points;
};

const randomizeCards = () => {
    const cardIconPairs = [cardIcons, cardIcons].flat(1);
    let schuffled = [];
    const indices = arraySchuffle(cardIconPairs);
    for (let i = 0; i < cardIconPairs.length; i++) {
        schuffled[i] = cardIconPairs[indices[i]];
    }
    return schuffled;
};

const arraySchuffle = (array) => {
    const schuffledIndices = [];
    while (schuffledIndices.length < array.length) {
        let index = generateRandom(array.length);
        if (!schuffledIndices.includes(index)) {
            schuffledIndices.push(index);
        }
    }
    return schuffledIndices;
};

const generateRandom = (max) => {
    return Math.floor(Math.random() * max);
};

const createOneCard = (icon) => {
    const div = document.createElement('div');
    div.classList.add('col-2', 'card');
    div.innerHTML = `<div class="card__front">
                        <i class="fa, ${icon}"></i>
                    </div>
                    <div class="card__back">
                        <img src="./img/card-back.png" alt="card back">
                    </div>`;
    return div;
};

export { startGame };