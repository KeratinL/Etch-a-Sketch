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
    for (i = 0; i < 10; i++) {
        return opacity += 0.10;
    }
}

let uniqueClass = 0;
function createUniqueClass(){
    
    uniqueClass += 1;
    return uniqueClass;
    
}



console.log(Math.floor(Math.random()*16777215).toString(16));

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
       
    for (i = 0; i < elements.length; i++){
        elements[i].addEventListener('mouseover', () => {
            elements[i].style.opacity = `${addOpacity()}`;
        })
    }
    /*
    div.addEventListener('transitionend', () => {
        div.style.opacity = '0';
    });
    */
    });
});









