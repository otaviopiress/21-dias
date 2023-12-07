//Criando variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Recolhendo DADOS
nome = prompt("Insira seu nome: ")
idade = parseInt(prompt("Insira sua idade: "))
altura = Number(prompt("Insira sua altura: "))
peso = Number(prompt("Insira seu peso: "))

//Ano em que nasceu
let anoNasc = 0
anoNasc = 2023 - idade

//Calculando IMC
let IMC = 0
IMC = peso / (altura * altura)

//Exibindo mensagem no console
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc +
            ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + IMC + "Kg/m²");