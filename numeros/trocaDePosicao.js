//Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados
let a = prompt("Qual o primeiro numero? ")
let b = prompt("Qual o segundo numero? ")
let aa = a
    a = b
    b = aa
    alert("Como  trocamos os valores de lugar agora o primeiro numero será " + a + " e o segundo será "+ b)