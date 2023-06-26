const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (Name,Num) => {
    console.log(`Name : ${Name} and Number is ${Num}`)
})

customEmitter.on('response', () => {
    console.log("Data Received phirse :)")
})

customEmitter.emit('response',"Akhtar",70);