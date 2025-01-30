const mysql = require('mysql');

const acessEnvs = {
    userAcess: 'root',
    hostAcess: 'localhos',
    passwordAcess: 'danidani',
    databaseAcess: 'dbselfpaypizzas',
    portaAcess: 3306
}

try{
    const conn = mysql.createConnection({
        host: acessEnvs.hostAcess,
        user: acessEnvs.userAcess,
        password: acessEnvs.passwordAcess,
        database: acessEnvs.databaseAcess,
        port: acessEnvs.portaAcess
    })
    conn.connect( function(erro){
        // erro.sqlMessage || erro.code ? console.error(erro.sqlMessage): console.log('Conectado');
        console.log(erro.code)
    })
}
catch(error){
    throw new Error(`Não conectou ao banco ${error}`);
}
