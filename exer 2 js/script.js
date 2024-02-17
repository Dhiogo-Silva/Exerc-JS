const x = prompt("insira um valor");
const y = prompt("insira outro valor");

const valor1 = parseFloat(x);
const valor2 = parseFloat(y);

alert(
  "O resultado da soma e : " +
    (valor1 + valor2) +
    "\no resultado da subtracao e :" +
    (valor1 - valor2) +
    "\no resultado da multiplicacao e :" +
    valor1 * valor2 +
    "\no resultado da divisao e " +
    valor1 / valor2
);
