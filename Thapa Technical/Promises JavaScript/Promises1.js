
const pobj1 = new Promise((resolve,reject) => {

    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        reject("Error During Communication");
    },2000);

});


const getBiodata = (indexdata) => {
    return new Promise((resolve,reject) => {
        setTimeout( (indexdata) => {
            let biodata = {
                names : "Akhtar",
                age : 21 
            }
            resolve(`Rollno :  ${indexdata}. Name : ${biodata.names}. Age : ${biodata.age} `);
        } , 2000 , indexdata)
    });
};


pobj1.then((rollno) => {
    console.log(rollno);
    return getBiodata(rollno[1]);
    }).then((kuch_bhi) => {
        console.log(kuch_bhi);
}).catch((Error) => {
    console.log(Error);
})