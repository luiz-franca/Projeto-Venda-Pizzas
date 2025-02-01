const mysql = require('mysql2');
const util  = require('util');
const {acessEnvs, handleDatabaseErro} = require('./utils')

const credenciaisDB = mysql.createPool({
    host: acessEnvs.hostAcess,
    user: acessEnvs.userAcess,
    password: acessEnvs.passwordAcess,
    database: acessEnvs.databaseAcess,
    port: acessEnvs.portaAcess
})
const connectionToDataBase = async () => {
    try {
        const conn = await credenciaisDB;
        console.log('Conectado ao banco de dados.');
        return conn;
    } catch (erro) {
        handleDatabaseErro(erro);
        throw erro;
    }
};
module.exports = connectionToDataBase;