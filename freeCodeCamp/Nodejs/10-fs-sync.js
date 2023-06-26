// const {readFileSync,writeFileSync, appendFileSync} = require('fs');

const fs = require('fs');

// const first = readFileSync('./Content/first.txt','utf8')
// const second = readFileSync('./Content/second.txt','utf8')

// writeFileSync('./Content/result-sync.txt',`Here is the result = ${first}, ${second}`, {flag : 'a'} );
// writeFileSync('./Content/Cartoons.txt',`Cartoons = ${first}, ${second}`);


// writeFileSync('./Content/New.txt',"Hello Text Kaise ho Ap :)")

// appendFileSync('./Content/New.txt', "Ab Append Bhi Krlo boss It's Simple :(")

const buf_data = fs.readFileSync('./Content/first.txt','utf8');

console.log(buf_data)