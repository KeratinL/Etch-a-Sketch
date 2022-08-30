
function createArray(){
    const square = [];
    //257 is one more than the needed 256 members
    for(i = 0; i < 257; i++) {
        square[i] += `${i}`;
    }
    return square;
}

const array = createArray();

array.forEach(() => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.height = '100px';
    div.style.width = '100px';
    container.appendChild(div);
});


