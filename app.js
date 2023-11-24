// **********************************************************
// Trabalho Final de Back-End orientado pelo professor Marcel
// Pedro Pedraga - 24//11/2023
// Requisitar API feita com EndPoint.
//
// **********************************************************

// Instalando cors, express e body-parser via terminal: 
// npm install cors --save;
// npm install express --save;
// npm install body-parser --save;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//request - Receber dados
//response - Devolve dados

//Função para configurar as permissões do cors
app.use((request, response, next)=>{
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*');
    //Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET');
    app.use(cors());

    next();
})
app.get('pizzaria.js', cors(), async function(request, response,next){
    let controlePizzaria = require('./modulo/main');
    let categorias = controlePizzaria.categorias();

    response.json(categorias);
    response.status(200);
});

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições!!!');
})