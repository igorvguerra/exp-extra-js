
// 1
alert("Hello World")

//2

let numberOne = 4
let numberTwo = 60
let sum = (numberOne + numberTwo)

alert(`A soma do número ${numberOne} com o número ${numberTwo} é: ${sum}`)

//3

let news = "Today's news"

if (typeof news == Number){
    alert(`${news} é um número!`)
}else {
    alert(`${news} não é um número!`)
}

//4

let wowMoma = 6743

if (typeof wowMoma == String){
    alert(`${wowMoma} é uma String!`)
}else {
    alert(`${wowMoma} não é uma String!`)
}

//5

let isIt = true

if (isIt == true){
    alert(`${isIt} é um Booleano!`)
}else {
    alert(`${isIt} não é um Booleano!`)
} 

//6

let numberThree = 399
let numberFour = 83
let sub = (numberThree - numberFour)

alert(`A subtração do número ${numberThree} com o número ${numberFour} é: ${sub}`)


//7

let numberFive = 399
let numberSix = 83
let mult = (numberFive * numberSix)

alert(`A multiplicação do número ${numberFive} com o número ${numberSix} é: ${mult}`)

//8

let numberSeven = 399
let numberEight = 83
let div = (numberSeven / numberEight)

alert(`A divisão do número ${numberSeven} com o número ${numberEight} é: ${div.toFixed(2)}`)

//9

let oddOrEven = 800
if (oddOrEven % 2 == 0) {
    alert(`${oddOrEven} é um número par.`)
}else {
    alert(`${oddOrEven} é um número ímpar.`)
}

//10

let oddOrEvenAgain = 3
if (oddOrEvenAgain % 2 == 0) {
    alert(`${oddOrEvenAgain} é um número par.`)
}else {
    alert(`${oddOrEvenAgain} é um número ímpar.`)
}
