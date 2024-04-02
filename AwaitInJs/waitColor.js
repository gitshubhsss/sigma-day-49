let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum=Math.floor(Math.random()*10);
            if(randNum>4){
                reject("error occure to print the next color");
                console.log(randNum);
            }
            h1.style.color=color
            console.log(`heading is in ${color}`);
            resolve();
        }, delay);
    })
}

async function delayTime(){
try{
  await  changeColor("red",1000);
  await  changeColor("green",1000);
  await  changeColor("orange",1000);
}catch(err){
    console.log(err);
    console.log("error occured");
}

  let a=5;
  let newnum=a+5;
  console.log(`${a} new num = ${newnum}`);
}

delayTime();