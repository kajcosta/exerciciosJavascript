var diametroM = Number(prompt("Qual o tamanho da diagonal maior do losangulo?"))
var diametrom = Number(prompt("Qual o tamanho da diagonal menor do losangulo?"))
var area = (diametroM*diametrom)/2
document.write(`A area do losangulo é ${area.toFixed(2)}`)