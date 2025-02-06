const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade();
class ItemModel{
    constructor(idItem=null,nomeItem=null, precoItem=null , descricaoItem=null, imagemUrl=null){
        this.nomeItem = idItem;
        this.nomeItem = nomeItem;
        this.precoItem = precoItem;
        this.descricaoItem = descricaoItem;
        this.imagemUrl = imagemUrl;
    }
    
}
(async()=>{
    const check = new ItemModel(null,"item",30,"balaldada","dasdasdad" );
    console.log(check);
})