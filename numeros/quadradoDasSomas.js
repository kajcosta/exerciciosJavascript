//Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.
let a = Number(prompt("Qual o valor de a?"))
let b = Number(prompt("Qual o valor de b?")) 
let c = Number(prompt("Qual o valor de c?"))
let quadradoSomas = (a + b + c) * (a + b + c)
alert("O quadrado das somas é: " + quadradoSomas)