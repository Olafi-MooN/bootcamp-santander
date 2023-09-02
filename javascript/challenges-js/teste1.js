//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

var saldoAtual = parseFloat(100);
const valorDeposito = parseFloat(10);
const valorRetirada = parseFloat(50);

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
saldoAtual = (saldoAtual + valorDeposito) - valorRetirada;

//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
console.log('Saldo atualizado na conta: 60.0')