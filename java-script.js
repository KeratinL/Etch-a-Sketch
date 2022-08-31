function getInput() {
    let promptInput = prompt('Enter a whole number between 1 and 100', '');
    return promptInput;
}

function createArray(promptInput){
    const square = [];

    for(i = 0; i < promptInput; i++) {
        square[i] += `${i}`;
    }
    return square;
}
let promptInput = getInput();
const array = createArray(promptInput * promptInput);

const container = document.querySelector('#container');

container.setAttribute('style', 'display: flex; height: 960px; width: 960px; margin: auto; border: solid black 2px;');
container.style.flexWrap = 'wrap';

array.forEach(() => {
    const div = document.createElement('div');
    div.classList.add('box');
    let box = document.querySelector('box');
    container.appendChild(div);
    div.style.height = `${960 / promptInput + 0.01}px`;
    div.style.width = `${960 / promptInput}px`;
   
    div.addEventListener('mouseover', () => {
        div.style.opacity = '1';
    });
    /*
    div.addEventListener('transitionend', () => {
        div.style.opacity = '0';
    });
    */
});

const playing = document.querySelectorAll('.box');
playing



