// Declarações e Variaveis
//var, let e const
//var xpto=10;
//console.log(xpto);
//var xpto=20;
//console.log(xpto);
//var - pode redeclarar e acessar fora do escopo
//let - nao pode redeclarar e nao consegue acessar fora do escopo
//if(true){
    //var nome="Fiap";
//}
//console.log(nome)

//const
//const taxaJuros =0.85;
//taxaJuros =0.50;
//console.log(taxaJuros);

// var exemplo1="Ola dev var";
// console.log(exemplo1);

// let exemplo2="Ola dev let"
// console.log(exemplo2);

// const exemplo3="Ola dev const"
// console.log(typeof exemplo3);

// let exemplo4=20;
// console.log(typeof exemplo4);

// let exemplo5=true;
// console.log(typeof exemplo5);

// let exemplo6={nome:"fiap"};
// console.log(typeof exemplo6)

// let exemplo=["Java, python, c#"];
// console.log(typeof exemplo);
// //variavel indefinida
// let exemplo8;
// console.log(exemplo8);
// //variavel vazia
// let exemplo9=null;
// console.log(exemplo9)

// const valor1=10;
// const valor2=20;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// console.log(valor1 > valor2)
// console.log(valor1 > 10 && valor2 != 20);
// console.log(valor2 < 5 || valor1 > 50)

// // OPERADORES DE COMPARAÇÃO
// console.log(valor1 < valor2)
// console.log(valor1 <= valor2)
// console.log(valor1 >= valor2)
// console.log(valor1 != valor2)
// console.log(valor1 == valor2)
// console.log(valor1 === valor2)
// onsole.log("O valor é:", valor2)

// exercicio 1:

const p = 10;
const v = 20;
const precofinal = p-v;
console.log("o preço final com desconto é:", precofinal)


// exercicio 2:

const login= 1;
const token = 100;
const transacaoautorizada = login === 1 && token >= 10;




// ESTRUTURA CONDICIONAL:

if(true){
    console.log("é Verdadeiro")
}

//if/else

let nome="fiap";

if(nome="fiap"){
    console.log("nome verdadeiro")
}else{
    console.log("nome errado")
}
// if encadeado ou animado

let idade = 17;

if(idade <= 13){
    console.log("é uma criança")
}else if(idade> 13 && idade <=18){
    console.log("é um adolescente")
}else if(idade >18 && idade <=59)
    console.log("é um adulto")
else{
    console.log("é um idoso")
}

// switch case

let times="santos";

switch(times){
    case "santos":
        console.log("um time idoso")
        break;
    case "sao paulo":
        console.log("time panetone")
        break
    case "palmeiras":
        console.log("sem mundial")
    case "corinthians":
        console.log(".")
    default:
        console.log('é tao ruim quanto a selecao brasileira')
}

// ternario

let salario=100;
let resultado = salario ==100 ? "salario certo":"salarioerrado"
console.log(resultado)

let usuario="fiap"
let userlogado= usuario ==="fiap"?"logado com sucesso":"usuario invalido"
console.log(userlogado);

function verificarparimpar(nunmero){
    return numero % 2 === 0 ?"par":"impar";
}
console.log(verificarparimpar(245))