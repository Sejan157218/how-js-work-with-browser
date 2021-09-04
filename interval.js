function set(){
    console.log(4);
}
console.log(1);
console.log(2);
console.log(3);
// setInterval(()=>console.log(1),10000);
let num = 0;
const numId = setInterval(()=>{
    // num++;
    // console.log(++num);
    console.log(num++);
    if(num>5){
        clearInterval(numId);
    }
},1000)
console.log(5);