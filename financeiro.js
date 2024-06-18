import prompt from "prompt-sync";
let ler = prompt();

export function depositar(saldo){

    console.log('Quantos você deseja depositar?');
    let depositado = Number(ler());

let x = true

    while(depositado <= 0){
        console.log('Quantos você deseja depositar?');
        depositado = Number(ler());
    
    if(depositado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tld = depositado + saldo

console.log('Seu saldo atual é de: ' + tld);

    return tld
}

export function sacar(saldo){
    console.log('Quantos você deseja sacar?');
    let sacado = Number(ler());

let x = true

    while(sacado <= 0){
        console.log('Quantos você deseja sacar?');
        sacado = Number(ler());

    
    if(sacado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tls = saldo - sacado

console.log('Seu saldo atual é de: ' + tls);

    return tls
}

export function exibirsaldo(saldo){
    console.log(`Seu saldo atual é de: ${saldo}`);
}