const EventEmitter = require('events');

const event = new EventEmitter();

// event.on("SayMyName", () => {
//     console.log("Akhtar Khan");
// });

// event.on("SayMyName", () => {
//     console.log("Khan Akhtar Moinuddin");
// });

// event.on("SayMyName", () => {
//     console.log("Moinuddin Khan");
// })

// event.emit("SayMyName");

event.on("checkMyPage", (statusCode,message) => {
    console.log(`Status Code is ${statusCode} and Contains a message : ${message}`);
})

event.emit("checkMyPage",200,"ok");