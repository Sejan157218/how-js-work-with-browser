
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(7777);
}, 1000);
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));
let num = 0;
const interval =setInterval(() =>{
    num++;
    console.log(num);
    if(num===10){
        clearInterval(interval);
    }
},1000) 
console.log(3);