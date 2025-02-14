function mappedEntidade(dataArray, Entidadeclass){
    if(!Array.isArray(dataArray)){
        throw new Error("A mapEntidade não detectou um array!")
    }
    return dataArray.map(data => new Entidadeclass(data))
}
module.exports = mappedEntidade;