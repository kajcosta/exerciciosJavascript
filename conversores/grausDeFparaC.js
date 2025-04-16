// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C ← (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let f = Number(prompt("Qual a temperatura em fahrenheit?"))
let c = (f-32)/1.8
document.write(`A temperatura em Celcius é ${c.toFixed(2)}`)