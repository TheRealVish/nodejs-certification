
const styled = require('chalk')
const dresult = 5
const calculated = `(${dresult} + 77)`

console.log(styled.black.bgGreen(calculated))

const funcex = (calculated) =>{
    console.log(styled.blue.bgWhite(calculated))
}
console.log(funcex())