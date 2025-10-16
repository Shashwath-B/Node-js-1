const arithmetic = require('./arithmetic.js')
const fs = require('fs')

const a = 20
const b = 10

const sum = arithmetic.add(a,b)
const diff = arithmetic.sub(a,b)
const prod = arithmetic.mul(a,b)
const quotient = arithmetic.divide(a,b)

console.log('sum = ',sum)
console.log('diff = ',diff)
console.log('prod = ',prod)
console.log('quotient = ',quotient)

const result = `sum = ${sum}, diff = ${diff}, prod = ${prod}, quotient = ${quotient}`

fs.writeFile('result.txt', result, (err) => {
    if(err) {
        console.log("Error while writing to the file");
    } else {
        console.log("Successfully written to the file");
    }
})

fs.readFile('result.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('Error while reading the file');
    } else {
        console.log('Successfully read the file');
        console.log(data);
    }
})