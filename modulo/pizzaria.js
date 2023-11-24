var clientes = {
    usuarios:
    [
    
        {
            id: '1',
            nome: 'Fulano da Silva',
            email: 'Fulano@email.com',
            senha: 'fulano1',
            telefone: '11-98562-2929',
            img: 'img/',
            endereço: 
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Martins de Sá',
                    Número: '192',
                    Complemento: 'Casa'
                }
            ] 
           
        },
        {
            id: '2',
            nome: 'Pedro Pedraga',
            email: 'pedrinhofofo@gmail.com',
            senha: 'pedrinho1',
            telefone: '11-03353-35353',
            img: 'img/',
            endereço: 
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Jardim São Paulo',
                    Número: '200',
                    Complemento: 'Casa'
                }
            ] 
           
        },
        {
            id: '3',
            nome: 'Guilherme  Oliveira',
            email: 'guilherme@ggmail.com',
            senha: 'guilherme1',
            telefone: '11-49629-53923',
            img: 'img/',
            endereço: 
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Barueri',
                    Número: '2032',
                    Complemento: 'Casa'
                }
            ] 
        },
           {
            id: '4',
            nome: 'Natália Bastazini',
            email: 'natalia@gmail.com',
            senha: 'natalia1',
            telefone: '11-2241-24244',
            img: 'img/',
            endereço:
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Natalia',
                    Número: '900',
                    Complemento: 'Apartamento'
                }
            ] 
            
        },
           {
            id: '5',
            nome: 'Carolina Neponucena',
            email: 'carol@gmail.com',
            senha: 'carol1',
            telefone: '11-24142-42424',
            img: 'img/',
            endereço: 
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Pedro', 
                    Número: '12',
                    Complemento: 'Casa'
                }

            ]
            
        },
           {
            id: '6',
            nome: 'Vitor Hugo',
            email: 'vitor@gmail.com',
            senha: 'vitor1',
            telefone: '11-24142-4242',
            img: 'img/',
            endereço:
            [
                {
                cidade: 'Guarulhos',
                rua: 'Antonio Guerra',
                Número: '252',
                Complemento: 'Casa'
                }
            ]   
        },
           {
            id: '7',
            nome: 'Bianca Maria',
            email: 'bianca@gmail.com',
            senha: 'bianca1',
            telefone: '11-24268-8688',
            img: 'img/',
            endereço: 
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Bianca',
                    Número: '980',
                    Complemento: 'Apartamento'
                }
            ] 
           
        },
        {
            id: '8',
            nome: 'Mariana Alves',
            email:'mariana@gmail.com',
            senha: 'mariana1',
            telefone: '11-24244-5776',
            img: 'img/',
            endereço:
            [
                {
                    cidade: 'Guarulhos',
                    Rua: 'Mariana',
                    Número: '200',
                    Complemento: 'Casa'
                }
            ] 
            
        }
        
    ]
};

    var categorias = {
        pizzaria:
    [
        {
            id: 10,
            classe: 'Pizza Salgada',
            img: 'img/'
        },
        {
            id: 20,
            classe: 'Pizza Doce',
            img: 'img/' 
        },
        {
            id: 30,
            classe: 'Bebidas',
            img: 'img/'
        },
        {
            id: 40,
            classe: 'Bebidas alcóolicas',
            img: 'img/'
        },
        {
            id: 50,
            classe: 'Sorvetes',
            img: 'img/'
        },
        {
            id: 60,
            classe: 'Sobremesas',
            img: 'img/'
        }

    ]
}

    var produtos = {
        dados:
        [
            {
                id: 1,
                nome: 'Pizza de Calabresa',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                preco: '23,59',
                img: 'img/',
                avaliacao: '⭐⭐⭐'
            },
            {
                id: 2,
                nome: 'Pizza de Peperoni com queijo', 
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                preco: '24.00',
                img: 'img/',
                avaliacao: '⭐⭐⭐⭐'
            },
            {
                id: 3,
                nome: 'Pizza de Peperoni com queijo e tomate', 
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                preco: '24.00',
                img: 'img/',
                avaliacao: '⭐⭐'
            },
            {
                id: 4,
                nome: 'Pizza brotinho com queijo e tomate', 
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                preco: '24.00',
                img: 'img/',
                avaliacao: '⭐⭐⭐⭐'
            },
            {
                id: 3,
                nome: 'Coca-Cola', 
                descricao: 'Refrigerante Garrafa 3l, embalagem ecônomica.',
                preco: '14.99',
                img: 'img/',
                avaliacao: '⭐⭐⭐⭐⭐'
            },
            {
                id: 4,
                nome: 'Cerveja Heineken', 
                descricao: 'Refrigerante Garrafa 3l, embalagem ecônomica..',
                preco: '17.99',
                img: 'img/',
                avaliacao: '⭐'
            },
            

        ]

    }

module.exports={clientes, categorias, produtos}
