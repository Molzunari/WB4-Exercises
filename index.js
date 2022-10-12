let kids = [ // [ DECLARE ARRAY/LIST
"Natalie", // index 0
"Brittany", // index 1 (second)
"Zachary" // length - 1
];

let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];
console.log(oldest, middle, youngest);

let last = kids[kids.length - 1];
console.log("LAST:", last)

kids.push("Karl");
kids.push("Kyle");
kids.push("Katlyn");

last = kids[ kids.length - 1];
console.log("LAST:", last)

// each time thru the loop kids[i] references a diferent
// element in the array
//OLD HARD WAY - TRADITIONAL MATHY FOR LOOP
for(let i = 0; i < kids.length; i++) { //NOTE LENGTH IS NOT 3 HARD-CODED
    console.log("INDEX KID:", i, kids[i]);
}

//NEW COOL FUNCTION WAY
function showKid(k){
    console.log("KID NAME:" , k);
}
kids.forEach(showKid);

//NEWER EVEN COOLER ANONYMOUS FUNCTION WAY
kids.forEach( k => console.log("KID NAME:" , k) );

//NEWER EVEN WACKIER AN EXISTING FUNCTION WAY
kids.forEach( console.log ); // FOR EACH PASSES value, index, wholeList

//ORDER EXAMPLE FROM 2-15
function getMealCost(orders) { //CAN RECEIVE AN ARRAY
  let sum = 0;
  let numOrders = orders.length;
  for(let i = 0; i < numOrders; i++) {
    sum += orders[i].price; //GET THE NUMERIC PRICE
  }
  return sum;
}
//TEST
let myOrder = [
  {item: "Chicken Tacos", price: 8.95},
  {item: "Guacamole", price: 2.85},
  {item: "Sweet Tea", price: 2.75}
];

let yourOrder = [
  {item: "Hamburger", price: 6.95},
  {item: "Fries", price: 2.25},
  {item: "Sweet Tea", price: 2.75},
  {item: "Fried Apple Pie", price: 4.95}
];

let mealCost = getMealCost(myOrder);
let totalWithTip = mealCost * 1.2;
console.log("My meal costs " + totalWithTip.toFixed(2));

mealCost = getMealCost(yourOrder);
totalWithTip = mealCost * 1.2;
console.log("Your meal costs " + totalWithTip.toFixed(2));

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

//getCost(lunch[2]); // ACCESS BY NUMERIC INDEX e.g. 2 is Sweet Tea - Just one by index - no loop

/* EXPECTED OUTPUT
ORDER: Steak Fajitas TOTAL: $12.54
ORDER: Chips and Guacamole TOTAL: $6.62
ORDER: Sweet Tea TOTAL: $3.52
ORDER: Burger TOTAL: $1.55
*/