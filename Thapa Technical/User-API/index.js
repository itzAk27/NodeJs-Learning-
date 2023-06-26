const http = require('http');

const fs = require('fs');


const data = fs.readFileSync(`${__dirname}/userApi.json`,'utf-8');
const objData = JSON.parse(data); 


const server = http.createServer((req,res) => {

    if(req.url == '/'){
        res.end("Home Page");
    }
    else if(req.url == '/About')
    {
        res.end("About Page");
    }
    else if(req.url == '/Contact')
    {
        res.end("Contact Page");
    } 
    else if(req.url == '/userApi')
    {
        res.writeHead(200,{"Content-type" : "application/json"});
        res.end(objData.Employees[2].userId);
    }
    else {
        res.end("<h1>Error 404...</h1>")
    }
    
})

server.listen(7000, "127.0.0.1" ,() => {
    console.log("Server is Listening at Port 7000 ...");
})