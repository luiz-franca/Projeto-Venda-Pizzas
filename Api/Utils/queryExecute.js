const connectionToDataBase = require('../Configs/dbconnect');

async function queryExecute(sql, params = []) {
    try {
        const db = await connectionToDataBase();

        return new Promise((resolve, reject) => {
            db.query(sql, params, (err, result, fields) => {
                err ? reject(new Error(`Erro na consulta SQL: ${err.message}`)) 
                    : resolve(JSON.stringify(result));
            });
        });

    } catch (error) {
        throw new Error(`Erro ao conectar ao banco de dados: ${error.message}`);
    }
}

module.exports = queryExecute;
