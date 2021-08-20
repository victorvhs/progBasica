const readlineSync = require("readline-sync");
let a, b, c;
let delta;
let x1, x2;

console.log("Equação do Segundo grau: ");
console.log("-------------------------");

a = readlineSync.question("Insira o valor de A: ");
c = readlineSync.question("Insira o valor de B: ");
b = readlineSync.question("Insira o valor de C: ");

console.log("-------------------------");
console.log(`Sua equação é ${a}x2+${b}*x+${c}=0`);

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

delta = Math.pow(b, 2) - 4 * a * c;
console.log(`O valor de delta: ${delta}`);
console.log("-------------------------");

if (delta < 0) {
  console.log("Para delta negativo, não existe raízes reais");
} else if (delta === 0) {
  x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);

  console.log(`Para Delta zero, temos duas raízes iguais a:  ${x1}`);
} else {
  x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
  x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

  console.log("Para Delta positivo temos raízes diferentes.");
  console.log(`X'  = ${x1}`);
  console.log(`X'' = ${x2}`);
}
