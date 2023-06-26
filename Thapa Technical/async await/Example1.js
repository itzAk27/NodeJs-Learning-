// Promises joh data return krta hai usko fetch krne ke liye async await use krte hai
// First Understand Promise example then do this one.

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


//async means to say return the promise
// await means to wait for some time
async function getData() {
    const rollnodata = await pobj1;
    console.log(rollnodata);

    const biodatas = await getBiodata(rollnodata[1]);
    console.log(biodatas);

    return biodatas;

}

const getname = getData().then((myname) => {
    console.log(myname);
});