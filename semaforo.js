const img = document.getElementById( 'img' );
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

    const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'red':       () => img.src = 'img/vermelho.JPG',
    'yellow':    () => img.src = 'img/amarelo.JPG',
    'green':     () => img.src = 'img/verde.JPG',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
 }

buttons.addEventListener('click', trafficLight);
