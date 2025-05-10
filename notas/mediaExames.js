//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. 
let n1 = Number(prompt("Qual a primeira nota?"))
let n2 = Number(prompt("Qual a segunda nota?"))
let n3 = Number(prompt("Qual a terceira nota?"))
let n4 = Number(prompt("Qual a quartaa nota?"))
let m = (n1 + n2 + n3 + n4) / 4
let exame = 0

if (m >= 7) {
    alert("Aluno aprovado! \n Média: " + m.toPrecision(2))
}
else {
    alert("Aluno em exame! \n Média: " + m.toPrecision(2))
    exame = Number(prompt("Qual a nota do exame?"))


let novaM = (m + exame) / 2

if (novaM >= 5) {
    alert("Aluno aprovado no exame! \n Nova média: " + novaM.toPrecision(2))
}
else {
    alert("Aluno reprovado! \n Nova média: " + novaM.toPrecision(2))
}
}
