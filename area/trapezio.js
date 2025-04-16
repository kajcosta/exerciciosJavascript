var baseM= Number(prompt("Qual o comprimento da base maior?"))
var basem= Number(prompt("Qual o comprimento da base menor?"))
var altura= Number(prompt("Qual o comprimento da altura?"))
var  area= ((baseM+basem)*altura)/2
document.write(`A area do losangulo é ${area.toFixed(2)}`)