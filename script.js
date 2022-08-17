const canvas = document.querySelector('.container');
const setCanvas = document.querySelector('.set-canvas');

//Loads a default grid of 16x16 divs
window.addEventListener('load', () => {
  for (let i=1; i<= 256; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('.blocks');
    canvas.appendChild(blocks);
    blocks.style.width = '6.25%';
    blocks.addEventListener("mouseover", () => {
      blocks.style.backgroundColor = 'black';
    });
  }
});

setCanvas.addEventListener('click', createNewGrid);

//erases the canvas so that user can input new grid
function resetCanvas () {
  const reset = canvas.querySelectorAll('div');
  let i = reset.length;

  while (i>0){
    canvas.removeChild(canvas.lastChild);
    i--
  }
}

//Creates a new grid based on user input
function createNewGrid() {
  
  resetCanvas();

  const numOfBlocks = prompt('Type in the number of pixles you want to appear on the grid. The grid accepts up to 100 pixels. For example, if you enter "16", the grid will be 16x16 pixels');

  if (numOfBlocks > 0 && numOfBlocks < 101) {
    const getWidth = 100/numOfBlocks; //sets width percentage so that divs will wrap at the appropriate amount on the x-axis.
    const blockGrid = numOfBlocks*numOfBlocks; //sets the y-axis but also gives the correct number of blocks for the area of the grid.

    //creates grid based on user input
    for (let i=1; i<= blockGrid; i++) {
      const blocks = document.createElement('div');
      blocks.classList.add('.blocks');
      canvas.appendChild(blocks);
      blocks.style.width = `${getWidth}%`;
      blocks.addEventListener("mouseover", () => {
        blocks.style.backgroundColor = 'black';
      });
    }
  }

  else {
    alert('You need to enter a number greater than 0 and less than or equal to 100.')
  }

}
