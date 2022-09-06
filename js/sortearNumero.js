const menorValor = 1;
const maiorValor = 1000;

function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

document.querySelector('.menor_valor').innerHTML = menorValor;
document.querySelector('.maior_valor').innerHTML = maiorValor;

var numeroAleatorio = geraNumeroAleatorio();
console.log(numeroAleatorio);
