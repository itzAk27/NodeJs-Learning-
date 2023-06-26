
const biodata = {

    name : "Akhtar",
    roll_no : 09,
    age : 21,
    Education : "BE",
    city : "Kalyan",
    pincode : 421306

};

const jsonData = JSON.stringify(biodata);

const fs = require('fs');

// fs.writeFile('jsondata.json',jsonData, (error) => 
// {
//     if(error)
//      return;
//      else
//      console.log("writeFile Successfully Execute");

// })

fs.readFile('jsondata.JSON','utf-8',(err,data) => {
    console.log("readFile Successfully Execute");
    console.log(data);

    const orgData = JSON.parse(jsonData);

    console.log(orgData);
}
);
