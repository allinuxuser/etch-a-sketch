const container = document.querySelector("#container");
const body = document.querySelector("body");
let grids = 0;
let gridLineContainer = 0
let gridNumber = 16;

const button = document.createElement("button");
button.textContent = "Click here to change grid size!"
container.appendChild(button);

function createGrid() {
  let count = 0;
  let count2 = 0;
  while (count != gridNumber) {
    gridLineContainer = document.createElement("div");
    gridLineContainer.classList.add("grid-line-container");
    gridLineContainer.style.cssText = "display: flex;"
    container.appendChild(gridLineContainer);
    count++;
    count2 = 0;
    while (count2 != gridNumber) {
      grids = document.createElement("div");
      grids.classList.add("grid");
      grids.style.cssText = "height: 50px; width: 50px; border: 2px solid black;";
      gridLineContainer.appendChild(grids);
      count2++
      }
  }
}

function mouseoverEtch() {
  griddy = document.querySelectorAll(".grid")
  griddy.forEach(grid => {
    grid.addEventListener('mouseover', event => {
      event.target.style.backgroundColor = "black";
    });
  });
}

createGrid()

button.addEventListener("click", () => {
  container.innerHTML = ''
  let prompter = prompt("enter num here");
  gridNumber = prompter;
  console.log(gridNumber)
  count = 0;
  container.appendChild(button);
  createGrid()
  mouseoverEtch()
});


mouseoverEtch()
