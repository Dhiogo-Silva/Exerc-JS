const nome = prompt("Insira seu nome:");

let cidade = "";
let quantasCidades = 0;

let visita = prompt("voce ja visitou alguma cidade (sim/nao)");

while (visita === "sim") {
  let cidades = prompt("qual o nome da cidade visitada?");
  cidade += " - " + cidades + "\n";
  quantasCidades++;
  visita = prompt("voce vistou mais alguma oitra cidade ?(sim/nao) ");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    quantasCidades +
    "\nCidades visitadas:\n" +
    cidade
);
