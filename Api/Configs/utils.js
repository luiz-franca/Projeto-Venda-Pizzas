require('dotenv').config({path: '../.env'});

const acessEnvs = {
    userAcess: process.env.DB_USER,
    hostAcess: process.env.DB_HOST,
    passwordAcess: process.env.DB_PASSWORD,
    databaseAcess: process.env.DB_NAME,
    portaAcess: process.env.PORT_ACESS
}

console.log(acessEnvs
)
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