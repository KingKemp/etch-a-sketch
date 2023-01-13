let countButton = document.getElementById("btn");
countButton.addEventListener('click', function(e){
countPrompt();
}
)
const page = document.querySelector(".page");
const container = document.querySelector(".container");
fragment = document.createDocumentFragment();

createGrid();
colorCells();

function countPrompt(){
    count = prompt("How many rows & columns do you want in your grid?");
    deleteGrid();
    createGrid(count);
    colorCells();
}

function colorCells(){
    let boxes = container.querySelectorAll(".cell")
    boxes.forEach((box)=>{
    box.addEventListener('mouseover', function (e) {
        let randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        e.target.style.background = randomColor;
    });
    });
}

function createGrid(count){
    if(count > 0 && count< 100){
        let side = (500/count) - 2;
        for(let i=1;i<=count;i++){
            for(let j=1;j<=count;j++){
                let cell = document.createElement("div");
                cell.className = "cell";
                cell.setAttribute('style',`width:${side}px; height:${side}px`);
                fragment.appendChild(cell);
            }
        }
    }
    else{
        let side = (500/18) - 2;
        for(let i=1;i<=18;i++){
            for(let j=1;j<=18;j++){
                let cell = document.createElement("div");
                cell.className = "cell";
                cell.setAttribute('style',`width:${side}px; height:${side}px`);
                fragment.appendChild(cell);
            }
        }
}

container.appendChild(fragment);
}

function deleteGrid(){
    let cells = container.querySelectorAll(".cell")
    cells.forEach(function (cell) {
            cell.remove();
            console.log(cells);
        })
}
