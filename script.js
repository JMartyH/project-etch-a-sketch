

function defaultGrid() {

    const mainContainer = document.querySelector('.main-container');

    //grid layout 16x16
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


defaultGrid();
const customGridButton = document.querySelector('.btn-container');
customGridButton.addEventListener('click', () => {
    //code for changing the grid size and removing default.
    // const grids = document.querySelector('.main-container').childNodes;
    // console.log(grids);
    // console.log(grids.length);
    // for (let j = 1; j <=grids.length; j++) {

    //     for (let i = 1; i <=grids.length; i++) {
    //         grids[i].remove();
    //     }
    // }
    // console.log(grids.length);
    // console.log(grids);
    location.reload();
});






