require('dotenv').config({path: '../.env'});

const acessEnvs = {
    userAcess: process.env.USERACESS,
    hostAcess: process.env.HOSTACESS,
    passwordAcess: process.env.PASSWORDACESS,
    databaseAcess: process.env.DATABASEACESS,
    portaAcess: process.env.PORTACESS
}

function handleDatabaseErro(erro){
    const errorMessages = {
        1045: 'Erro de autenticação: Usuário ou senha inválidos.',
        1049: 'Erro: Banco de dados não encontrado.',
        2002: 'Erro de conexão: Servidor MySQL não encontrado ou offline.',
        2003: 'Erro: A porta do MySQL pode estar errada ou bloqueada.'
    };
    console.error(errorMessages[erro.errno] || `Erro desconhecido: ${erro.message}` )
}
module.exports = {acessEnvs, handleDatabaseErro};