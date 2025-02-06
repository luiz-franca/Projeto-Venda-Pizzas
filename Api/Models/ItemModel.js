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
    static async getAllItem(){
        const sql = `SELECT * FROM tbItem;`
        const response = await queryExecute(sql);
        const rows = response[0];
        if(rows.length == 0){
            console.log('tbItems vazia');
        }
        const data = mappedRowUtils(rows, row =>({
            idItem: row.idItem,
            nomeItem: row.nomeItem,
            precoItem: row.precoItem,
            descricaoItem: row.descricaoItem,
            imagemUrl: row.imagemUrl

        }));
        // verificar o pq dessa class não está carregando, ela ficará para o login
        mappedEntidade(rows, entidade.Item)
        return data;
    }
    async insertItem(){
        const sql = `INSERT INTO tbItem ( nomeItem, precoItem, descricaoItem, imagemUrl)
                    VALUES (?,?,?,?);`;
        const response = await queryExecute(sql,[this.nomeItem, this.precoItem, this.descricaoItem, this.imagemUrl]);
        if(response[0].insertId){
            console.log('item adicionado');
            return response;
        }
        console.error('não conseguiu inserir um novo item');
    }
    static async getIdItem(idItem){
        const sql = `SELECT * FROM tbItem WHERE idItem = (?);`;
        const response = await queryExecute(sql,[idItem]);
        const rows = response[0];
        const data = mappedRowUtils(rows, row =>({
            idItem: row.idItem,
            nomeItem: row.nomeItem,
            precoItem: row.precoItem,
            descricaoItem: row.descricaoItem,
            imagemUrl: row.imagemUrl
        }))
        // tenho que ver alguma função pra pegar esse class fora;
        const classItem = mappedEntidade(rows, entidade.Item)
        return data;
    }
    // parei aqui
    
}
(async()=>{
    const check = await ItemModel.getIdItem(1);
    console.log(check)
})()