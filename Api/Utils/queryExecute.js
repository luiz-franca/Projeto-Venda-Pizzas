const connectionToDataBase = require('../Configs/dbconnect');

async function queryExecute(sql, params = []) {
    try {
        const db = await connectionToDataBase();
        const result = await db.promise().query(sql, params); 
        return result; 
    } catch (error) {
        throw new Error(`Erro na consulta SQL: ${error.message}`);
    }
}

module.exports = queryExecute;
