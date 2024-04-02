
async function hellow() {
    throw "Weak connection"
    return "hellow";
}
hellow().then((result)=>{
    console.log("request fullfileed",result);
})
.catch((err)=>{
    console.log("result rejected",err);
})

//we can create the arrow function also 
let demo =async ()=>{
    return 5;
}

demo().then((result)=>{
    console.log("result is ",result);
})