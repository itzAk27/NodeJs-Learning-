const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send("Home Page")
})

app.get('/about', (req,res) => {
    res.send("About Page")
})

app.get('/contact',(req,res) => {
    res.send("Contact Page");
})

app.get('/login',(req,res) => {
    res.status(200).send("Login Page");
})

app.all('/Ak',(req,res) => {
    res.status(404).send('<h1>Error</h1>')
})

app.listen(5000, () => {
    console.log("Hello Server from 5000");
})