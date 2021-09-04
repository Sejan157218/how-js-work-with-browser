function set(){
    console.log(4);
}
console.log(1);
console.log(2);
console.log(3);
//call funtion settimeout
setTimeout(set,5000);

// set function
setTimeout(function(){
    console.log(6);
},3000)

// arrow function
setTimeout(()=>{
    console.log(7);
},2000)
console.log(5);