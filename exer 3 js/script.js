const veiculo1 = prompt("insira o nome do primeiro carro");
const velocidade1 = prompt("insira a velocidade do primeiro carro");

const veiculo2 = prompt("insira o nome do segundo carro");
const velocidade2 = prompt("insira a velocidade do segundo carro");

if (velocidade1 < velocidade2) {
  alert("O primeiro Carro e mais rapido");
} else if (velocidade1 > velocidade2) {
  alert("o segundo carro e mais rapido");
} else if (velocidade1 === velocidade2) {
  alert("a velocidade dos carros sao iguais");
}
