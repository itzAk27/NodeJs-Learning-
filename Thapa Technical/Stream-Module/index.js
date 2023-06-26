
const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request', (req,res) => {

    //Method 1 Using fs and http modules
    // fs.readFile('input.txt', (error,data) => {
    //     if(error)
    //     {
    //         return console.error(error);
    //     }
    //     else{
    //         res.end(data);
    //     }
    // })

    //Method 2 Using Streaming Modules
//     const rstream = fs.createReadStream('input.txt');
//     rstream.on('data',(chunkData) => {
//         res.write(chunkData);
//     });
//     rstream.on('end',() => {
//     res.end();
// });
// rstream.on('error',(error) => {
//     console.log(error)
//     res.end("File is not Found");
// });

// 3rd way
const rstream = fs.createReadStream('input.txt');
rstream.pipe(res);


});



server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening at Port 8000...")
})