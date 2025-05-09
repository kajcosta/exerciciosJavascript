//Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. 
let n = Number(prompt("Qual o numero?"))
if (n < 0) {
        n = n* -1
alert("O numero transformado em positivo é " + n)
        }
else{
alert("O numero " + n + " já é positivo")
      }
