//EXERCISE 1 PAGE 1-9 - PRINT ADDRESS Object AKA product_code.js

function parsePartCode(text){
    const supplier = text.slice(0, text.indexOf(":"));
    const number = text.slice(0, text.indexOf(":")+1, text.indexOf("-"));
    const size = text.slice(text.indexOf("-")+1)
    return {
        supplierCode: supplier,
        productNumber: number,
        size: size
    }
}
//TEST
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + 
" Product Number: " + part1.productNumber + 
" Size: " + part1.size);