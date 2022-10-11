//EXERCISE 1 PAGE 1-9 - PRINT ADDRESS Object AKA label_maker.js
function
printContact(address){
    console.log(address.name);
    console.log(address.address);
    console.log(address.city + ",", address.state, address.zip);
}
let myInfo = {
    name: "Chad Jackson",
    address: "456 Rayman St",
    city: "clarkston",
    state: "GA",
    zip: "30021"
};

printContact(myInfo);
