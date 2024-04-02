let nums = document.querySelector(".nums");
let numArr = [
  "O",
  "M",
  "K",
  "A",
  "R",
  "D",
  "A",
  "S",
  "W",
  "A",
  "D",
  "K",
  "A",
  "R",
];

async function genRandNum(char) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        nums.innerText = char;
        resolve();
      }, 1000);
    });
  }
  
async function randNum() {
  for(char of numArr){
    await genRandNum(char);
  }
}
randNum();
