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