require('dotenv').config({ path: '../.env' });
// const ItemEstoqueModel = require('@models/ItemEstoqueModel')
const ItemEstoqueModel = require('./../Models/ItemEstoqueModel')
class ItemEstoqueService{
    static async insertItemEstoque(idItem, idEstoque, quantidade){
        try{
            if(!idItem || !idEstoque || quantidade === undefined) throw new Error("Todos os campos são obrigatórios");
            const insertItem = new ItemEstoqueModel(idItem, idEstoque, quantidade);
            return await insertItem.insertItemEstoque();
        }catch(error){
            throw new Error("Erro insertItemEstoque "+error);
        }
    }
    static async getAllItensEstoque(){
        try{
            return await ItemEstoqueModel.getAllItensEstoque();
        }catch(error){
            throw new Error("Erro GetAllItensEstoques "+error);
        }
    }
    static async getAllNomesItensEstoque(){
        try{
            return await ItemEstoqueModel.getAllNomesItensEstoque();
        }catch(error){
            throw new Error("Erro GetAllNomesItensEstoque "+error);
        }
    }
    static async getIdNomeItemEstoque(idItem){
        try{
            if(!idItem) throw new Error("idItem é Obrigatório ");
            return await ItemEstoqueModel.getIdNomeItemEstoque(idItem);
        }catch(error){
            throw new Error("Erro getIdNomeItensEstoque "+error);
        }
    }
    static async updateItemEstoque(idItem, idEstoque, quantidade){
        try{
            if(!idItem || !idEstoque || quantidade === undefined) throw new Error("todos os campos são obrigatórios");
            const upItemEstoque = await new ItemEstoqueModel(idItem,idEstoque,quantidade);
            return await upItemEstoque.updateItemEstoque(idItem,idEstoque);
        }catch(error){
            throw new Error("Error updateItemEstoque "+error);
        }
    }
    static async deleteItemEstoque(idItem, idEstoque){
        try{
            if(!idItem || !idEstoque) throw new Error("Todos os campos são obrigatórios");
            return await ItemEstoqueModel.deleteItemEstoque(idItem,idEstoque);
        }catch(error){
            throw new Error("Errot deleteItemEstoque "+error);
        }
    }
    static async getItemEstoqueId(idItem, idEstoque){
        try{
            if(!idItem || !idEstoque) throw new Error("Todos os campos são obrigatórios");
            return await ItemEstoqueModel.getItemEstoqueId(idItem,idEstoque);
        }catch(error){
            throw new Error("Error GetItemsEstoqueId "+error);
        }
    }
}
module.exports = ItemEstoqueService;