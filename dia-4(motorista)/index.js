let nome = prompt("Insira seu nome");
let idade = parseInt(prompt("Insira sua idade"));
const habilitacao = prompt("Possui carta de motorista? (sim ou não)");
const possuiCarro = prompt("Possui carro? (sim ou não)");

if (idade < 18 || habilitacao === "não") {
    console.log(nome + ", você não pode dirigir");
} else if (idade >= 18 && habilitacao === "sim" && possuiCarro === "não") {
    console.log(nome + ", você pode dirigir mas não tem um carro");
} else if (idade >= 18 && habilitacao === "sim" && possuiCarro === "sim") {
    console.log(nome + ", você será o motorista!");
}