const container = document.querySelector("#container");
const body = document.querySelector("body");

for (let i = 0; i <= 16; i++) {
  const gridLineContainer = document.createElement("div");
  gridLineContainer.classList.add("grid-line-container");
  gridLineContainer.style.cssText = "display: flex;"
  container.appendChild(gridLineContainer);

  for (let x = 0; x <= 16; x++) {
    const grids = document.createElement("div");
    grids.classList.add("grid");
    grids.style.cssText = "height: 50px; width: 50px; border: 2px solid black;";
    gridLineContainer.appendChild(grids);
    }
 }


