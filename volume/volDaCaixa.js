// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
//VOLUME ← COMPRIMENTO * LARGURA * ALTURA.
let comprimento = Number(prompt("Qual o comprimento da caixa? "))
let largura = Number(prompt("Qual a largura da caixa?"))
let altura = Number(prompt("Qual a altura?"))
let volume = comprimento * largura * altura
alert ("O volume da caixa é " + volume.toPrecision(3))