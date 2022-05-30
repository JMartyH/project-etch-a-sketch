function initialGrid() {

    const mainContainer = document.querySelector('.main-container');

    //create a grid layout 16x16
    for (let j = 1; j <= 16; j++) {
        for (let i = 1; i <= 16; i++) {
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
    let msg = 'Please enter a valid number';
    let size = prompt('Please enter the new grid size(limit is 100):');
    if ((size == null) || (size == '') || (isNaN(size))) {
        alert(msg);
    } else {
        console.log(size);
        return size
    }

}

function clearGrid() {

    const mainContainer = document.querySelector('.main-container');
    while (mainContainer.firstElementChild) {
        mainContainer.firstElementChild.remove();
    }
}


function drawGrid(size) {

    const mainContainer = document.querySelector('.main-container');

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
    e.target.classList.add('color');
}

function addListenerToElement() {
    const grids = document.getElementsByClassName('grid')

    for (let i = 0; i < grids.length; i++) {
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





