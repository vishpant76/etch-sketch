const grid = document.querySelector(".grid-container");
// const squareDivs = document.querySelectorAll(".grid-squares");
// const gridSide = grid.offsetWidth;
const btn = document.querySelector("button");

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

function createGrid(squaresPerRow) {
  const gridSide = grid.offsetWidth;
  resetGrid();
  for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
    const squareDiv = document.createElement("div");
    const sideLength = gridSide / squaresPerRow;
    squareDiv.style.width = `${sideLength}px`;
    squareDiv.style.height = `${sideLength}px`;
    squareDiv.classList.add("grid-squares");
    grid.appendChild(squareDiv);
  }
  // enableHovering();
}

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function enableHovering() {
  grid.addEventListener("mouseover", (e) => {
    const bgCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    // e.target.style.background = "black";
    e.target.style.background = bgCol;
  });
}

btn.addEventListener("click", () => {
  const input = Number(prompt("Enter a whole number between 1-100"));
  if (Number.isInteger(input) && input >= 1 && input <= 100) createGrid(input);
  else alert("Not a valid number");
});

enableHovering();
