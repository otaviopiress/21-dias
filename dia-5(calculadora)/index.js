let numUm = parseInt(prompt("Insira um número"))
let numDois = parseInt(prompt("Insira mais um número"))
let opcao = prompt("Escolha a operação que deseja realizar: (+ , - , / , *)")
switch (opcao) {
    case "*":
        console.log(numUm + " * " + numDois + " = " + (numUm * numDois))
        break;
    case "/":
        console.log(numUm + " / " + numDois + " = " + (numUm / numDois))
        break; 
    case "-":
        console.log(numUm + " - " + numDois + " = " + (numUm - numDois))
        break;
    case "+":
        console.log(numUm + " + " + numDois + " = " + (numUm + numDois))
        break;  
    default:
        console.log("Opção inválida")
        break;
}