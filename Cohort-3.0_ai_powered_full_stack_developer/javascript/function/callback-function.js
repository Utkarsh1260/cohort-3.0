
function driveCycle(callback){ /* here the parameter callback receives a function reference driveCar function */
    console.log("I am Driving Cycle");
    callback() /* callback called actually means that driveCar function is being called*/
    
}


function driveCar(){
    console.log("I am Driving Car");
    
}


driveCycle(driveCar) /*  here I sent driveCar as callback function to driveCycle function and driveCar will be recieved by driveCycle but driveCar will be executed later */