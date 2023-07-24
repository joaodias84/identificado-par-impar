// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return numero + " é um número par.";
  } else {
    return numero + " é um número ímpar.";
  }
}

// Loop para receber múltiplos números do usuário
var continuar = true;
while (continuar) {
  var numero = parseInt(prompt("Digite um número):"));

  if (isNaN(numero)) {
    continuar = false;
    console.log("Saindo da calculadora.");
  } else {
    console.log(verificarParOuImpar(numero));
  }
}

