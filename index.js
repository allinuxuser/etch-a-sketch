const container = document.querySelector("#container");
const body = document.querySelector("body");
let grids = 0;
let gridLineContainer = 0


for (let i = 0; i <= 16; i++) {
  gridLineContainer = document.createElement("div");
  gridLineContainer.classList.add("grid-line-container");
  gridLineContainer.style.cssText = "display: flex;"
  container.appendChild(gridLineContainer);

  for (let x = 0; x <= 16; x++) {
    grids = document.createElement("div");
    grids.classList.add("grid");
    grids.style.cssText = "height: 50px; width: 50px; border: 2px solid black;";
    gridLineContainer.appendChild(grids);
    }
 }

griddy = document.querySelectorAll(".grid")



griddy.forEach(grid => {
  grid.addEventListener('click', event => {
    event.target.style.backgroundColor = "black";
  });
});

