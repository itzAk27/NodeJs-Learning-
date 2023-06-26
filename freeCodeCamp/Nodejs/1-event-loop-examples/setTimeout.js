
console.log("first");

//It waits 2 sec for executing the code.
setTimeout(() => {
    console.log("second, It is Executing Last (Because setTimeout is an Asynchronous Ones.)");
},2000);

console.log("Third");