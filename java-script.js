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

const container = document.querySelector('#container');

container.setAttribute('style', 'display: flex; flex: 1 1 0; height: 960px; width: 960px; margin: auto; border: solid black 2px;');
container.style.flexWrap = 'wrap';

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let opacity = 0.0;
function addOpacity() {
    return opacity += 0.10;
}

let uniqueClass = 0;
function createUniqueClass(){
    
    uniqueClass += 1;
    return uniqueClass;
    
}


let promptInput = '';
let array = [''];
const button = document.querySelector('button');
    
button.addEventListener('click', () => {
    removeAllChildNodes(container);
    promptInput = getInput();
    array = createArray(promptInput * promptInput);
    array.forEach(() => {
    const div = document.createElement('div');
    div.classList.add(`box${createUniqueClass()}`);    
    elements = div.classList;
    container.appendChild(div);
    div.style.height = `${960 / promptInput + 0.01}px`;
    div.style.width = `${960 / promptInput}px`;
    div.style.background = 'grey';
    div.style.opacity = 0;
    div.addEventListener('mouseover', (event) => {
        event.target.style.opacity = `${addOpacity()}`;
        })
    /*
    div.addEventListener('transitionend', () => {
        div.style.opacity = '0';
    });
    */
    });
});









