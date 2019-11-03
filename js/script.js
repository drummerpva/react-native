import{multiplicar, criador} from "./matematica.js";

console.log(multiplicar(10,5));
console.log(`Criador: ${criador}`);

//Classes

import{Gato} from "./animal.js";
let gato = new Gato(4,"Preto");
console.log(gato.falar());
console.log(gato.dados);
console.log(`Cor: ${gato.color}`)
//gato.pernas = 2;
//console.log(gato.dados);