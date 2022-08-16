const container = document.querySelector('.container');
const grid16 = document.querySelector('.b16');
const newBtn = document.querySelector('.newBtn');

grid16.addEventListener('click', grid16x16);

function grid16x16() {
  
  for (let i=1; i<= 256; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('.blocks');
    container.appendChild(blocks);
    blocks.textContent = '.'
    blocks.style.width = '6.25%';
    blocks.addEventListener("mouseover", () => {
      blocks.style.backgroundColor = 'black';
    });
  }
}

newBtn.addEventListener('click', () => {

  let numOfBlocks = prompt('Type in the number of pixles you want to appear on the grid. The grid accepts up to 100 pixles. Example: "16"; the gird will be 16x16 pixles');

  if (numOfBlocks > 0 && numOfBlocks < 101) {
    let getWidth = 100/numOfBlocks; //sets width percentage
    console.log(getWidth);
    let blockGrid = numOfBlocks*numOfBlocks;
    console.log(blockGrid);
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
