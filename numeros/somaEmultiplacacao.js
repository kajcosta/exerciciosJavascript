//Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.
let a = Number(prompt("Qual o valor de a?"))
let b = Number(prompt("Qual o valor de b?"))
let c = Number(prompt("Qual o valor de c?"))
let d = Number(prompt("Qual o valor de d?"))

let ab = a + b
let ac = a + c
let ad = a + d
let bc = b + c
let bd = b + d
let cd = c + d

alert("Soma:\n" +
    a + " + " + b + " = " + ab + "\n" +
    a + " + " + c + " = " + ac + "\n" +
    a + " + " + d + " = " + ad + "\n" +
    b + " + " + c + " = " + bc + "\n" +
    b + " + " + d + " = " + bd + "\n" +
    c + " + " + d + " = " + cd + "\n"
)

ab = a * b
ac = a * c
ad = a * d
bc = b * c
bd = b * d
cd = c * d

alert("Multiplicação:\n" +
    a + " * " + b + " = " + ab + "\n" +
    a + " * " + c + " = " + ac + "\n" +
    a + " * " + d + " = " + ad + "\n" +
    b + " * " + c + " = " + bc + "\n" +
    b + " * " + d + " = " + bd + "\n" +
    c + " * " + d + " = " + cd + "\n"
)
