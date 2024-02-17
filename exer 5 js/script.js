const valor = prompt("insira o valor em metros ");

const opcao = prompt(
  "e para qual medida quer converter\n \n1. mm \n2. cm \n3. dm \n4. dam \n5. hm \n6. km"
);

switch (opcao) {
  case "1":
    alert("o resultado e " + valor * 1000);
    break;
  case "2":
    alert("o resultado e " + valor * 100);
    break;
  case "3":
    alert("o resultado e" + valor * 10);
    break;
  case "4":
    alert("o resultado e:" + valor / 10);
    break;
  case "5":
    alert("o resultado e " + valor / 100);
    break;
  case "6":
    alert("o resultado e " + valor / 1000);
    break;
  default:
    alert("opcao invalida");
}
