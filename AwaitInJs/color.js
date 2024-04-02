let h1=document.querySelector("h1")
async function changeCol(){
  await  changeHeadCol("green",1000)
  await  changeHeadCol("red",1000)
  await  changeHeadCol("orange",1000)
   
}
function changeHeadCol(color,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve();
        }, delay);
    })
}
changeCol();