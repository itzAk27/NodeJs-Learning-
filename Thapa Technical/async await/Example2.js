
// Remoce "async" then run the program. You will get error.
async function Akhtar() {

    let KalyanWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("27 Degree");
        },1000)
    });
    
    
    let UlhasnagarWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("21 Degree");
        },2000);
    });

    let KalyanW = await KalyanWeather
    let UlhasW = await UlhasnagarWeather;

    return [KalyanW,UlhasW];

}

console.log("Welcome to the Weather Station")

let a = Akhtar();

console.log(a);