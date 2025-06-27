const grid = document.querySelector(".grid-container");
const squareDivs = document.querySelectorAll(".grid-squares");

const btn = document.querySelector("button");

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
}

function resetGrid() {
  // const squareDivs = document.querySelectorAll(".grid-squares");
  if (squareDivs.length) {
    squareDivs.forEach((square) => square.remove());
  }
  // squareDivs.forEach((square) => square.remove());
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

btn.addEventListener("click", () => {
  const input = Number(prompt("Enter a num between 1-100"));
  if (Number.isInteger(input) && input >= 1 && input <= 100) createGrid(input);
  else alert("Not a valid number");
});

// grid.addEventListener("mouseenter", () => {
//   // squareDivs.forEach((square) => (square.style.backgroundColor = "black"));
//   squareDivs.forEach((square) =>
//     square.setAttribute("style", "background: black;")
//   );
// });

// squareDivs.forEach((square) => {
//   square.addEventListener("mouseenter", (e) => {
//     // console.log(e.target);
//     // square.style.background = "black";/
//     e.target.style["background-color"] = "black";
//   });
// });

// grid.addEventListener("mouseover", (e) => {
//   e.target.style.background = "black";
// });

grid.addEventListener("mouseover", (e) => {
  e.target.style.background = "black";
});
