
console.log("first");

setTimeout(() => {
    console.log("second, It is Executing Last (Because setTimeout is an Asynchronous Ones.)");
},5000);

console.log("Third");