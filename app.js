import prompt from "prompt-sync";
let ler = prompt();

import { menu } from "./exibicao.js";

console.log('Diga seu saldo:');
let saldo = Number(ler());

let m = menu(saldo)



