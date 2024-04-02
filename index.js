let h1 = document.querySelector("h1");

function changeColor(color, duration, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    nextColor();
  }, duration);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("orange", 1000, () => {
      changeColor("pink", 1000, () => {
        changeColor("yellow", 1000);
      });
    });
  });
});

let h2 = document.querySelector("h2");

function changeHeadCol(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve();
    }, delay);
  });
}

let changeCol=changeHeadCol("green", 1000)
changeCol.then(()=>{
    return changeHeadCol("purple",1000);
}).then(()=>{
    return changeHeadCol("orange",1000)
}).then(()=>{
    return changeHeadCol("yellow",1000)
})
.catch(()=>{
    console.log("error occure");
})