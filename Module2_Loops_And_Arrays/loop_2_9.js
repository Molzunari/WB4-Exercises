/* LoopScripts from section 2-9
 
 PART1 - WHere do we start e.g. i = 0
 PART2 - Where do we stop e.g. i < 7 AKA the condition
 PART3 - how do we get there e.g. i++ 
 AKA increment by one AKA i=i+1
 
 FOR - PART1; PART2; PART3
*/
for (let i = 0; i < 7; i++) {
    console.log(i, "I LOVE YOU");
  }
  
  //WHILE WORKS SIMILARLY BUT THE PARTS ARE ON SEPARATE LINES
  let i = 0; //WHERE TO START
  while (i < 7) { //WHERE TO STOP - BOOLEAN EXPRESSION e.g is i less than seven?
    console.log(i, "I LOVE YOU");
    i++; //INCREMENT (go up by one like i=i+1)
  }
    //STOP