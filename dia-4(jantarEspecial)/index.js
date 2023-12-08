const fome = prompt("Olá, você está com fome? (sim ou não)");
const dinheiro = prompt("Você tem dinheiro? (sim ou não)");
const statusRest = prompt("Seu restaurante preferido está aberto? (sim ou não)");

if (fome === "não" || dinheiro === "não") {
    console.log("Hoje o jantar será em casa!");
} else if (fome === "sim" && dinheiro === "sim" && statusRest === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
} else { (fome === "sim" && dinheiro === "sim" && statusRest === "não") 
    console.log("Peça um delivery!");
}