const container = document.querySelector('.container');
const newBtn = document.querySelector('.newBtn');


window.addEventListener('load', () => {
  for (let i=1; i<= 256; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('.blocks');
    container.appendChild(blocks);
    blocks.style.width = '6.25%';
    blocks.addEventListener("mouseover", () => {
      blocks.style.backgroundColor = 'black';
    });
  }
});

function resetCanvas () {
  const reset = container.querySelectorAll('div');
  console.log(reset.length);
  let i = reset.length;

  while (i>0){
    container.removeChild(container.lastChild);
    i--
  }
}

newBtn.addEventListener('click', () => {

  resetCanvas();

  let numOfBlocks = prompt('Type in the number of pixles you want to appear on the grid. The grid accepts up to 100 pixles. Example: "16"; the gird will be 16x16 pixles');

  if (numOfBlocks > 0 && numOfBlocks < 101) {
    let getWidth = 100/numOfBlocks; //sets width percentage
    let blockGrid = numOfBlocks*numOfBlocks; //sets grid

    //creates grid
    for (let i=1; i<= blockGrid; i++) {
      const blocks = document.createElement('div');
      blocks.classList.add('.blocks');
      container.appendChild(blocks);
      blocks.style.width = `${getWidth}%`;
      blocks.addEventListener("mouseover", () => {
        blocks.style.backgroundColor = 'black';
      });
    }//for loop
  }//if statment

  else {
    alert('You need to enter a number greater than 0 and less than or equal to 100.')
  }

});
