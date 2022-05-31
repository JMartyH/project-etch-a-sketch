
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_CONTAINER_SIZE = 480;
const ERROR_MESSAGE = 'Please enter a valid number';
const mainContainer = document.querySelector('.main-container');
const grids = document.getElementsByClassName('grid')
const gridSize = document.querySelector('#grid-size');
const sliderValue = document.querySelector('#slider-value');
const slider = document.querySelector('.slider-container');
const buttons = document.getElementsByClassName('button')

sliderValue.textContent = gridSize.value;

let mouseDown = false
document.body.onmousedown = (e) => {
    e.preventDefault();
    mouseDown = true;

};
document.body.onmouseup = (e) => {

    mouseDown = false;

};

const defaultMode = 'classic-mode';
let currentMode = defaultMode;



function initialGrid() {



    //create a grid layout 16x16
    for (let j = 1; j <= DEFAULT_GRID_SIZE; j++) {
        for (let i = 1; i <= DEFAULT_GRID_SIZE; i++) {
            let nameOfGrid = `divGrad${i}`
            nameOfGrid = document.createElement('div');
            nameOfGrid.setAttribute('class', 'grid');
            nameOfGrid.setAttribute('style',
                'width: 30px; height: 30px;'
            );
            mainContainer.appendChild(nameOfGrid);

        }
    }
    return;

}

function getGridSize() {

    sliderValue.textContent = gridSize.value;
    return gridSize.value;

}

function clearGrid() {

    while (mainContainer.firstElementChild) {
        mainContainer.firstElementChild.remove();
    }
}



function drawGrid(size) {

    //create a grid layout based on size
    for (let j = 1; j <= size; j++) {
        for (let i = 1; i <= size; i++) {
            let nameOfGrid = `divGrad${i}`
            nameOfGrid = document.createElement('div');
            nameOfGrid.setAttribute('class', 'grid');
            nameOfGrid.setAttribute('style',
                `width: ${(DEFAULT_CONTAINER_SIZE / size).toFixed(2)}px; height: ${(DEFAULT_CONTAINER_SIZE / size).toFixed(2)}px;`
            );
            mainContainer.appendChild(nameOfGrid);

        }
    }
    return;

}

function randomRGBNumber() {
    return Math.floor(Math.random() * (255 - 1 + 1) + 1);
}

function addColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        e.preventDefault();
    } else if (currentMode === 'classic-mode') {
        e.target.   setAttribute('style',
            `width: ${(DEFAULT_CONTAINER_SIZE / getGridSize()).toFixed(2)}px; height: ${(DEFAULT_CONTAINER_SIZE / getGridSize()).toFixed(2)}px;`
        );
            e.target.classList.add('color');
    } else if (currentMode === 'rgb-mode') {
        e.target.setAttribute("style", e.target.getAttribute('style') +
            `background-color:rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()});`);
    } else if (currentMode === 'eraser-mode') {
        e.target.removeAttribute('style');
        e.target.setAttribute('class', 'grid');
        e.target.   setAttribute('style',
        `width: ${(DEFAULT_CONTAINER_SIZE / getGridSize()).toFixed(2)}px; height: ${(DEFAULT_CONTAINER_SIZE / getGridSize()).toFixed(2)}px;`
    );
        
    }

}

function addListenerToElement() {

    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', addColor);
        grids[i].addEventListener('mousedown', addColor);
    }
    return;
}

function addListenerToButtons() {
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', (e) => {
            currentMode = e.target.id;
        });
    }
}


initialGrid();
addListenerToElement();
addListenerToButtons();

slider.addEventListener('input', () => {
    clearGrid();
    drawGrid(getGridSize());
    addListenerToElement();
    addListenerToButtons();
});

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    clearGrid();
    drawGrid(getGridSize());
    addListenerToElement();
    addListenerToButtons();
});





