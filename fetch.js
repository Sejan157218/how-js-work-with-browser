function set(){
    console.log(4);
}
console.log(1);
console.log(2);
console.log(3);
// arrow function
setTimeout(()=>{
    console.log(7);
},7000);
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));
console.log(5);
console.log(6);
for (let i = 0; i < 100; i++) {
    console.log(i);
    
}
