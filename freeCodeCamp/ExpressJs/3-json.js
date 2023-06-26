const express = require('express')
const app = express()
const {products} = require('./data')
const {people} = require('./data')

//Middleware

const logger = (req,res,next) => {
    // console.log("Logger is there ")
    if(!req.query.age)
    {
        res.send("Please Provide the age")
    }
    else{
        next();
    }
    // console.log(!req.query.age);
    
    } 
    
    app.use(logger);

app.get('/', (req,res) => {
    // console.log("Welcome to the Home Page")
    // res.send("Welcome to the Home Page")
    // res.send('<h1>Home Page</h1><a href="/api/product">Product</a><br><a href = "/api/people">people</a>')
    // console.log(`The age is ${req.query.age}`)
    res.send(`The age is ${req.query.age}`)
})

// app.get('/api/product',(req,res) => {
//     // res.json(products)
//     const newProduct = products.map((product) => {
//         const {id,image,price} = product;
//         return {id,price}
//         // console.log(product);
//     })

//     res.json(newProduct);
// })

app.get('/user',(req,res) => {
    // let details = req.query;
    // console.log(details);
    res.send("Welcome to the User Page");
})



app.listen(5000, () => {
    console.log("Server is Listening...")
})