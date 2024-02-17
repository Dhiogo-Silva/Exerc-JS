const nomeJogador1 = prompt("Insira o nome do jogador 1 !");
const poder1 = parseFloat(prompt("insira a quantidade de poder:"));

const nomeJogador2 = prompt("insira o nome do jogador 2");
let pontosDeVida = parseFloat(prompt("insira a quantidade de pontos de vida:"));
const defesa = parseFloat(prompt("insira o poder de defesa:"));
const escudo = prompt("ele possui um escudo (sim/nao)");

let danoCausado = 0;

if (poder1 > defesa && escudo === "Nao") {
  danoCausado = poder1 - defesa;
} else if (poder1 > defesa && escudo === "sim") {
  danoCausado = (poder1 - defesa) / 2;
}
pontosDeVida -= danoCausado;

alert(
  nomeJogador1 + " causou " + danoCausado + " pontos de dano em " + nomeJogador2
);
alert(
  nomeJogador1 +
    "\nPoder de ataque: " +
    poder1 +
    "\n\n" +
    nomeJogador2 +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    defesa +
    "\nPossui escudo: " +
    escudo
);
