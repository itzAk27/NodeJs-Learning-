const fs = require('fs');

fs.mkdir('Thapa', (err,data) => {
    console.log(data);
});

// fs.writeFile('Thapa/bio.txt', "Name : Akhtar");

// fs.appendFileSync('Thapa/bio.txt',"Education : BE");

// const read = fs.readFileSync('Thapa/mybio.txt', "utf8" );
// console.log(read);

// fs.renameSync('Thapa/bio.txt','Thapa/mybio.txt');

// fs.unlinkSync('Thapa/mybio.txt');


