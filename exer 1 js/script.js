const nome = prompt("insira seu nome: ");
const sobrenome = prompt("insira seu sobrenome:");
const estudo = prompt("o que voce ta estudando:");
const nascimento = prompt("em que ano voce nasceu:");

alert(
  "Cadastro Realizado Com Sucesso!\n" +
    "Nome completo:" +
    nome +
    "" +
    sobrenome +
    "" +
    "\nArea de Estudo: " +
    "" +
    estudo +
    "" +
    "\nAno de Nascimento:" +
    "" +
    (2023 - nascimento)
);
