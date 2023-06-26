const http = require('http');

const server = http.createServer((req,res) => {
    console.log("request Event")
    res.end("Hello World");
});

//First this will execute 
server.listen(8000,() => {
    console.log("Server is listening at port 8000");
})