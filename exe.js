const readline = require("readline-sync")
const maxLength = 8

function verifyNumber(input){
    let validChars = ["1", "0"]

    if(input.length > maxLength){
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
    let input = readline.question(`Type here a binary number to convert: `)

    while(!verifyNumber(input)){
        input = readline.question(`You should type a number up to ${maxLength} chars and between 0's and 1's.\nTry again: `)
    }

    return input
}

function bin2dec(input){
    let x = input.split('').reverse().join('')
    let sum = 0

    for(let i = 0; i < input.length; i++){
        let calculate = Math.pow(2, i) * parseInt(x[i])
        sum += calculate
    }

    return sum
}

let action = getUserInput(maxLength)
let operacao = bin2dec(action)
console.log(`The binary number ${action} is equal to ${operacao} in decimal.`)
