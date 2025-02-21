// variavies
let variavel_local = 10; // number
const constante = []; // array
const objeto = {}; // objeto
const msg = "Texto"; // string
let status = false; // bool

// funcoes
function soma(a, b) {
  return a + b;
}
let resultado = soma(1, 2);

const multiplica = (a, b) => a * b;
resultado = multiplica(1, 2);
/*
function multiplica(a, b) {
  return a * b;
}
*/

async function tempo(duracao) {
  await new Promise((r) => {
    setInterval(r, duracao);
  });
  console.log("passou o tempo!");
}

tempo(3000);

// objetos

const pessoa = {nome: "Jose", email: "jose@iesb.br", fone: "4002-8922"};
console.log(pessoa.nome);
pessoa.nome  = "Jose Reginaldo";
console.log(pessoa.nome);
const {nome} = pessoa;
console.log(nome);
const pessoa_fisica = {cpf: 123, ...pessoa};

const lista = []
lista.push("uva")
const achou = lista.find((item) => item == "uva")

/*
for (int i=0; <lista.length; i++){
    if (lista[i] == "uva"){

    }
}*/

const texto = "ola";
texto.concat("Mundo");
texto.toUpperCase();

// modulos

