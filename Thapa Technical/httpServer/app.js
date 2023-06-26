
const http = require('http');

const server = http.createServer( (req,res) => {
    
    if(req.url === '/')
    {
        res.end("Home Page");
    }  
    else if(req.url === '/Contact')
    {
        res.end("Contact Page");
    }
    else if(req.url === '/About')
    {
        res.end("About Page");
    }
    else
    {
        res.end("<h1>404 Error</h1>");
    }
}
)

server.listen(4000,"127.0.0.1", () => {
    console.log("Server is listening to the port 4000");
});