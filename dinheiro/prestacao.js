//Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).
let valor = Number(prompt("Qual o valor da prestação? "))
let taxa = Number(prompt("Qual a taxa de juros (%)?"))
let tempo = Number(prompt("Qual o tempo de atraso (em meses)?"))
let prestacao= valor + (valor*taxa/100)*tempo
document.write(`O valor da prestação em atraso é R$ ${prestacao}`)