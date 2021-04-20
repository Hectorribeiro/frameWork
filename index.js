
const prompt = require("prompt-sync")();
const nome = prompt("Qual é o seu nome?");

console.log(`Olá,${nome}! Vamos fazer um teste simples!`);

const idade = prompt("qual a sua idade?");

let risco = 0;
if(idade >= 60){
    risco++;
}
console.log("${nome} a quantidade de agravante que você tem é ${risco}");