//////////////// task 1
const block = document.querySelector(".block");


let postionX = 0;
let postionY = 0;
let postionZ = 0;
let postionD = 0;

const move = () => {
  if (postionX <= 440) {
    postionX += 16;
    block.style.bottom = `${postionX}px`;
    setTimeout(move, 200);
  } else if (postionX >= 440 && postionY <= 440) {
    postionY += 16;
    block.style.left = `${postionY}px`;
    setTimeout(move, 200);
  } else if (postionY >= 440 && postionZ <= 440) {
    postionZ += 16;
    block.style.top = `${postionZ}px`;
    setTimeout(move, 200);
  } else if (postionZ >= 440 && postionD <= 440) {
    postionD += 16;
    block.style.right = `${postionD}px`;
    setTimeout(move, 200);
  }
};

move();

//////////////// task 2
let interval = setInterval("newFunc()", 1000);
let counter = 0;

function newFunc() {
  counter++;
  console.log("Количество секунд - " + counter);
  if (counter === 60) clearInterval(interval);
}