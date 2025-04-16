//Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = pi* Raio * Altura
let raio = Number(prompt("Qual o valor do raio (em cm)?"))
let altura = Number(prompt("Qual o valor da altura (em cm)?"))
let volume = 3.14 * (raio * raio) * altura
document.write(` O volume da lata é ${volume.toFixed(2)}`)