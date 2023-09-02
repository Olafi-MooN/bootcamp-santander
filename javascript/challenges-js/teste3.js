const print = (value) => console.log(value);
const data = [1000, 200];
const gets = () => data.shift();

let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
const saldoAtual = saldoTotal - valorSaque;

if (Math.sign(saldoAtual) === -1) {
  print(`Saldo insuficiente. Saque nao realizado!`)
}
else {
  print(`Saque realizado com sucesso. Novo saldo: ${saldoAtual}`)
}