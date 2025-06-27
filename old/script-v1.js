const grid = document.querySelector(".grid-container");
const gridSide = grid.offsetWidth;
const btn = document.querySelector("button");

// const squaresPerSide = 25;

// const squaresPerRow = btn.addEventListener("click", () =>
//   // Number(prompt("Enter a number between 1-100"))
//   {
//     const input = Number(prompt("Enter a num between 1-100"));
//     if (Number.isInteger(input) && input >= 1 && input <= 100) return input;
//     else {
//       alert("Not a valid number");
//       return NaN;
//     }
//   }
// );

btn.addEventListener("click", () => {
  const input = Number(prompt("Enter a num between 1-100"));
  if (Number.isInteger(input) && input >= 1 && input <= 100) createGrid(input);
  else alert("Not a valid number");
});

function createGrid(squaresPerRow) {
  // const squareDiv = document.createElement("div");
  // const sideLength = gridSide / squaresPerSide;
  // // squareDiv.setAttribute("style", "width: ${side}")
  // squareDiv.style.width = `${sideLength}px`;
  // squareDiv.style.height = `${sideLength}px`;
  // // squareDiv.style.height = sideLength;
  // squareDiv.classList.add("grid-squares");
  // grid.appendChild(squareDiv);

  for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
    const squareDiv = document.createElement("div");
    const sideLength = gridSide / squaresPerRow;
    squareDiv.style.width = `${sideLength}px`;
    squareDiv.style.height = `${sideLength}px`;
    squareDiv.classList.add("grid-squares");
    grid.appendChild(squareDiv);
  }
}

// createGrid(squaresPerRow);
