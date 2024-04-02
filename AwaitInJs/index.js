let nums = document.querySelector(".nums");
let name= prompt("Enter your name");
let numArr=name.split('');
console.log(numArr);
async function genRandNum(char,randColor) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        nums.innerText = char;
        nums.style.color=randColor();
        console.log(randColor);
        resolve();
      }, 500);
    });
  }
  
async function randNum() {
  for(char of numArr){
    await genRandNum(char,randColor);
  }
 
}
randNum();
let colors=["red","blue","orange","green","purple","pink","skyblue","darkgreen","white"]
function randColor(){
  let idx=Math.floor(Math.random()*4);
  let randColor=colors[idx];
  return randColor;
}