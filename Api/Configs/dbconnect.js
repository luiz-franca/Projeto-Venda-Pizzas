const mysql = require('mysql');

const acessEnvs = {
    userAcess: 'roo',
    hostAcess: 'localhost',
    passwordAcess: 'D@nidani1985',
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
        console.log(erro)
        switch(erro){
            case erro.code = 1045:
                throw new Error(`${erro}`)
                break;
        }
    })
}
catch(error){
    throw new Error(`Não conectou ao banco ${error}`);
}
