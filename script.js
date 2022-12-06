const container = document.querySelector(".container");
fragment = document.createDocumentFragment();

for(let i=1;i<=16;i++){
    for(let j=1;j<=16;j++){
        let cell = document.createElement("div");
        cell.className = "cell";
        fragment.appendChild(cell);
    }
}

container.appendChild(fragment);
let boxes = container.querySelectorAll(".cell")
boxes.forEach((box)=>{
box.addEventListener('mouseover', function (e) {
    let randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    e.target.style.background = randomColor;
  });
});