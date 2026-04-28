/*
    Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um 
dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem
dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais 
aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. 
A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a 
senha esteja incorreta para aquele email.
*/

var credenciaisLogin = [
    {
        id: 1,
        nome: 'Maria do Rosario',
        email: 'maria@gmail.com',
        senha: '123@mudar',
        expirado: false
    },
    {
        id: 2,
        nome: 'Roberta dos Santos',
        email: 'roberta@gmail.com',
        senha: '321@mudar',
        expirado: true
    }, {
        id: 3,
        nome: 'Roberto Motta Filho',
        email: 'roberto@gmail.com',
        senha: '123@otrebor',
        expirado: true
    }, {
        id: 4,
        nome: 'Joao Victor da Silva',
        email: 'joao@gmail.com',
        senha: '123@joao',
        expirado: false
    }, {
        id: 5,
        nome: 'Rita de Cassia dos Santos',
        email: 'rita@gmail.com',
        senha: '456@rita',
        expirado: true
    },
]

export function realizarLogin(email, senha) {


    for (let i = 0; i < credenciaisLogin.length; i++) {

        //encontrou o e-mail
        if (email === credenciaisLogin[i].email) {

            //senha incorreta
            if (senha !== credenciaisLogin[i].senha) {
                throw new Error('As credenciais estão incorretas.')
            }

            //credencial expirada
            if (credenciaisLogin[i].expirado === true) {
                throw new Error('A sua credencial expirou.')
            }

            //sucesso
            return 'Login realizado com sucesso.'
        }

    }

    //email não encontrado
    throw new Error('As credenciais estão incorretas.');

}