//EXERCISE 3 / SLIDE 30 / PAGE 2-16
let lunch = [ //Array/List []
    { item: "Steak Fajitas", price: 9.95 }, // Object/Dict {}
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];
//BONUS - HOW TO ADD ONE MORE ITEM AFTER ARRAY IS DECLARED
lunch.push({ item: "Burger", price: 1.23 }); // PUSH IN 4th ORDER

function getCost(order) { //DEALS WITH A SINGLE ORDER FROM THE LUNCH LIST
    let cost = order.price; //ACCESS THE PRICE PROPERTY OF THE ORDER OBJECT
    const tax = 0.08;
    const tip = 0.18;
    let totalCost = (cost + (cost * tax)) + (cost * tip);
    console.log(`ORDER: ${order.item} TOTAL: \$${totalCost.toFixed(2)}`); // JS TEMPLATE STRING
}

//OLD SCHOOL FOR LOOP
for (let i = 0; i < lunch.length; i++) {
    let order = lunch[i];
    getCost(order);
    //getCost(lunch[i]) //condensed
}

//SIMPLE NEW SCHOOL WAY
//lunch.forEach(getCost);

// getCost(lunch[2]); // ACCESS BY NUMERIC INDEX e.g. 2 is Sweet Tea - Just one by index

/* EXPECTED OUTPUT
ORDER: Steak Fajitas TOTAL: $12.54
ORDER: Chips and Guacamole TOTAL: $6.62
ORDER: Sweet Tea TOTAL: $3.52
ORDER: Burger TOTAL: $1.55
*/