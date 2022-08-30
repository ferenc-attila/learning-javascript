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

const randomizeCards = () => {
    const cardIconPairs = [cardIcons, cardIcons].flat(1);
    let schuffled = [];
    const indices = arraySchuffle(cardIconPairs);
    for (let i = 0; i < cardIconPairs.length; i++) {
        schuffled[i] = cardIconPairs[indices[i]];
    }
    return schuffled;
}

const arraySchuffle = (array) => {
    const schuffledIndices = [];
    while (schuffledIndices.length < array.length){
        let index = generateRandom(array.length);
        if (!schuffledIndices.includes(index)) {
            schuffledIndices.push(index);
        }
    }
    return schuffledIndices;
}


const generateRandom = (max) => {
    return Math.floor(Math.random() * max);
}

const showCurrentTime = () => {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector('.current-time').textContent = `${minutes}:${seconds}`;
}

export { randomizeCards, showCurrentTime };