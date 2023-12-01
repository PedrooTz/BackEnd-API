const pizzariaApi =require('./pizzaria')

const getDadosPizzaria = function (){


let ArraySigla = []
let JsonSigla = {}
let cont = 0;
while  (cont < 6 ){

ArraySigla.push(pizzariaApi.categorias.pizzaria[cont])
cont++
}
JsonSigla.pizzaria = ArraySigla.length
JsonSigla.classe = ArraySigla
return JsonSigla


};

const getClientesPizzaria = function() {

    
    let pizarriaARRAY=[]
    let filtrarNome = 'Fulano da Silva'
    let cont = 0
    while(cont < 8){
        
        if(filtrarNome.toUpperCase()==pizzariaApi.clientes.usuarios[cont].nome.toUpperCase()){
        pizarriaJSON={}
        pizarriaJSON.id =pizzariaApi.clientes.usuarios[cont].id
        pizarriaJSON.nome=pizzariaApi.clientes.usuarios[cont].nome
        pizarriaJSON.email=pizzariaApi.clientes.usuarios[cont].email
        pizarriaJSON.senha=pizzariaApi.clientes.usuarios[cont].senha
        pizarriaJSON.telefone=pizzariaApi.clientes.usuarios[cont].telefone
        pizarriaJSON.img=pizzariaApi.clientes.usuarios[cont].img
        pizarriaJSON.endereço=pizzariaApi.clientes.usuarios[cont].endereço
        pizarriaARRAY.push(pizarriaJSON)
        }
       cont++

    };

    return pizarriaARRAY;
};

    const getProdutosPizzaria = function(){

            let JsonDados = {}
            let produtos = pizzariaApi.produtos.dados;
    
            produtos.forEach(function (dados) {
    
                if(produtos = '1'){
                    JsonDados.id = dados.id
                    JsonDados.nome = dados.nome
                    JsonDados.descricao = dados.descricao
        
                }
                
            });



    }

    console.log(getProdutosPizzaria(1));

// console.log(getClientesPizzaria());


// console.log(getDadosPizzaria());