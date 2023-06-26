const express = require('express')
const app = express()

app.use(express.static('./Public'))

const path = require('path')

// console.log(__dirname);

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./Html/index.html'))
})

app.listen(5000, () => {
    console.log("Hello");
})



//Working of path and resolve method
// const path = require('path')
// console.log(__dirname); //E:\NodeJs\freeCodeCamp\ExpressJs

// path1 = path.resolve("Basics/advanced","Save.txt"); 
// console.log(path1); //E:\NodeJs\freeCodeCamp\ExpressJs\Basics\advanced\Save.txt

// path2 = path.resolve("Admin/user"); //E:\NodeJs\freeCodeCamp\ExpressJs\Admin\user
// path2 = path.resolve("/Admin/user");//E:\Admin\user because of '/' before admin
// console.log(path2);