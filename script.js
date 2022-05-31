
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_CONTAINER_SIZE = 480;
const ERROR_MESSAGE = 'Please enter a valid number';
const mainContainer = document.querySelector('.main-container');
const grids = document.getElementsByClassName('grid')
const gridSize = document.querySelector('#grid-size');
const sliderValue = document.querySelector('#slider-value');
sliderValue.textContent = gridSize.value;   
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)



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

function addColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.classList.add('color');
}

function addListenerToElement() {

    for (let i = 0; i < grids.length; i++) {
        
        grids[i].addEventListener('mousedown', addColor);
        grids[i].addEventListener('mouseover', addColor);
    }
    return;
}

initialGrid();
addListenerToElement()
const customGridButton = document.querySelector('.btn-container');
customGridButton.addEventListener('click', () => {

    clearGrid();
    drawGrid(getGridSize());
    addListenerToElement()

});





