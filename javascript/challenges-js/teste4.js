const print = (value) => console.log(value);
const data = [5000, 0.08, 5];
const gets = () => data.shift();

const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
//A = P(1 + i) ^ t
valorFinal = valorInicial * (1 + taxaJuros) ** periodo

print(`Valor final do investimento: R$ ${valorFinal.toFixed(2)}`);