let pacientes = [];

let adicionar = "";

do {
  adicionar = prompt(
    "Deseja ser atendido escolha 1 \n" +
      "Consultar Paciente escolha 2" +
      "\nCaso deseje encerrar digite 3"
  );
  switch (adicionar) {
    case "1":
      const nome = prompt("qual e o seu nome: ");
      pacientes.push[nome];
      alert("\n" + nome + "\n");
      break;
    case "2":
      let elementoRemovido = pacientes.shift();
      alert(elementoRemovido);
      break;
    case "3":
      alert("encerrando programa ...");
      break;
  }
} while (adicionar !== "3");
