// 1 //
alert("Hello World!")

// 2 //
alert("Vamos realizar a soma de dois números: ")
let number1 = prompt("Digite um número:")
let number2 = prompt("Digite outro número:")

let result = Number(number1) + Number(number2)
alert("A soma dos dois números é: " + result + ".")

// 3 //
alert("Agora vamos verificar se o valor digitado é um número!")
let userInput = prompt("Entre com algum valor: ")

if (!isNaN(userInput)) {
  alert("O valor digitado é um número")

} else {
  alert("O valor digitado não é um número")
}

// 4 //
alert("Agora vamos verificar se o valor digitado é uma string!")
let valor = prompt("Entre com algum valor: ")

if (typeof valor === 'string') {
  alert("O valor digitado é uma string")

} else {
  alert("O valor digitado não é uma string")

}

// 5 //
let input = prompt("Digite algo que vamos verificar se o valor de entrada é booleano:");
let booleanValue = JSON.parse(input.toLowerCase());

if (booleanValue === true || booleanValue === false) {
    alert("É um booleano!");
} else {
    alert("Não é um booleano!");
}

// 6, 7, 8 //
alert("Agora vamos subtrair, multiplicar e dividir dois números!")

let numberr = prompt("Digite um número: ")
let numberrr = prompt("Digite outro número: ")

sub = Number(numberr) - Number(numberrr)
mult = Number(numberr) * Number(numberrr)
div = Number(numberr) / Number(numberrr)

alert("A subtração entre os dois números é: " + sub)
alert("A multiplicação entre os dois números é: " + mult)
alert("A divisão entre os dois números é: " + div)

// 9, 10 //
alert("Agora será verificado e apresentado se o número digitado é um número par ou ímpar!")
let numero = prompt("Digite um número: ") 

if (numero % 2 === 0) {
  alert("O número digitado é par")
} else {
  alert("O número digitado é ímpar")
}

