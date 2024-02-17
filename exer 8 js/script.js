let saldo = parseFloat(prompt("qual o valor inicial: "));

let opcao = "";

do {
  opcao = prompt(
    "seu saldo atual e :" +
      saldo +
      "\n" +
      "deseja adicionar mais dinheiro escolha 1 \n" +
      "caso deseje retirar do saldo escolha 2 " +
      "\ncase deseje encerrar digite 3"
  );
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("qual o valor que deseja adicionar: "));
      break;
    case "2":
      saldo -= prompt("qual o valor que deseja retirar ?");
      break;
    case "3":
      alert("encerrando programa...");
      break;
  }
} while (opcao !== "3");
