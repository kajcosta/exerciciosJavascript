//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.  
let n1 = Number(prompt("Qual a primeira nota?"))
let n2 = Number(prompt("Qual a segunda nota?"))
let n3 = Number(prompt("Qual a terceira nota?"))
let n4 = Number(prompt("Qual a quartaa nota?"))
let m=(n1+n2+n3+n4)/4
    if (m>4){
      alert("Aprovado" + "\n" +  "Sua media foi " + m)
      }
    else{
        alert("Reprovado" + "\n" +  "Sua media foi " +  m)
      }
   