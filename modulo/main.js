const pizzariaApi =require('./pizzaria')

const getDadosPizzaria = function (){


let ArraySigla = []
let JsonSigla = {}
let cont = 0;
while  (cont < 27 ){

ArraySigla.push(pizzariaApi.categorias[cont].pizzaria)
cont++
}
JsonSigla.quantidade = ArraySigla.length
JsonSigla = ArraySigla
return JsonSigla


};

console.log(getDadosPizzaria());