//Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.
let dolar = Number(prompt("Qual o valor em dolar?"))
let real = dolar *5.65
alert (dolar + " dolares em real é " + real.toPrecision(3))
