//Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o 
let real = Number(prompt("Qual o valor em real?"))
let dolar = real *5.65
alert (real + " real para dolar é " + dolar.toPrecision(3))