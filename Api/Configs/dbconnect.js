const mysql = require('mysql');
const util  = require('util');
const handleDatabaseErro = require('./utils')
require('dotenv').config({path: '../.env'});

const acessEnvs = {
    userAcess: process.env.USERACESS,
    hostAcess: process.env.HOSTACESS,
    passwordAcess: process.env.PASSWORDACESS,
    databaseAcess: process.env.DATABASEACESS,
    portaAcess: process.env.PORTACESS
}
const conn = mysql.createConnection({
    host: acessEnvs.hostAcess,
    user: acessEnvs.userAcess,
    password: acessEnvs.passwordAcess,
    database: acessEnvs.databaseAcess,
    port: acessEnvs.portaAcess
})
const connectDb = util.promisify(conn.connect).bind(conn)
const connectionToDataBase = async () =>{
    try{
        await  connectDb();
        console.log('Conectado')
    }catch (erro){
        handleDatabaseErro(erro)
    }
}
module.exports = connectionToDataBase();