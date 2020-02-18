let name = prompt("Olá Qual o seu nome?")
let saudacao = document.getElementById("welcome")
saudacao.innerHTML = "Seja Bem vindo(a) " + name +"!"
let questaoInicio = prompt("Gostaria de continuar?  digite o numero da sua resposta\n1: sim\n 2: não")

if(questaoInicio == 1) {
 alert("Pode seguir em frente!")
}else{
    alert("Seu teste foi");
}


let questao1 = prompt("Qual tag nós usamos para definir uma imagem html \n1:<img> \n2: <src> \n3:<href> \n4:<alt>" )

let respostaCorreta1 =  document.getElementById("correct1")

let respostaIncorreta1 = document.getElementById("wrong1")

if(questao1 == 1) {
    correct1.innerHTML = "Resposta Correta 1"
}else{
    wrong1.innerHTML = "Resposta  incorreta 1"
}


let questao2 = prompt("Qual a cor do cavalo Branco de Napoleão? \n 1: branco \n 2: preto \n 3: Marrom")

let respostaCorreta2 =  document.getElementById("correct2")
let respostaIncorreta2 = document.getElementById("wrong2")

if(questao2 == 2) {
    correct2.innerHTML = "Resposta Correta 2"
}else{
    wrong2.innerHTML = "Resposta incorreta 2"
}


let questao3 = prompt("Css é acrônimo de Cascading Style Sheets \n 1:Verdadeiro \n2:Falso")

let respostaCorreta3 =  document.getElementById("correct3")
let respostaIncorreta3 = document.getElementById("wrong3")

if(questao3 == 1) {
    correct3.innerHTML = "Resposta Correta 3"
}else{
    wrong3.innerHTML = "Resposta incorreta 3"
}