
const http = require('http');

// const server = http.createServer( (req,res) => {
//     res.write('Welcome to the home page');
//     res.end();
// }
// );

const server = http.createServer( (req,res) => {

    if(req.url === '/')
    {
        res.end("Home Page");
    }

    else if(req.url === '//')
    {
        res.end("Welcome to the About page");
    }

    else 
    {
        res.end(`
        <h1>Opps Error</h1>
        <p>Page is not available</p>
        <a href = "/">Back Home </a>
        `);
    }
    
}
);

server.listen(7070);

console.log("Hello World");