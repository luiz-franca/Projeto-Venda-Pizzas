function mappedRowUtils(setRows, mappingFunction){
    try{
        if(!Array.isArray(setRows)){
            throw new Error(`Não é um array ${setRows}`);
        }
        return setRows.map(row => {
            try{
                return mappingFunction(row);
            }catch(error){
                console.warn(`Erro ao mapear linha ${JSON.stringify(setRows)}`)
                return null;
            }
        }).filter(Boolean);
    }catch(error){
        throw new Error(`Error função mapped row ${error.messsage}`);
    }
}
module.exports = mappedRowUtils;