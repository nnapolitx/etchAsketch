const container = document.querySelector('.container');
const grid16 = document.querySelector('.b16');

grid16.addEventListener('click', grid16x16);

function grid16x16() {
  
  for (let i=0; i<= 15; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('.blocks');
    container.appendChild(blocks);
    
  }

}