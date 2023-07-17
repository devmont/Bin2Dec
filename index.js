const readline = require("readline-sync")

function verifyNumber(input){

    const validChars = ["0", "1"]

    if (input.length > 8){
        return false
    }

    for(let i = 0; i < input.length; i++){
        if(!validChars.includes(input[i])){
            return false
        }
    }

    return true
}

function getUserInput(maxLength){
    let input = readline.question("Type here the number you want to convert: ")

    while (!verifyNumber(input)){
        input = readline.question(`you shoudn´t type a number above ${maxLength} characters and the numbers must contain only 0 or 1.\nType again: `)
    }

    return input

}

function bin2dec(input){

    let x = input.split('').reverse().join('')
    let sum = 0

    for (let i = 0; i < x.length; i++){
        let calculate = Math.pow(2, i) * parseInt(x[i])
        sum += calculate
    }

    return sum
}

let input = getUserInput(8)
let operacao = bin2dec(input)

console.log(`Your result is ${operacao}`)