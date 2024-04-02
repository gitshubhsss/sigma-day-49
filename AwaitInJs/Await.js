//1)Create a async funtion

async function demo(){
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
    getNum();
}

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let radNum=Math.floor(Math.random()*10)+1;
            console.log(radNum);
            resolve();
        }, 1000);
    })
}