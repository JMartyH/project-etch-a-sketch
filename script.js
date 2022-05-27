

function grid() {

    const mainContainer = document.querySelector('.main-container');



    if (arguments.length == 0) {
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
    } else {
        return;
        //get the input grid size then boom
    }
}

grid();