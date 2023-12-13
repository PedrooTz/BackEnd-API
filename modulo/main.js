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

// ********************************************************************************************************

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

// ********************************************************************************************************

    const getProdutosPizzaria = (id = "1") => {


       
            let produtos = pizzariaApi.produtos
            let ArrayDados = []
            let produtoId = id
            let status = false
           
            produtos.dados.forEach((dados) => {
               
                if(dados.id == produtoId){
       
                    let JsonDados = {
                        id: dados.id,
                        nome: dados.nome,
                        descricao: dados.descricao,
                        preco: dados.preco,
                        avaliacao: dados.avaliacao,
                        img: dados.img

                    }
                   
                    status = true
                    ArrayDados.push(JsonDados)
       
                }
       
            })
            let JsonProdutos = { ArrayDados }

            if(status){
                return JsonProdutos
            } else {
                return false
            }
        };

// ********************************************************************************************************

     const getListaClientesPizzaria = function (){


        let ArraySigla = []
        let JsonSigla = {}
        let cont = 0;
        while  (cont < 8 ){
           
        ArraySigla.push(pizzariaApi.clientes.usuarios[cont])
        cont++
        }
        JsonSigla.pizzaria = ArraySigla.length
        JsonSigla.classe = ArraySigla
        return JsonSigla
           
           
        };

// ********************************************************************************************************



// console.log(getListaClientesPizzaria());

// console.log(getProdutosPizzaria());

// console.log(getClientesPizzaria());

// console.log(getDadosPizzaria());

module.exports = {
    getDadosPizzaria,
    getListaClientesPizzaria,
}