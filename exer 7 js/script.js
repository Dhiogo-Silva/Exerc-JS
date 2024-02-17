let opcao = "5";

do {
  opcao = prompt(
    "Seja bem vindo\n" +
      "escolha umas das 5 opcoes\n" +
      "1 opcao" +
      "\n2 opcao" +
      "\n3 opcao" +
      "\n4 opcao" +
      "\n5 encerrar"
  );
  switch (opcao) {
    case "1":
      alert("voce escolheu a opcao 1");
      break;
    case "2":
      alert("voce escolheu a opcao 2");
      break;
    case "3":
      alert("voce escolheu a opcao 3");
      break;
    case "4":
      alert("voce escolheu a opcao 4");
      break;
    case "5":
      alert("encerrando o program..");
      break;
    default:
      alert("voce escolheu um opcao invalida");
  }
} while (opcao !== "5");
