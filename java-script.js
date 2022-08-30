
function createArray(){
    const square = [];

    for(i = 0; i < 256; i++) {
        square[i] += `${i}`;
    }
    return square;
}

const array = createArray();

const container = document.querySelector('#container');

container.setAttribute('style', 'display: flex; height: 800x; width: 800px; margin: auto; border: solid black;');
container.style.flexWrap = 'wrap';

array.forEach(() => {
    const div = document.createElement('div');
    div.setAttribute('style', 'display: flex; flex: none; height: 50px; width: 50px; opacity: 0; transition: opacity 0.2s ease; background: grey;')
    container.appendChild(div);
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



