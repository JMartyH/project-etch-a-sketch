
const DEFAULT_GRID_SIZE = 16;
const ERROR_MESSAGE = 'Please enter a valid number';
const mainContainer = document.querySelector('.main-container');
const grids = document.getElementsByClassName('grid')

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
                'width: 60px; height: 60px;'
            );
            mainContainer.appendChild(nameOfGrid);

        }
    }
    return;

}

function getGridSize() {

    let size = prompt('Please enter the new grid size(limit is 100):');
    if ((size == null) || (size == '') || (isNaN(size))) {
        alert(ERROR_MESSAGE);
    } else {
        console.log(size);
        return size
    }

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
                `width: ${960 / size}px; height: ${960 / size}px;`
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





